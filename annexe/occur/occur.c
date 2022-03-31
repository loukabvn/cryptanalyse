#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <fcntl.h>
#include <unistd.h>
#include <dirent.h>
#include <string.h>
#include "bst/bst.h"

#define FUN_FAILURE -1
#define FUN_SUCCESS 0

#define ALPHABET_SIZE 26
#define FACT_LENGTH 3

// struct for handling arguments on command line
typedef struct {
  const char *op;
  enum {
    UNARY, BINARY
  } arity;
  const char *help;
} argstruct;

// enum of all the different option
typedef enum {
  ARG_FILE,
  ARG_F,
  ARG_COUNT,
  ARG_C,
  ARG_THRES,
  ARG_T,
  ARG_DUPLI,
  ARG_D,
  ARG_HELP,
  ARG_DEFAULT
} operator;

// definition of all the option, arity and help
argstruct argarray[] = {
  [ARG_FILE] = {
    .op = "--file",
    .arity = BINARY,
    .help = " \033[4;38mfile\033[0m\n\t\tOpen the following file and make "
            "frequency analysis on it's content."
  },
  [ARG_F] = {
    .op = "-f",
    .arity = BINARY,
    .help = " \033[4;38mfile\033[0m\n\t\tSame as --file file."
  },
  [ARG_COUNT] = {
    .op = "--count",
    .arity = BINARY,
    .help = " \033[4;38mvalue\033[0m\n\t\tAsk to keep only the \033[4;38mvalue\033[0m "
            "first result on each factor size."
  },
  [ARG_C] = {
    .op = "-c",
    .arity = BINARY,
    .help = " \033[4;38mvalue\033[0m\n\t\tSame as --count \033[4;38mvalue\033[0m"
  },
  [ARG_THRES] = {
    .op = "--threshold",
    .arity = BINARY,
    .help = " \033[4;38mvalue\033[0m\n\t\tAsk to keep only result above the threshold value.\n\t\t"
            "The argument \033[4;38mvalue\033[0m need to be in bound of [0 : 100]).\n\t\t"
            "if this argument isn't specified the default value is 0"
  },
  [ARG_T] = {
    .op = "-t",
    .arity = BINARY,
    .help = " \033[4;38mvalue\033[0m\n\t\tSame as --threshold \033[4;38mvalue\033[0m"
  },
  [ARG_DUPLI] = {
    .op = "--duplicate",
    .arity = UNARY,
    .help = "\n\t\tAsk to show stat on bigram that are composed by the same letters."
  },
  [ARG_D] = {
    .op = "-d",
    .arity = UNARY,
    .help = "\n\t\tSame as --duplicate"
  },
  [ARG_HELP] = {
    .op = "--help",
    .arity = UNARY,
    .help = "\n\t\tPrint this help and exit."
  },
};

void usage(const char *name);

int mkstat(char *buf, size_t size, int count, double threshold, int duplicate);

int main(int argc, char *argv[]) {
  if (argc == 1) {
    usage(argv[0]);
    return EXIT_SUCCESS;
  }

  int idx = 1;
  int count = 0;
  double threshold = 0;
  int duplicate = 0;
  const char *file = NULL;
  // parsing the cmd line according to the option defined in the argarray
  while (idx < argc) {
    int k = 0;
    while (k < ARG_DEFAULT && strcmp(argv[idx], argarray[k].op) != 0) {
      ++k;
    }
    // check for arity
    if (idx + (argarray[k].arity == BINARY) == argc) {
      fprintf(stderr, "Error: Missing arguments after '%s'\n\n", argv[idx]);
      exit(EXIT_FAILURE); 
    }
    // check for different case
    switch (k) {
      case ARG_F:
      case ARG_FILE:
        ++idx;
        file = argv[idx]; 
        break;
      case ARG_C:
      case ARG_COUNT:
        ++idx;
        count = (int)strtol(argv[idx], NULL, 10);  
        break;
      case ARG_THRES:
      case ARG_T:
        ++idx;
        sscanf(argv[idx], "%lf", &threshold);
        if (threshold < 0 || threshold > 100) {
          fprintf(stderr, "Error: value %lf isn't in bound [ 0 : 100 ]\n\n", threshold);
          exit(EXIT_FAILURE);
        }
        break; 
      case ARG_D:
      case ARG_DUPLI:
        duplicate = 1;
        break; 
      case ARG_HELP:
        usage(argv[0]);
        exit(EXIT_SUCCESS);
      case ARG_DEFAULT:
        fprintf(stderr, "Error: Unrecognized arguments '%s'\n\n", argv[idx]);
        exit(EXIT_FAILURE);        
    }
    ++idx; 
  }

  int fd = open(file, O_RDONLY);
  if (fd == -1) {
    perror("open");
    exit(EXIT_FAILURE);
  }
  off_t size = lseek(fd, 0, SEEK_END);
  lseek(fd, 0, SEEK_SET);

  char *buf = malloc(sizeof(*buf) * (size_t)size);
  if (buf == NULL) {
    if (close(fd) == -1) {
      perror("close");
      exit(EXIT_FAILURE);
    }
    perror("malloc");
    exit(EXIT_FAILURE);
  }

  if (read(fd, buf, (size_t)size) != (ssize_t)size) {
    perror("read");
    free(buf);
    if (close(fd) == -1) {
      perror("close");
      exit(EXIT_FAILURE);
    }
    exit(EXIT_FAILURE);     
  }

  if (close(fd) == -1) {
    perror("close");
    free(buf);
    exit(EXIT_FAILURE);
  }

  if (mkstat(buf, (size_t)size, count, threshold, duplicate) != 0) {
    fprintf(stderr, "Error: Unable to make stat on this file\n");
    free(buf);
    if (close(fd) == -1) {
      perror("close");
      exit(EXIT_FAILURE);
    }
    exit(EXIT_FAILURE);        
  }
 
  free(buf);
  return EXIT_SUCCESS; 
}

typedef struct mkstat_t {
  char *str;
  int occur;
}mkstat_t;

mkstat_t *new_mkstat_c(char *str, int occur) {
  mkstat_t *s = malloc(sizeof(*s));
  if (s == NULL) {
    return NULL;
  }
  s->str = str;
  s->occur = occur;
  return s;
}

mkstat_t *new_mkstat(char *str) {
  return new_mkstat_c(str, 0);
}

void mkstat_dispose(mkstat_t *s) {
  if (s != NULL) {
    free(s->str);
    free(s);
  }
}

int mkstat_cmp(mkstat_t *s1, mkstat_t *s2) {
  return strcmp(s1->str, s2->str);
}

int mkstat_display(size_t size, mkstat_t *value, double threshold) {
  double percent = ((double)value->occur / (double)size) * 100;
  if (percent >= threshold) {
    fprintf(stdout, "%s; %lf\n", value->str, percent);
  }
  return 0;
}

int mkstat_sort(mkstat_t **a, mkstat_t **b) {
  return ((*a)->occur < (*b)->occur) - ((*a)->occur > (*b)->occur);
}

typedef struct bst_mkstat_helper {
  mkstat_t **res;
  size_t index;
} bst_mkstat_helper;

int bst_to_mkstat_helper(bst_mkstat_helper *help, mkstat_t *value) {
  help->res[help->index] = value;
  ++(help->index);
  return 0;
}

mkstat_t **bst_to_mkstat(bst *b, size_t *count) {
  *count = bst_size(b);
  mkstat_t **res = malloc(sizeof(*res) * *count);
  if (res == NULL) {
    return NULL;  
  }
  bst_mkstat_helper *help = malloc(sizeof(*help));
  if (help == NULL) {
    free(res);
    return NULL;
  } 
  help->res = res;
  help->index = 0;

  bst_infixe_apply_context(b, help, (int (*)(void *, const void *))bst_to_mkstat_helper); 
  free(help);
  
  qsort(res, *count, sizeof(mkstat_t *), 
    (int (*)(const void *, const void *))mkstat_sort); 
  bst_dispose(&b);
  return res;
}

int mkstat(char *buf, size_t size, int count, double threshold, int duplicate) {
  int *fact1 = malloc(sizeof(*fact1) * ALPHABET_SIZE);
  if (fact1 == NULL) {
    return FUN_FAILURE;
  }
  bst *fact2 = bst_empty((int (*)(const void *, const void *))mkstat_cmp);
  if (fact2 == NULL) {
    free(fact1);
    return FUN_FAILURE;
  }
  bst *fact3 = bst_empty((int (*)(const void *, const void *))mkstat_cmp);
  if (fact2 == NULL) {
    free(fact1);
    bst_dispose(&fact2);
    return FUN_FAILURE;
  } 
  for (size_t i = 0; i < ALPHABET_SIZE; ++i) {
    fact1[i] = 0;
  }
  size_t i = 0;
  size_t letters[FACT_LENGTH] = {0, 0, 0};
  while (i < size) {
    size_t k = 0;
    char fact[FACT_LENGTH + 1];
    while (k + i < size && k < FACT_LENGTH) {
      char c = buf[i + k]; 
      if (isupper(c)) {
        c = (char)('a' + (c - 'A'));
      }
      if (isspace(c) || ispunct(c)) {
        k = FACT_LENGTH;
      }
      if (islower(c)) {
        switch (k) {
          case 0:
            fact[k] = c;
            ++fact1[c - 'a'];
            ++letters[k];
            break;
          case 1:
            fact[k] = c;
            fact[k + 1] = '\0';
            ++letters[k];
            char *tmp = malloc(sizeof(*tmp) * (k + 2));
            if (tmp == NULL) {
              free(fact1);
              bst_dispose(&fact2);
              bst_dispose(&fact3);
              return FUN_FAILURE; 
            }
            tmp[0] = fact[0];
            tmp[1] = fact[1];
            tmp[2] = fact[2];
            mkstat_t *st = new_mkstat(tmp);
            if (st == NULL) {
              free(tmp);
              free(fact1);
              bst_dispose(&fact2);
              bst_dispose(&fact3);
              return FUN_FAILURE; 
            }   
            mkstat_t *prev = (mkstat_t *)bst_search(fact2, st);     
            if (prev != NULL) {
              mkstat_dispose(st);
              ++(prev->occur);
            } else {
              ++(st->occur);
              bst_add_endofpath(fact2, st);
            } 
            break;
          case 2: 
            fact[k] = c;
            fact[k + 1] = '\0';
            ++letters[k];
            tmp = malloc(sizeof(*tmp) * (k + 2));
            if (tmp == NULL) {
              free(fact1);
              bst_dispose(&fact2);
              bst_dispose(&fact3);
              return FUN_FAILURE;
            }
            tmp[0] = fact[0];
            tmp[1] = fact[1];
            tmp[2] = fact[2];           
            tmp[3] = fact[3];
            st = new_mkstat(tmp);
            if (st == NULL) {
              free(tmp);
              free(fact1);
              bst_dispose(&fact2);
              bst_dispose(&fact3);
              return FUN_FAILURE; 
            }   
            prev = (mkstat_t *)bst_search(fact3, st);     
            if (prev != NULL) {
              mkstat_dispose(st);
              ++(prev->occur);
            } else {
              ++(st->occur);
              bst_add_endofpath(fact3, st);
            }
            break;
          default:
            exit(EXIT_FAILURE);
        }      
      }
      ++k;
    }
    ++i;
  } 

  /* sorting result */
  mkstat_t **res1 = malloc(sizeof(*res1) * ALPHABET_SIZE);
  if (res1 == NULL) {
    free(fact1);
    bst_dispose(&fact2);
    bst_dispose(&fact3); 
    return FUN_FAILURE;
  } 
   
  for (size_t i = 0; i < ALPHABET_SIZE; ++i) {
    char *tmp = malloc(sizeof(*tmp) * 2);
    if (tmp == NULL) {
      free(fact1);
      bst_dispose(&fact2);
      bst_dispose(&fact3); 
      return FUN_FAILURE;
    }
    tmp[0] =  (char)('a' + i);
    tmp[1] = '\0';
    res1[i] = new_mkstat_c(tmp, fact1[i]);
    if (res1[i] == NULL) {
      free(fact1);
      bst_dispose(&fact2);
      bst_dispose(&fact3); 
      return FUN_FAILURE; 
    }
  }
  free(fact1);
   
  qsort(res1, ALPHABET_SIZE, sizeof(mkstat_t *), 
    (int (*)(const void *, const void *))mkstat_sort); 
  
  size_t count2;
  mkstat_t **res2 = bst_to_mkstat(fact2, &count2);
  
  size_t count3;
  mkstat_t **res3 = bst_to_mkstat(fact3, &count3);   
  
  fprintf(stdout, "\n=== freq of words of size 1 ===\n\n");     
  double max1 = (double)res1[0]->occur / (double)letters[0] * 100;
  if (threshold > max1) {
    fprintf(stdout, "\tNo result: all the values are above the threshold,\n"
                    "\tthe maximum value was %lf%% against %.3lf%%\n", 
                    max1, threshold);
  } else {
    size_t index = count == 0 ? ALPHABET_SIZE : (count > ALPHABET_SIZE ? ALPHABET_SIZE : (size_t)count);
    for (size_t i = 0; i < index; ++i) {
      mkstat_display(letters[0], res1[i], threshold);
      mkstat_dispose(res1[i]);
    }
  }

  fprintf(stdout, "\n=== freq of words of size 2 ===\n\n");     
  double max2 = (double)res2[0]->occur / (double)letters[1] * 100;
  if (threshold > max2) {
    fprintf(stdout, "\tNo result: all the values are above the threshold,\n"
                    "\tthe maximum value was %lf%% against %.3lf%%\n", 
                    max2, threshold);
  } else {
    size_t index = count == 0 ? count2 : (size_t)count;
    for (size_t i = 0; i < index; ++i) {
      mkstat_display(letters[1], res2[i], threshold);
      if (!duplicate) {
        mkstat_dispose(res2[i]);
      }
    }
  }

  fprintf(stdout, "\n=== freq of words of size 3 ===\n\n");     
  double max3 = (double)res3[0]->occur / (double)letters[2] * 100;
  if (threshold > max3) {
    fprintf(stdout, "\tNo result: all the values are above the threshold,\n"
                    "\tthe maximum value was %lf%% against %.3lf%%\n\n", 
                    max3, threshold);
  } else {
    size_t index = count == 0 ? count3 : (size_t)count;
    for (size_t i = 0; i < index; ++i) {
      mkstat_display(letters[2], res3[i], threshold);
      mkstat_dispose(res3[i]);
    }
  }
  
  if (duplicate) {
    fprintf(stdout, "\n=== freq of words of duplicate ===\n\n");     
    double max_dup = (double)res2[0]->occur / (double)letters[1] * 100;
    if (threshold > max_dup) {
      fprintf(stdout, "\tNo result: all the values are above the threshold,\n"
                    "\tthe maximum value was %lf%% against %.3lf%%\n", 
                    max_dup, threshold);
    } else {
      size_t index = count2;
      size_t max = 0;
      for (size_t i = 0; i < index; ++i) {
        if (max <= (size_t)count) {
          if (res2[i]->str[0] == res2[i]->str[1]) {
            mkstat_display(letters[1], res2[i], threshold);
            mkstat_dispose(res2[i]);
            ++max;
          }
        }
      }
    }
  }  
  free(res1);
  free(res2);
  free(res3);
  return FUN_SUCCESS;
}

#define BOLD "\033[1m"
#define RESET "\033[0m"

void usage(const char *prg) {
  fprintf(stdout, BOLD "NAME" RESET "\n\tOccur - an Frequencies Analyser\n\n");
  fprintf(stdout, BOLD "SYNOPSIS\n\n\t%s [OPTIONS] [FILE] ...\n\n" RESET, prg);
  fprintf(stdout, BOLD "DESCRIPTIONS\n\n\toccur" RESET " is a tool for analysing a"
    " text given as parameter. You can retrieve \n\tfrequencies of letters, bigram or trigram.\n\n"
		"\t\tex : ./occur -f \033[4;38mfile\033[0m > freq.csv\n");
  
  fprintf(stdout, BOLD "\nOPTIONS\n\n" RESET); 
  for (size_t i = 0; i < sizeof(argarray) / sizeof(*argarray); ++i) {
    fprintf(stdout, BOLD "\t%s" RESET "%s\n\n", argarray[i].op, argarray[i].help);
  }
  fprintf(stdout, BOLD "DEPENDENCIES" RESET "\n\n\tNone.\n\n"); 
  
  fprintf(stdout, BOLD "AUTHORS" RESET "\n\n\tWritten by S. Babigeon\n\n"
    BOLD "COPYRIGHT" RESET "\n\n\tThis is freeware: you can redistribute it."
    " There is NO WARRANTY.\n"
    " \tTHIS SOFTWARE IS PROVIDED \"AS IS\" AND WITHOUT ANY EXPRESS OR IMPLIED\n"
    " \tWARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF\n"
    " \tMERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.\n\n");
}


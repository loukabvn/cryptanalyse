//  Implantation polymorphe pour la spécification ABINR du TDA ABinR(T)

#include <stdlib.h>
#include <stdio.h>
#include "bst.h"

//--- Types bst et cbst --------------------------------------------------------

typedef struct cbst cbst;

struct cbst {
  cbst *next[2];
  const void *value;
  int height;
};

struct bst {
  int (*compar)(const void *, const void *);
  cbst *root;
};

//--- Raccourcis ---------------------------------------------------------------

#define EMPTY()     NULL
#define IS_EMPTY(p) ((p) == NULL)
#define LEFT(p)     ((p)->next[0])
#define RIGHT(p)    ((p)->next[1])
#define VALUE(p)    ((p)->value)
#define NEXT(p, c)  ((p)->next[(c) > 0])
#define HEIGHT(p)   ((p)->height)

//--- Fonctions cbst -----------------------------------------------------------

static void cbst__dispose(cbst *p) {
  if (!IS_EMPTY(p)) {
    cbst__dispose(LEFT(p));
    cbst__dispose(RIGHT(p));
    free(p);
  }
}

static size_t cbst__size(const cbst *p) {
  return IS_EMPTY(p) ? 0 : 1 + cbst__size(LEFT(p)) + cbst__size(RIGHT(p));
}

static int cbst__height(const cbst *p) {
  return IS_EMPTY(p) ? 0 : HEIGHT(p);
}

static void cbst__update_height(cbst *p) {
  HEIGHT(p) = 1 + (cbst__height(LEFT(p))
      > cbst__height(RIGHT(p)) ? cbst__height(LEFT(p)) : cbst__height(RIGHT(p)));
}

static int cbst__balance(const cbst *p){
  return IS_EMPTY(p) ? 0 : cbst__height(LEFT(p)) - cbst__height(RIGHT(p));
}

static void cbst__rotation_left(cbst **pp){
  cbst *p = *pp;
  *pp = RIGHT(p);
  RIGHT(p) = LEFT(*pp);
  LEFT(*pp) = p;
  cbst__update_height(p);
  cbst__update_height(*pp);
}

static void cbst__rotation_right(cbst **pp){
  cbst *p = *pp;
  *pp = LEFT(p);
  LEFT(p) = RIGHT(*pp);
  RIGHT(*pp) = p;
  cbst__update_height(p);
  cbst__update_height(*pp);
}

static void cbst__rotation_left_right(cbst **pp){
  cbst__rotation_left(pp);
  cbst__rotation_right(pp);
}

static void cbst__rotation_right_left(cbst **pp){
  cbst__rotation_right(pp);
  cbst__rotation_left(pp);
}

static void cbst__balancing(cbst **pp){
  if (*pp == NULL){
    return;
  }
  cbst__update_height(*pp);
  if (cbst__balance(*pp) == -2){
    if (cbst__balance(LEFT(*pp)) == 1){
      cbst__rotation_right_left(pp);
    } else {
      cbst__rotation_left(pp);
    }
  } else {
    if (cbst__balance(*pp) == 2){
      if (cbst__balance(RIGHT(*pp)) == -1){
        cbst__rotation_left_right(pp);
      } else {
        cbst__rotation_right(pp);
      }
    }
  }
}

static void cbst__repr_graphic(const cbst *root, size_t level,
    void (*put)(const void *xptr)) {
  if (IS_EMPTY(root)) {
    for (size_t i = 0; i < level; ++i) {
      putchar('\t');
    }
    putchar('|');
    putchar('\n');
    return;
  }
  cbst__repr_graphic(RIGHT(root), level + 1, put);
  for (size_t i = 0; i < level; ++i) {
    putchar('\t');
  }
  printf("(");
  put(root->value);
  printf(") h = %d, b = %d\n", cbst__height(root), cbst__balance(root));
  cbst__repr_graphic(LEFT(root), level + 1, put);
}

static void cbst__infixe_traversal(const cbst *t,
    int (*fun)(void *, const void *), void *context) {
  if (t == NULL){
    return;
  }
  cbst__infixe_traversal(LEFT(t), fun, context);
  fun(context, VALUE(t));
  cbst__infixe_traversal(RIGHT(t), fun, context);
}

static void *cbst__search_aux(const cbst *t, const void *xptr,
    int (*compar)(const void *, const void *)) {
  if (IS_EMPTY(t)) {
    return NULL;
  }
  if (compar(VALUE(t), xptr) == 0) {
    return ((void *) t);
  }
  return cbst__search_aux(NEXT(t, compar(xptr, VALUE(t))), xptr, compar);
}

static void *cbst__search(const cbst *t, const void *xptr,
    int (*compar)(const void *, const void *)) {
  cbst *p = (cbst *)cbst__search_aux(t,xptr,compar);
  if (p == NULL){
    return NULL;
  }
  return ((void *) VALUE(p));
}

static void *cbst__add__endofpath(cbst **pp, const void *xptr,
    int (*compar)(const void *, const void *)) {
  if (IS_EMPTY(*pp)) {
    cbst *t = malloc(sizeof *t);
    if (t == NULL) {
      return NULL;
    }
    LEFT(t) = EMPTY();
    RIGHT(t) = EMPTY();
    VALUE(t) = xptr;
    HEIGHT(t) = 1;
    *pp = t;
    return (void *) xptr;
  }
  if (compar(VALUE(*pp), xptr) == 0) {
    return (void *) (VALUE(*pp));
  }
  void *yptr = cbst__add__endofpath(&(NEXT(*pp, compar(xptr,
          VALUE(*pp)))), xptr, compar);
  cbst__balancing(pp);
  return yptr;
}

static const void *cbst__remove_max(cbst **pp) {
  if (IS_EMPTY(*pp)) {
    return NULL;
  }
  if (!IS_EMPTY(RIGHT(*pp))) {
    return cbst__remove_max(&RIGHT(*pp));
  }
  const void *value = VALUE(*pp);
  cbst *q = *pp;
  *pp = LEFT(*pp);
  free(q);
  return value;
}

static void cbst__remove_root(cbst **pp) {
  if (IS_EMPTY(*pp)) {
    return;
  }
  if (IS_EMPTY(LEFT(*pp))) {
    cbst *q = *pp;
    *pp = RIGHT(*pp);
    free(q);
    return;
  }
  VALUE(*pp) = cbst__remove_max(&LEFT(*pp));
}

static const void *cbst__remove_climbup_left(cbst **pp, const void *xptr,
    int (*compar)(const void *, const void *)) {
  if (IS_EMPTY(*pp)) {
    return NULL;
  }
  if (compar(VALUE(*pp), xptr) == 0) {
    cbst__remove_root(pp);
    return xptr;
  }
  const void *yptr = cbst__remove_climbup_left(&NEXT((*pp), compar(xptr,
          VALUE(*pp))), xptr, compar);
  cbst__balancing(pp);
  return yptr;
}

//--- Fonctions bst ------------------------------------------------------------

bst *bst_empty(int (*compar)(const void *, const void *)) {
  bst *t = malloc(sizeof *t);
  if (t == NULL) {
    return NULL;
  }
  t->compar = compar;
  t->root = EMPTY();
  return t;
}

void bst_dispose(bst **tptr) {
  if (*tptr == NULL) {
    return;
  }
  cbst__dispose((*tptr)->root);
  free(*tptr);
  *tptr = NULL;
}

size_t bst_size(const bst *t) {
  return cbst__size(t->root);
}

void bst_repr_graphic(const bst *t, void (*put)(const void *xptr)) {
  cbst__repr_graphic(t->root, 0, put);
}

const void *bst_search(const bst *t, const void *xptr) {
  if (xptr == NULL) {
    return NULL;
  }
  return cbst__search(t->root, xptr, t->compar);
}

const void *bst_add_endofpath(bst *t, const void *xptr) {
  if (xptr == NULL) {
    return NULL;
  }
  return cbst__add__endofpath(&t->root, xptr, t->compar);
}

const void *bst_remove_climbup_left(bst *t, const void *xptr) {
  if (xptr == NULL) {
    return NULL;
  }
  return cbst__remove_climbup_left(&(t->root), xptr, t->compar);
}

void bst_infixe_apply_context(const bst *t, void *context,
  int (*fun)(void *context, const void *xptr)){
    cbst__infixe_traversal(t->root, fun, context);
}

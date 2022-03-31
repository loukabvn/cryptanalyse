BST_DIR = bst/
CC = gcc
CFLAGS = -std=c18 -D_XOPEN__SOURCE=500 -D_FORTIFY_SOURCE=2 -Wall -Wconversion -Werror -Wextra -Wpedantic -Wwrite-strings -fpie -pie -fstack-protector-all -O -g
LDFLAGS = -Wl,-z,relro,-z,now -pie
VPATH = 
objects = $(BST_DIR)bst.o occur.o
executable = occur

run: $(executable)

clean:
	$(RM) $(objects) $(executable)

$(executable): $(objects) $(objects)
	$(CC) $(objects) $(LDFLAGS) -o $(executable)

occur.o: occur.c
bst.o: bst.c bst.h

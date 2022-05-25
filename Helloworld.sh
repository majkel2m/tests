#!/bin/bash

#--------First message---------
#echo "Hello world / Witaj świecie"

FILE=somefile.txt
$ NAME=${FILE%.*}
$ EXT=${FILE#*.}
$ DATE=`date +%d-%m-%y`
$ NEWFILE=${NAME}_${DATE}.${EXT}
$ echo $NEWFILE
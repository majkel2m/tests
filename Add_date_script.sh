#!/bin/bash

set -e

rm -rf out   #usunięcie folderu jeśli istnieje
mkdir out    #utworzenie folderu out

for BEGIN in $(ls ./BASH)
do
  EXTENSION="${BEGIN##*.}"
  FILENAME="${BEGIN%.*}"
  TODAY=`date +%d-%m-%y`
  cp BASH/$BEGIN out/$FILENAME-$TODAY.$EXTENSION
done







#echo "$FILENAME-$TODAY.$EXTENSION"


#var=$(date +"%FORMAT_STRING")
#now=$(date +"%m_%d_%Y")
#printf "%s\n" $now
#today=$(date +"%Y-%m-%d")
#printf "Today we are going to backup file to NFS server at AWS '%s'\n" "/efs/my-blog-${today}.sql.tar.gz"


#!/bin/bash

if [ -z $CIRCLECI ]; then
  echo "This script should run on CircleCI only. Bailing..."
  exit 1
fi

export NODE_ENV=production
S3_BUCKET=rb-pres-hoc
S3_BUCKET_FOLDER=$1

if [ -z $S3_BUCKET_FOLDER ]; then
  echo "***** S3_BUCKET_FOLDER is required. Bailing..."
  exit 1
fi

echo "***** About to build with environment $NODE_ENV"
ls
ls ./node_modules
ls ./node_modules/.bin
npm run build

if [ $? -ne 0 ]; then
  echo "***** Failed building for environment $NODE_ENV to $S3_BUCKET_FOLDER"
  exit 1
fi

echo "***** Succeeding building"
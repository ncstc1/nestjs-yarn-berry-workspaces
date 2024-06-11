#!/bin/bash

cd common/nest/mongo
yarn
yarn build
cd ../../../app
yarn
yarn build

#!/bin/bash

rm -rf .nx
rm -rf dist node_modules
cd common/nest/mongo
rm -rf dist node_modules
cd ../../../app
rm -rf dist node_modules

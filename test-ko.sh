#!/bin/bash

cd app
ln -sf package.json.ko package.json
cd ..
./cleanup.sh
./setup.sh
./run.sh

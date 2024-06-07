#!/bin/bash

cd app
ln -sf package.json.ok package.json
cd ..
./cleanup.sh
./setup.sh
./run.sh

#!/bin/bash

docker-compose up -d --build
docker exec -it p5_previewer_node_env_1 /bin/bash
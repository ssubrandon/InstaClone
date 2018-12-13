#!/bin/bash
#build the docker image from the docker file
docker build -t instaDocker
#install docker-compose. Located in /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

#install kompose. Located in /usr/local/bin/docker-compose
sudo curl -L https://github.com/kubernetes/kompose/releases/download/v1.17.0/kompose-linux-amd64 -o /usr/local/bin/kompose
sudo chmod +x /usr/local/bin/kompose 

#create services
kompose up --build none

#kompose convert

#kubectl create -f redis-master-service.yaml,redis-slave-service.yaml,redis-master-deployment.yaml,redis-slave-deployment.yaml



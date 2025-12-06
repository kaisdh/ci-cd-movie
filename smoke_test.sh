#!/bin/bash

# On attend 5 secondes pour être sûr que le site est lancé
sleep 5

# On teste si l'URL http://localhost:3000 répond bien
if curl --head --silent --fail http://localhost:3000; then
  echo "SUCCESS: Le site fonctionne !"
  exit 0
else
  echo "FAILURE: Le site ne repond pas..."
  exit 1
fi
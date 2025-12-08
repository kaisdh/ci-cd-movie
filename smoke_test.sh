#!/bin/bash

# URL par défaut (port 3000)
URL="http://localhost:3000"

# Si on donne un argument (ex: http://localhost:3001), on l'utilise
if [ ! -z "$1" ]; then
  URL="$1"
fi

echo "Test de connexion vers : $URL"
sleep 5

# Test avec curl (silencieux)
if curl --output /dev/null --silent --head --fail "$URL"; then
  echo "STATUS: PASSED (Le site répond)"
  exit 0
else
  echo "STATUS: FAILED (Le site ne répond pas)"
  exit 1
fi

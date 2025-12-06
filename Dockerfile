# --- Etape 1 : Construction (Build) ---
# On passe à Node 20 car Vite le demande dans tes logs
FROM node:20-alpine AS build
WORKDIR /app

# Copie des dépendances
COPY package*.json ./
RUN npm install

# Copie du code et build
COPY . .
RUN npm run build
# (Vite va créer un dossier 'dist' ici)

# --- Etape 2 : Serveur Web (Run) ---
FROM nginx:alpine

# CORRECTION ICI : On copie 'dist' et pas 'build'
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Nutze ein leichtgewichtiges Node-Image
FROM node:20-slim

# Installiere curl für Healthchecks (RunPod Standard)
RUN apt-get update && apt-get install -y curl

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "handler.js"]
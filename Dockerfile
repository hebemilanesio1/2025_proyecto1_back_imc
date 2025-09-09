FROM node:18

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install --production

# Copiar el código
COPY . .

# Exponer el puerto (Render detecta este puerto)
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]

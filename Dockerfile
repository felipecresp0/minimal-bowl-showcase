# Dockerfile para aplicación React con Vite
# Etapa 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY bun.lockb ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine AS production

# Copiar archivos construidos desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
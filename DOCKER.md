# Docker Guide - Minimal Bowl Showcase

Esta guía explica cómo usar Docker con el proyecto Minimal Bowl Showcase.

## 🐳 Archivos Docker Creados

- **`Dockerfile`**: Imagen de producción con Nginx
- **`Dockerfile.dev`**: Imagen de desarrollo con hot reload
- **`.dockerignore`**: Archivos a excluir del contexto Docker
- **`docker-compose.yml`**: Orquestación de servicios
- **`nginx.conf`**: Configuración personalizada de Nginx
- **`Makefile`**: Comandos simplificados para Docker

## 🚀 Uso Rápido

### Opción 1: Docker Compose (Recomendado)

```bash
# Para desarrollo
docker-compose up minimal-bowl-dev

# Para producción
docker-compose up minimal-bowl-prod

# Detener servicios
docker-compose down
```

### Opción 2: Docker directo

```bash
# Construcción y ejecución en producción
docker build -t minimal-bowl-showcase .
docker run -d -p 80:80 --name bowl-container minimal-bowl-showcase

# Para desarrollo
docker build -f Dockerfile.dev -t minimal-bowl-dev .
docker run -d -p 5173:5173 -v ${PWD}:/app -v /app/node_modules --name bowl-dev minimal-bowl-dev
```

### Opción 3: Usar Makefile (Windows con Make instalado)

```bash
# Ver comandos disponibles
make help

# Desarrollo
make build-dev
make run-dev

# Producción
make build
make run

# Limpiar todo
make clean
```

## 🔧 Comandos PowerShell para Windows

Si no tienes Make instalado, usa estos comandos de PowerShell:

```powershell
# Construir imagen de producción
docker build -t minimal-bowl-showcase .

# Ejecutar en producción
docker run -d -p 80:80 --name bowl-container minimal-bowl-showcase

# Construir imagen de desarrollo
docker build -f Dockerfile.dev -t minimal-bowl-dev .

# Ejecutar en desarrollo
docker run -d -p 5173:5173 -v ${PWD}:/app -v /app/node_modules --name bowl-dev minimal-bowl-dev

# Ver logs
docker logs -f bowl-container

# Detener y limpiar
docker stop bowl-container bowl-dev
docker rm bowl-container bowl-dev
docker rmi minimal-bowl-showcase minimal-bowl-dev
```

## 🌐 Acceso a la Aplicación

- **Desarrollo**: http://localhost:5173
- **Producción**: http://localhost:80

## 📁 Estructura de Imágenes

### Imagen de Producción (Multi-stage)
1. **Stage 1**: Construye la aplicación con Node.js
2. **Stage 2**: Sirve con Nginx (imagen final más pequeña)

### Imagen de Desarrollo
- Node.js con hot reload
- Volúmenes montados para desarrollo en tiempo real
- Puerto 5173 expuesto

## ⚡ Optimizaciones Incluidas

- **Multi-stage build** para imagen de producción pequeña
- **Nginx optimizado** con gzip y cache headers
- **Hot reload** para desarrollo
- **Configuración SPA** para React Router
- **Security headers** en Nginx
- **Manejo adecuado de archivos estáticos**

## 🔍 Troubleshooting

### Si el contenedor no inicia:
```bash
docker logs bowl-container
```

### Si hay problemas de permisos:
```bash
docker run --user $(id -u):$(id -g) ...
```

### Para acceder al shell del contenedor:
```bash
docker exec -it bowl-container /bin/sh
```

## 🛠️ Personalización

- Modifica `nginx.conf` para ajustes de servidor
- Edita `docker-compose.yml` para variables de entorno
- Ajusta puertos en los Dockerfiles según necesidades
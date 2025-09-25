# Makefile para facilitar el trabajo con Docker

# Variables
IMAGE_NAME = minimal-bowl-showcase
DEV_IMAGE_NAME = minimal-bowl-showcase-dev
CONTAINER_NAME = minimal-bowl-container
DEV_CONTAINER_NAME = minimal-bowl-dev-container

.PHONY: help build build-dev run run-dev stop clean logs shell

# Ayuda - Mostrar comandos disponibles
help:
	@echo "Comandos disponibles:"
	@echo "  build       - Construir imagen de producción"
	@echo "  build-dev   - Construir imagen de desarrollo"
	@echo "  run         - Ejecutar contenedor de producción"
	@echo "  run-dev     - Ejecutar contenedor de desarrollo"
	@echo "  stop        - Detener contenedores"
	@echo "  clean       - Limpiar contenedores e imágenes"
	@echo "  logs        - Ver logs del contenedor"
	@echo "  shell       - Acceder al shell del contenedor"

# Construir imagen de producción
build:
	docker build -t $(IMAGE_NAME) .

# Construir imagen de desarrollo
build-dev:
	docker build -f Dockerfile.dev -t $(DEV_IMAGE_NAME) .

# Ejecutar contenedor de producción
run:
	docker run -d --name $(CONTAINER_NAME) -p 80:80 $(IMAGE_NAME)

# Ejecutar contenedor de desarrollo
run-dev:
	docker run -d --name $(DEV_CONTAINER_NAME) -p 5173:5173 -v $(PWD):/app -v /app/node_modules $(DEV_IMAGE_NAME)

# Detener contenedores
stop:
	-docker stop $(CONTAINER_NAME) $(DEV_CONTAINER_NAME)
	-docker rm $(CONTAINER_NAME) $(DEV_CONTAINER_NAME)

# Limpiar contenedores e imágenes
clean: stop
	-docker rmi $(IMAGE_NAME) $(DEV_IMAGE_NAME)
	docker system prune -f

# Ver logs
logs:
	docker logs -f $(CONTAINER_NAME)

# Ver logs de desarrollo
logs-dev:
	docker logs -f $(DEV_CONTAINER_NAME)

# Acceder al shell
shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

# Acceder al shell de desarrollo
shell-dev:
	docker exec -it $(DEV_CONTAINER_NAME) /bin/sh

# Usar docker-compose para desarrollo
compose-dev:
	docker-compose up minimal-bowl-dev

# Usar docker-compose para producción
compose-prod:
	docker-compose up minimal-bowl-prod

# Detener docker-compose
compose-down:
	docker-compose down
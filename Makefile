.PHONY: up down shell

default: up

up:
	docker-compose pull
	docker-compose up -d --remove-orphans

down:
	docker-compose down

shell:
	docker-compose exec node sh

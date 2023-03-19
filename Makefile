
start_dev:
	docker compose up -d --build &&\
	cd front &&\
	npm i && npm run dev -- --port 1212

start_prod:
	docker compose up -d --build &&\
	cd front && npm i && npm run build

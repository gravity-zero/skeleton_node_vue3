<h2>Pour démarrer le projet en local:</h2>

<h3>Avec makefile</h3>

```bash
//DEV
make start_dev

//PROD
make start_prod
```

<h3>Sans makefile</h3>

```bash
//DEV
docker compose up -d --build &&\
cd front &&\
npm i && npm run dev -- --port 1212

//Prod
docker compose up -d --build &&\
cd front && npm i && npm run build
```

<h3>Les liens:</h3>
<ul>
  <li><a href="http://localhost:1212">front</a></li>
  <li><a href="http://localhost:3332">back</a></li>
  <li><a href="http://localhost:2111">phpmyadmin</a></li>
</ul>

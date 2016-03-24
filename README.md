# docker-nodejs-postgres

## About the Repo
This project is just not Dockerfile and composefile, we have included a NodeJS payload for Docker. Along with Docker stuff we have included a very small nodejs project and PostgreSQL db data. I guess this will help newcommers to both Docker, NodeJS and Postgres to understand better. They can simply "git clone" and "docker-compose up". This nodejs application gives a web page where you can input data and it will be stored to the onboard postgres db and at the same time retrieved and displayed in the browser.

The current project works on a single docker container, our next step will be to put both NodeJS and Postgres server on different containers, similarly bring the dockercompose for a quick startup.

## Docker Image
Currently we have used a custom image which conatins the binaries and configuration files of both NodeJS and PostgreSQL server packed into one. Very soon, we'll use a base Ubuntu or CentOS image.

# docker-nodejs-postgres

This project is just not Dockerfile and composefile, we have included a NodeJS payload for Docker. Along with Docker stuff we have included a very small nodejs project and PostgreSQL db data. I guess this will help newcommers to both Docker, NodeJS and Postgres to understand better. They can simply "git clone URL" and "docker-compose up".

## About the Repo
This repo has a directory for nodejs project, if you want to run your own app, just replace the contents of "nodejs" directory. Similarly if you want to change the postgres db data you can put it in "postgresql" directory. If you want to simply test this repo just build the docker image:

```
cd docker-nodejs-postgres
docker image -t docker-nodejs-postgres -f docker/Dockerfile
```
Now for running the container along the project, we'll use "docker volumes" to upload the project and db.

```
docker run --name mydock -v /PROJECT-PATH/postgresql/:/var/lib/postgresql/ -v /PROJECT-PATH/nodejs/:/opt/nodeproject/ -p 5050:5050 -it -d docker-nodejs-postgres 
```


This nodejs application gives a web page where you can input data and it will be stored to the onboard postgres db and at the same time retrieved and displayed in the browser.
The current project works on a single docker container, our next step will be to put both NodeJS and Postgres server on different containers, similarly bring the dockercompose for a quick startup.

## Docker Image
Currently we have used a custom image which conatins the binaries and configuration files of both NodeJS and PostgreSQL server packed into one. We'll be switching to a trusted base image soon.

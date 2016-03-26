# docker-nodejs-postgres

This project is just not Dockerfile and composefile, we have included a NodeJS payload for Docker. Along with Docker stuff we have included a very small nodejs project and PostgreSQL db data script. I guess this will help newcommers to both Docker, NodeJS and Postgres to understand better. They can simply "git clone URL" and docker build and run.

## About the Repo
This repo has a directory for nodejs project, if you want to run your own app, just replace the contents of "nodejs" directory. Similarly for postgres data you can launch the container with a volume on "/var/lib/postgresql", this will overwrite the test DB created inside the container and build time. If you want to simply test this repo just build the docker image:

```
cd docker-nodejs-postgres/docker/
docker image -t docker-nodejs-postgres .
```
Now for running the container along with the existing project, we'll use "docker volumes" to upload the project. If you want to have your own project then replace the volume source with your project location. Similarly if you want to have your own DB you can run another volume with another  "-v"  in the command or even a "data-only container".

```
docker run --name mydock -v -v /THIS-PROJECT-PATH/nodejs/:/opt/nodeproject/ -p 5050:5050 -it -d docker-nodejs-postgres 
```


This nodejs application gives a web page where you can input data and it will be stored to the onboard postgres db and at the same time retrieved and displayed in the browser.
The current project works on a single docker container, our next step will be to put both NodeJS and Postgres server on different containers, similarly bring the dockercompose for a quick startup.

## Docker Image
Currently we have used a custom image which conatins the binaries and configuration files of both NodeJS and PostgreSQL server packed into one. We'll be switching to a trusted base image soon.

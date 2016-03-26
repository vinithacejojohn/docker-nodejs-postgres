FROM node_postgre

#FROM ubuntu:14.04

#RUN apt-get update && apt-get install node postgresql

USER root

RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.3/main/pg_hba.conf

RUN echo "listen_addresses='*'" >> /etc/postgresql/9.3/main/postgresql.conf

EXPOSE 5432

WORKDIR /opt/nodeproject

USER postgres


RUN service postgresql start &&  psql -c "create database pgdb;" && psql -c "create role pgrole with login password 'pgrole'; grant all privileges on database pgdb to pgrole;"


CMD service postgresql start  && node server.js

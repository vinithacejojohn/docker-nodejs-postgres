FROM ubuntu:14.04

RUN apt-get update && apt-get -y install curl

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -

RUN apt-get update && apt-get install -y nodejs

RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8

RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" > /etc/apt/sources.list.d/pgdg.list

RUN apt-get update && apt-get install -y python-software-properties software-properties-common postgresql-9.3 postgresql-client-9.3 postgresql-contrib-9.3

USER postgres


RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.3/main/pg_hba.conf

RUN echo "listen_addresses='*'" >> /etc/postgresql/9.3/main/postgresql.conf

EXPOSE 5432
EXPOSE 5050
WORKDIR /opt/nodeproject/
RUN service postgresql start && psql -c "create database pgdb;" && psql -c "create role pgrole with login password 'pgrole'; grant all privileges on database pgdb to pgrole;"
CMD service postgresql start && node server.js
#CMD service postgresql start && /bin/bash

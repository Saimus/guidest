# Postgres with docker

As we want to follow using docker, here you will find how to configure the Postgres database with docker for our local development environment. Make sure that you have the docker installed and running in your machine.

First we need to run the following command to get the postgres image .

    docker pull postgres

After finishing the image download, we will run the command:


    docker run --name postgres -e POSTGRES_PASSWORD=12345678a -d -p 5432:5432 postgres

It will create and start the postgres docker container, using the default user **postgres** and the password **12345678a** to connect to the database.
Now we will create the database to our application. 

Run the following command to open the container bash terminal.

    docker exec -it postgres /bin/bash

Now inside the container, lets run the command:

    psql -h localhost -U postgres -W

After running the previous command the database password will be asked. Type the password in the terminal.

You will receive a feedback in the terminal. Now you are connected to the postgres. Now we just need to create the database. Just run the following command:

     create database guidest;



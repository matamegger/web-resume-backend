# web-resume-backend

## Dependencies

- [docker](https://www.docker.com)
- [NodeJs](https://nodejs.org)
- [express](https://expressjs.com)

Please refer to docker's [documentation](https://docs.docker.com) for further reading.

## Setup

Download and install docker, and (on Windows) share the hard-disk on which you are going to work.
Clone the web-resume-backend repository with its git submodules into your working directory.

Make sure docker is running and change into the `docker/` directory where the `docker-compose.yml` is located.
Then execute following command:

```bash
docker-compose build
```

This command is downloading and building all the necessary things for your development environment.

Other useful commands are:

```bash
docker-compose up -d # Start the docker-setup in detached mode (background)
docker-compose down # Stop the docker-setup
docker-compose restart >service-name< # Restart a service (e.g. web, db). Usefull for applying changes to the server component.
```

## Accessing services

The docker setup includes Nodejs and a MySQL database:

- NodeJs is listening on port 8000 in the docker network and is exposed via port 8082 on the host system [localhost:8082](localhost:8082).
- MySQL is listening on port 3306 in the docker network and is exposed via port 3306 on the host system [localhost:3306](localhost:3306).

To access the docker containers via the terminal, execute following commands:

```bash
docker-compose ps
#      Name                   Command             State           Ports
# ------------------------------------------------------------------------------
# webres-database   docker-entrypoint.sh mysqld   Up      0.0.0.0:3306->3306/tcp
# webres-node       /entrypoint.sh                Up      0.0.0.0:8082->8000/tcp

docker exec -it webres-database bash # Or any other available service-name
```

For further information, please refer to the `docker-compose.yml` file as well as the `Dockerfile` of the respective service.

## Database

To change the database model, or it's preloaded data, simply make a database dump of any database and save it as `docker/services/database/model/dump.sql`.
This file is loaded on each start of the docker setup.
Please keep in mind that any changes in the database are not persistent. That means that any time you restart the docker setup, the database is created anew.

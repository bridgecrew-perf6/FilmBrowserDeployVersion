
# FROM mysql

# ENV MYSQL_DATABASE company

# COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
FROM mysql:latest
COPY ./mysql-init.sql /docker-entrypoint-initdb.d
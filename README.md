以下を`docker-compose.yml`に記述する

```
version: '3'
services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: root
    ports:
      - '3306:3306'
    volumes:
      - mysql-data:/var/lib/mysql
  api:
    build: ./api
    command: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b '0.0.0.0'"
    volumes:
      - ./api:/myapp
    ports:
      - "3000:3000"
    depends_on:
      - db
    stdin_open: true
    tty: true
    command: bundle exec rails server -b 0.0.0.0
  front:
    build: ./front
    command: sh -c "yarn start"
    ports:
      - '8000:3000'
    volumes:
    - ./front:/usr/src/app/front
    depends_on:
      - api
    stdin_open: true
volumes:
  mysql-data:
    driver: local
```

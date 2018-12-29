### 安装依赖库

```
npm install
```

### docker安装mongo

```
docker pull mongo
docker run -d -p 27017:27017 -v mongo_configdb:/data/configdb -v mongo_db:/data/db --name mongo docker.io/mongo --auth
docker exec -it mongo mongo admin
```

### docker安装redis

```
docker pull redis
docker run -p 6379:6379 -v data:/data  -d redis redis-server --name redis --appendonly yes
```

### 运行express

```
nodemon
```
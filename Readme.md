## Dockerizing a node.js app

**Initialize**

```
 npm i
```

**Terminal commands:**

```
 sudo docker build -t <username>/<app-name> .
```

**See if the image is created**
sudo docker images
**Run the docker app**

```
sudo docker run -p 8000:3300 -d <username>/<app-name>
```

**See running containers**

```
sudo docker ps
```

**The app is now running on,**
[localhost:8000/](http://localhost:8000/)

---
id: version-3.1.4-guides-deployment-of-docker
title: Deploy with Docker
sidebar_label: Deploy with Docker
original_id: guides-deployment-of-docker
---

After initializing your project using our cli command

```shell
$ canner init
```

> ⚠︎ **Notice**
>
> If you haven't go through our quick start guide before, it's recommended to follow the steps in [Building CMS in 3 commands](./start-quick-3commands).

You would see a `Dockerfile` in your project.

## Dockerfile
```Dockerfile
# ./Dockerfile
FROM canner/builder:latest AS build
WORKDIR /usr/src/app
COPY . .
RUN canner build -s canner.schema.js -c canner.server.js

# Run
FROM canner/server:latest
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000
ENTRYPOINT ["canner-server"]
CMD [ "-c", "canner.server.js" ]
```

## Build docker image
Under your project folder, run the following command:
```shell
$ docker build -t canner-cms .
```
![docker-build](/docs/assets/docker-build.png)

> ⚠︎ **Note**
>
> The compiling part of the `canner build` command will take a while.

## Run the docker image
```shell
$ docker run -p 3000:3000 -it --init canner-cms
```
![docker-start](/docs/assets/docker-start.png)

## Access the CMS
Go to `http://localhost:3000`, you'll see following login form.
![login-form](/docs/assets/login-form.png)

## Deploy with docker image

Now, you have the docker image with CannerCMS built in it. You can deploy this image to AWS, GCP or your own infrastructure.

Just keep in mind that you'll have to change the `common.hostname` in `canner.server.js` to the public hostname of the service you deploy to.

For example, you built a CMS for your company and exposed the service with domain name `https://cms.acme.corp`. The hostname should be:

```js
exports.common = {
  hostname: 'https://cms.acme.corp',
}
```

> **Learn more about `hostname`**
>
> Please go to [`canner.server.js` section](./file-canner-server-js#commonhostname-string) to learn more about it.

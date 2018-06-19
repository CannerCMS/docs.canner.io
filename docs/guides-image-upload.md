---
id: guides-image-upload
title: Image upload settings
sidebar_label: Image upload settings
---

## Imgur

### Setup `IMGUR_CLIENT_ID` in webpack

 Canner CMS uses Imgur as the default image storage, so you have to provide an available `IMGUR_CLIENT_ID` to make it work. Alternatively, you can setup image storage to Firebase storage.

> Furthur Information
> - [Get Imgur's clinet ID](https://api.imgur.com/#registerapp)

```js
plugins: [
  new webpack.DefinePlugin({
    IMGUR_CLIENT_ID: JSON.stringify(process.env.IMGUR_CLIENT_ID)
  })
]
```

## Firebase

Enable Firebase storage to store your images, you can new a `FirebaseClientService` instance and pass to prop `imageServiceConfigs` into `<CMS>` component.

> You don't have to install `@canner/image-service-config` maually because it's a dependency of canner
> Learn more about [FirebaseClientService](https://github.com/Canner/image-service-config#firebaseclientservice-firebase-js-sdk)

```js
import {FirebaseClientService} from '@canenr/imager-service-config';
import firebase from 'firebase';

// ... 

const imageService = new FirebaseClientService({
  firebase: firebase,
  dir: "the/path/to", // specify the path you want upload to 
  filename: "filename", // rename file without extension
  hash: false, // if true, the filename will add a hash string, e.g.: `filename-${hash}.jpg`
});

const serviceConfig = imageService.getServiceConfig();


// ... render
<CMS
  imageServiceConfigs={{
    posts: serviceConfig
  }}
>

```
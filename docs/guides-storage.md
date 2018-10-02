---
id: guides-storage
title: Storage
sidebar_label: Storage
---

Setup image uploader in your CMS, pass a `storage` prop in to **first level tags in `<root/>`**. `storage` must be a object generated from https://github.com/Canner/image-service-config

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      storage={storage} // -------> your storage settings
      connector={connector}
      resolver={resolver}>
      <string title="Your name" keyName="name"/>
    </object>
    <array
      keyName="list"
      title="Products"
      storage={storage} // -------> your storage settings
      connector={connector2}
      resolver={resolver}>
      <string title="Product name" keyName="name"/>
    </array>
  </root>
)
```

## Imgur

Upload image to [Imgur](https://imgur.com/).

> Learn more [ImgurService](https://github.com/Canner/image-service-config#imgurservice-imgur)

```js
import {ImgurService} from '@canner/image-service-config';

const imageService = new ImgurService({
  clientId, // https://apidocs.imgur.com/
  mashapeKey // https://market.mashape.com/imgur/imgur-9#image-upload
});

const serviceConfig = imageService.getServiceConfig();
// {
//   name: "image",
//   accept: "image/*",
//   action: "https://api.imgur.com/3/image",
//   headers: {
//     Authorization: `Client-ID <YOUR CLIENTID>`,
//     "X-Requested-With": null 
//    }
// }

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      storage={serviceConfig} // -------> your storage settings
      connector={connector}
      resolver={resolver}>
      <string title="Your name" keyName="name"/>
    </object>
  </root>
)
```

## Firebase Client

Enable Firebase storage to store your images, you can new a `FirebaseClientService` instance and pass to prop `imageServiceConfigs` into `<Canner>` component.

> You don't have to install `@canner/image-service-config` maually because it's a dependency of canner
> Learn more about [FirebaseClientService](https://github.com/Canner/image-service-config#firebaseclientservice-firebase-js-sdk)

```js
/** @jsx builder */
import builder from 'canner-script';
import {FirebaseClientService} from '@canner/image-service-config';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey,
  storageBucket
});

// remember to authenticate firebase first, or uploading will be failed,
// https://firebase.google.com/docs/auth/web/start
firebase.auth().signInAnonymously();
// or login your firebase Auth
firebase.auth().signInWithEmailAndPassword("xxx", "xxx");


const imageService = new FirebaseClientService({
  firebase: firebase,
  dir: "the/path/to", // specify the path you want upload to 
  filename: "filename", // rename file without extension
  hash: false, // if true, the filename will add a hash string, e.g.: `filename-${hash}.jpg`
});

const serviceConfig = imageService.getServiceConfig();

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      storage={serviceConfig} // -------> your storage settings
      connector={connector}
      resolver={resolver}>
      <string title="Your name" keyName="name"/>
    </object>
  </root>
)

```
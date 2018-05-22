---
id: cli-upload-image
title: Upload image via CLI
sidebar_label: Upload image
---

## Firebase

No matter you are using Firebase Realtime Database or Firestore, if you want to upload your images to Firebase storage use `imageService.image("[Path to your image]")`

For example, if your `canner.data.js` looks like this, we will upload your image to Firebase storage first, and replace the URL to the key's value.

```js
"photos": [
  {
    "image": imageService.image("/public/statics/images/fulls/01.jpg"),
    "thumb": imageService.image("/public/statics/images/thumbs/01.jpg"),
    "imgTitle": "Diam tempus accumsan",
    "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]
```
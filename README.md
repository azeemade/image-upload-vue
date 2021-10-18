# Vue Image Upload for Vue 3.x

A simple and customisable image upload component for Vue 3.x

### Screenshots

![App Screenshot](https://github.com/azeemade/vue-image-upload/blob/main/src/assets/single%20create.png?raw=true)
![App Screenshot](https://github.com/azeemade/vue-image-upload/blob/main/src/assets/multi%20edit.png?raw=true)

## Features

- Attach and upload more than one image
- Update image and attachments
- Customize image height and width
- Customize image upload title
- Customize image border radius using [Bootstrap](https://getbootstrap.com) classes

### Demo

https://vue-image-upload.netlify.app/

## Installation

Install via NPM

```bash
  npm i image-upload-vue
```

## Getting Started

Single Upload

```bash
    <image-upload action="create"
        :image_style="{
            border: 'rounded-circle',
            height: '100',
            width: '100'
        }"
    />
```

---

Multi Upload

```bash
    <image-upload :upload_type="'multi'" action="edit" :urls="images"
        :image_style="{
            height: '100',
            width: '100'
        }"
    />
```

The `urls` consists of an array of `images` which can be data.

```bash
    data(){
        return{
            images: [
                require("@/assets/images/foobar.png"),
                "https://github.com/xxxxxx/xxxxx/xxxx/xxxxx/xxxxx/xxxx/foobar.png?raw=true"
            ]
        }
    },
```

## Docs

The following props can be passed to the component:

| Prop        | Description                                                                      | Type   | Default                   |
| ----------- | -------------------------------------------------------------------------------- | ------ | ------------------------- |
| action      | This lets the `vue-image-upload` know the action to be performed: create or edit | String | create                    |
| title       | This is the text of the file input button                                        | String | Choose image              |
| image_style | These are image style properties: border-radius, height, width                   | Object | height = 160, width = 160 |
| url         | The url / file location of the image to be loaded **for single upload**          | String |                           |
| urls        | The url / file location of the image to be loaded **for multi upload**           | Array  |                           |
| upload type | If set to `multi`, multiple image can be created and edited                      | String | single                    |

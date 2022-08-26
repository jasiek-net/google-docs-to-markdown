# GD2MD

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to export Google Drive to Markdown with keeping folders structure and downloading all images. Before running the script prepare `.env` file and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem.js ./node_modules/gatsby-source-filesystem/index.js
cp ./gsgd-google-drive.js ./node_modules/gatsby-source-google-docs/utils/google-drive.js
cp ./gsgd-google-document.js ./node_modules/gatsby-source-google-docs/utils/google-document.js
ts-node index.ts
```

#### Structure of the .env file
```
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GOOGLE_DOCS_TOKEN=
GOOGLE_DOCS_FOLDER=
MARKDOWN_PATH=
IMAGES_PATH=
```
To generate google oauth variables, you can use script from `gatsby-source-google-docs`:
```
npx gatsby-source-google-docs-token
```
## Features
- save markdown locally (`MARKDOWN_PATH`)
- save images locally (`IMAGES_PATH`)
- first image as cover
- frontmatter in Google Docs
- jekyll filename convention

### Cover image
If you put image as a first element in Google Docs, it will be moved to frontmatter.
```
cover:
  image: /path/to/image.png
  alt: 'Alt text'
  title: 'Title text'
```

### Frontmatter in Docs
Just put frontmatter in your Google Docs, this script will remove it from markdown body and put in the header!
```
tags: [Hello, World]
description: 'Some important description'
```

### Filename convention
If you use jekyll naming convention in Google Drive (`2022-08-22 Hello world!`), it will be treated in jekyll way:

Fields were date will be removed:
```
slug: /post/hello-world
title: Hello world!
breadcrumbs: 
    - { name: post, slug: /post }
    - { name: 'Hello world!', slug: /post/hello-world }
```

Fields where date will be kept:
```
name: 2022-08-22 Hello world!
path: /post/2022-08-22-hello-world
filename: `./post/2022-08-22-hello-world.md
```

# GD2MD

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to save Google Docs as Markdown files locally. It keeps Google Drive folders structure and download all images. Before running the script prepare `.env` file and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem.js ./node_modules/gatsby-source-filesystem/index.js
cp ./gatsby-source-google-docs.js node_modules/gatsby-source-google-docs/utils/google-drive.js 
ts-node index.ts
```

#### Structure of the env file
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
#### Changes in legacy (gatsby-source-google-docs)

I use jekyll convention of naming files for my Google Drive documents (date as prefix, and then title), i.e. `2022-08-22 Hello world!`. So I rewrote `gatsby-source-google-docs` logic to split filename into `date` and `title` and put them in frontmatter. If you use other convention my script will keep `date` as date of creation and add `title` the same as filename.

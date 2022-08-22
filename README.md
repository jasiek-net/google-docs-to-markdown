# google-docs-to-markdown

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to save Google Docs as Markdown files locally. It keeps Google Drive folders structure and download all images. Before running the script prepare `.env` file and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem.js ./node_modules/gatsby-source-filesystem/index.js
ts-node index.ts
```

### Structure of env file
```
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GOOGLE_DOCS_TOKEN=
GOOGLE_DOCS_FOLDER=
MARKDOWN_PATH=
IMAGES_PATH=
```
To generate GOOGLE_* variable, you can use script from `gatsby-source-google-docs`:
```
npx gatsby-source-google-docs-token
```

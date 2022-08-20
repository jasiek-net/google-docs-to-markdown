# google-docs-to-markdown

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to save Google Docs as Markdown files locally. It keeps Google Drive folders structure and download all images. Before running the script replace `folder` field in `index.ts` with your own id, add your credentials as `.env` file and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem/index.js ./node_modules/gatsby-source-filesystem/index.js
ts-node index.ts
```

For generating credentials you can use script from `gatsby-source-google-docs`, just run:
```
npx gatsby-source-google-docs-token
```

Markdown files will be saved in `./public` and all images in `./public/img`.

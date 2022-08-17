# google-docs-to-markdown

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to save Google Docs as Markdown locally. It keeps Google Drive folder structure and images. To save your own Google Drive as Markdow add your credentials in `.env`, provide your `folder id` in `index.ts` and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem/index.js ./node_modules/gatsby-source-filesystem/index.js
ts-node index.ts
```

Markdown files will be saved in `./public`, all images in `./public/img`.

For generating credentials you can use script from `gatsby-source-google-docs`, just run:
```
npx gatsby-source-google-docs-token
```
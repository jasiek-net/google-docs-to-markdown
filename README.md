# google-docs-to-markdown

To save Google Docs in Markdown format run:
```
yarn install
cp ./gatsby-source-filesystem/index.js ./node_modules/gatsby-source-filesystem/index.js
ts-node index.ts
```
Markdown files will be saved in `./public`, all images in `./public/img`.
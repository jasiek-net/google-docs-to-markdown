# GD2MD

This is a simple wrapper around [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs). It allows you to save Google Docs as Markdown files locally. It keeps Google Drive folders structure and download all images. Before running the script prepare `.env` file and run steps below. For more details checkout offical documentation of [gatsby-source-google-docs](https://github.com/cedricdelpoux/gatsby-source-google-docs).

```
yarn install
cp ./gatsby-source-filesystem.js ./node_modules/gatsby-source-filesystem/index.js
cp ./gatsby-source-google-docs.js node_modules/gatsby-source-google-docs/utils/google-drive.js
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
## Changes in legacy (gatsby-source-google-docs)

I use jekyll naming convention in Google Docs (i.e. `2022-08-22 Hello world!`), so I added few changes to frontmatter.

##### Fields without date prefix

- `slug: /post/hello-world`
- `title: Hello world!`
- `breadcrumbs[].slug: /post/hello-world` 
- `breadcrumbs[].name: Hello world!`

##### Fields where I kept date prefix

- `name: 2022-08-22 Hello world!`
- `path: /post/2022-08-22-hello-world`
- filename: `./post/2022-08-22-hello-world.md`

Without jekyll convention script will be still working!

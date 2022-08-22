import 'dotenv/config'
import { sourceNodes } from 'gatsby-source-google-docs/utils/source-nodes'
import {
  createNode,
  createContentDigest,
  reporter,
  store,
  cache,
  createNodeId,
} from './gatsby-wrapper'

(async () => {
  await sourceNodes({
      actions: { createNode },
      createContentDigest,
      reporter,
      store,
      cache,
      createNodeId,
    },
    {
      folder: process.env.GOOGLE_DOCS_FOLDER,
      debug: true,
    }
  );
})();
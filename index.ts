import 'dotenv/config'
import { sourceNodes } from 'gatsby-source-google-docs/utils/source-nodes'
import {
  createNode,
  createContentDigest,
  reporter,
  store,
  cache,
  createNodeId,
} from './gatsby'

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
      folder: '1YJWX_FRoVusp-51ztedm6HSZqpbJA3ag',
      debug: true,
    }
  );
})();
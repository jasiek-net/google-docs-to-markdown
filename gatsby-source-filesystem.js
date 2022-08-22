const axios = require('axios');
const fs = require('fs');

exports.createRemoteFileNode = async function createRemoteFileNode({
  url,
  parentNodeId,
  createNode,
  createNodeId,
  cache,
  store,
  name,
  reporter,
}) {
  const path = `/img/${name}.jpg`;
  const absolutePath = `${process.env.IMAGES_PATH}${path}`;
  // https://stackoverflow.com/a/51624229/6041704
  return axios({ url, responseType: 'stream' }).then(res =>
    new Promise((resolve, reject) => {
      res.data
        .pipe(fs.createWriteStream(absolutePath))
        .on('finish', () => resolve(
          {
            url,
            id: path,
            relativePath: path,
          }
        ))
        .on('error', e => reject(e));
    })
  )
}
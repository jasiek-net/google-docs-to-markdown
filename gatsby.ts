import fs from "fs"

export const store = {}
export const cache = {}
export function createNodeId() {}
export function createContentDigest() {}

export const reporter = {
  warn: (str) => console.warn(str),
  panic: (err, str) => console.error(err, str),
  activityTimer: (str) => {
    console.log(new Date(), str);
    return {
      start: () => console.log('start: ', new Date()),
      setStatus: (str) => console.log('setStatus: ', str),
      end: () => console.log('end: ', new Date())
    }
  },
}

export function createNode({ internal, dir, ...node }) {
  // for cover images:
  const coverImageRegex = /cover:\n    image: '(.*)'/m;
  if (coverImageRegex.test(node.markdown)) {
    const url = node.markdown.match(coverImageRegex)[1];
    node.markdown = node.markdown.replace(url, node.cover.image);
  }
  writeFileSyncRecursive(`${dir}/public${node.path}.md`, node.markdown, "utf-8")
}

// https://gist.github.com/drodsou/de2ba6291aea67ffc5bc4b52d8c32abd
function writeFileSyncRecursive(filename, content, charset) {
  // -- normalize path separator to '/' instead of path.sep, 
  // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
  let filepath = filename.replace(/\\/g,'/');  

  // -- preparation to allow absolute paths as well
  let root = '';
  if (filepath[0] === '/') { 
    root = '/'; 
    filepath = filepath.slice(1);
  } 
  else if (filepath[1] === ':') { 
    root = filepath.slice(0,3);   // c:\
    filepath = filepath.slice(3); 
  }

  // -- create folders all the way down
  const folders = filepath.split('/').slice(0, -1);  // remove last item, file
  folders.reduce(
    (acc, folder) => {
      const folderPath = acc + folder + '/';
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath
    },
    root // first 'acc', important
  ); 
  
  // -- write file
  fs.writeFileSync(root + filepath, content, charset);
}

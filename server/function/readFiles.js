const fs = require('fs');

const readFiles = async (path) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(path, 'utf-8',
      (err, content) => {
        if (err) {
          return reject(err);
        }
        return resolve(JSON.parse(content));
      },
    );
  });
}

module.exports = readFiles;
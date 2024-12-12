```javascript
const fs = require('fs');

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function processFiles() {
  try {
    const fileContent = await readFileAsync('./myFile.txt');
    console.log('File content:', fileContent);
    //Simulate a very long running task
    await new Promise(r => setTimeout(r, 10000));
    console.log('Long running task completed'); 
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

processFiles();
```
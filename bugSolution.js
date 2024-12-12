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
    //Simulate a very long running task that might throw an error
    await new Promise((r, reject) => setTimeout(() => { 
        //Simulate an error in long running task
        //reject(new Error('Simulated error in long running task'));
        r();
      }, 10000));
    console.log('Long running task completed'); 
  } catch (error) {
    console.error('Error:', error);
  }
}

processFiles();
```
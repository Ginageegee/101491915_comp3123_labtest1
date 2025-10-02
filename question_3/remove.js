
const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'Logs');

if (fs.existsSync(directory)) {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    console.log(`Deleting -- ${file}`);
    fs.unlinkSync(path.join(directory, file));
  });
  fs.rmdirSync(directory);
  console.log('Logs removed');
} else {
  console.log('there are no logs');
}


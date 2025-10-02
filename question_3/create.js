const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'Logs');

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
  console.log('Logs directory created.');
}

process.chdir(directory);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file #${i}`);
  console.log(`Created -- ${fileName}`);
}

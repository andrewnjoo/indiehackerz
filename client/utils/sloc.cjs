const slocjs = require('slocjs');
const fs = require('fs');
const path = require('path');

const currentDate = new Date().toISOString();
const lines = slocjs.countLinesInDir("../src");

const logEntry = {
  date: currentDate,
  lines: lines,
};

const logFile = path.resolve(__dirname, 'sloc-log.json');

try {
  let logArray = [];
  if (fs.existsSync(logFile)) {
    const logData = fs.readFileSync(logFile, 'utf8');
    if (logData) {
      logArray = JSON.parse(logData);
    }
  }

  logArray.push(logEntry);

  fs.writeFileSync(logFile, JSON.stringify(logArray, null, 2));
  console.log('Log entry added successfully!');
} catch (error) {
  console.error('Error:', error);
}

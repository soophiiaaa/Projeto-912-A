const fs = require('fs');

function readData(DATABASE) {
    if (!fs.existsSync(DATABASE)) {
        fs.writeFileSync(DATABASE, JSON.stringify([]));
    }
    const data = fs.readFileSync(DATABASE, 'utf8');
    return JSON.parse(data);
}

function saveData(DATABASE, data) {
    fs.writeFileSync(DATABASE, JSON.stringify(data));
}

module.exports = { readData, saveData }
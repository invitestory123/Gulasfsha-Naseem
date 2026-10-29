const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const s = html.indexOf('<div class="time-block" id="tb-days">');
console.log(html.substring(s, s + 2500));

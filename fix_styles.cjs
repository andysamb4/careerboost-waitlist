const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/style="font-variation-settings:\s*'FILL'\s*1;?"/g, "style={{ fontVariationSettings: \"'FILL' 1\" }}");
fs.writeFileSync('src/App.tsx', code);

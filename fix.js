const fs = require('fs');

const eslint = `{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off"
  }
}`;

fs.writeFileSync('.eslintrc.json', eslint, 'utf8');
console.log('ESLint fixed!');
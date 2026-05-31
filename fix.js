const fs = require('fs');
let contact = fs.readFileSync('components/Contact.tsx', 'utf8');
contact = contact.replace("What's on your mind?", "What is on your mind?");
fs.writeFileSync('components/Contact.tsx', contact, 'utf8');
console.log('Fixed!');
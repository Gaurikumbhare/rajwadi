const fs = require('fs');
const path = './src/custom.css';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  '#4e1e26': 'var(--color-maroon, #4a1c27)',
  '#cca352': 'var(--color-gold, #c2aa7a)',
  '#3b1d24': 'var(--color-maroon-dark, #2c0e15)',
  '#a48650': 'var(--color-gold-dark, #9c8052)',
  '#2a1016': 'var(--color-maroon-dark, #2c0e15)',
  '#c19b5b': 'var(--color-gold-dark, #9c8052)',
  '#dec089': 'var(--color-gold, #c2aa7a)',
  '#2f1218': 'var(--color-maroon-dark, #2c0e15)',
  '#59202a': 'var(--color-maroon, #4a1c27)',
  '#f6c026': 'var(--color-gold, #c2aa7a)',
  '#8c2a39': 'var(--color-maroon, #4a1c27)',
  'rgba(193, 155, 91, 0.3)': 'rgba(156, 128, 82, 0.3)',
  'rgba(193, 155, 91, 0.4)': 'rgba(156, 128, 82, 0.4)',
  '#e3c788': 'var(--color-gold-light, #dfceab)',
  '#b69243': 'var(--color-gold-dark, #9c8052)',
  '#d11235': 'var(--color-maroon, #4a1c27)'
};

for (const [oldVal, newVal] of Object.entries(replacements)) {
  content = content.split(oldVal).join(newVal);
}

fs.writeFileSync(path, content);
console.log('Colors replaced successfully!');

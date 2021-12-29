const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    function Potion(name) {
        this.name = name;
      
        if (this.name === 'health') {
          this.value = Math.floor(Math.random() * 10 + 30);
        } else {
          this.value = Math.floor(Math.random() * 5 + 7);
        }
      }
      
      module.exports = Potion;
  });

  test('creates a random potion object', () => {
    function Potion(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
      
        if (this.name === 'health') {
          this.value = Math.floor(Math.random() * 10 + 30);
        } else {
          this.value = Math.floor(Math.random() * 5 + 7);
        }
      }
      
      module.exports = Potion;
  });


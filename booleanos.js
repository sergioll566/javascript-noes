const isActive = true;
const hasPermisson = false;


// conversion implicita
const result = 5 > 3;
console.log(result);

const name = 'Platzi';
console.log(!name)

// conversion explicita
const value = 0;
const otherValue = 34; // solo 0 es false, todo lo demas es true.
const explicitBoolean = Boolean(otherValue);
console.log(explicitBoolean)
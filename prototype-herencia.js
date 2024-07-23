function Usuario(nombre,email){
    this.nombre = nombre;
    this.email = email+'@gmail.com';
    this.getinfo = ()=> `${this.nombre}:${this.email}`;
}
Usuario.prototype.hasAllAcces = ()=>false;


function Admin(nombre,email){
    Usuario.call(this,nombre,email)
    this.hasAllAcces = ()=>true;
}

Admin.prototype=Object.create(Usuario.prototype)
Admin.prototype.constructor = Admin

let admin = new Admin('Gio mustard','mssm011009');
let common_user = new Usuario('Sergio manuel','sergiomorquecho1001');
console.log(admin)
console.log(common_user)

console.log('----------------------')
// console.log(common_user.hasAllAcces())
console.log(admin.hasAllAcces())


console.log('----------------------')
console.log(Admin.prototype)
console.log(Usuario.prototype)

/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contrasena
2. El sistema debe ser capaz de validar si el usuario y contrasena ingresados por el usuario existen en la base de datos.
3. Si el usuario y contrasenas son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contrasena son incorrectos, el sistema debe mostrar un mensaje de error y no debe mostrar el timeline.
*/
function User(username,password){
    this.username = username;
    this.password = password;
}

const database = [
    new User("sergio manuel",'123'),
    new User("goku",'123'),
    new User("roberto",'papelito.docx'),
    new User("miguel",'gritar'),
]
const timelines=[
    [database[0],['random post 1','random post 2','random post 3','random post 4','random post 5']],
    [database[1],['random post 6','random post 7','random post 7','random post 8','random post 9']],
    [database[2],['random post 11','random post 12','random post 13','random post 14','random post 15']],
    [database[3],['random post 16','random post 17','random post 18','random post 19','random post 20']],
]
const login = (username,password)=>{
    const user_found = database.filter((user,index)=>{
        return (
            user.username === username.toLowerCase() 
        && user.password === password.toLowerCase()
    )
    })
    return (user_found.length >= 1) ? user_found[0]:undefined
}

const get_timeline = (user)=>{
    const timeline = timelines.filter((timeline)=>{
        return timeline[0] == user;
    })
    return timeline[0]
}
export {get_timeline,login}
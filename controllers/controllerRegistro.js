
export let users = []; 

const urlUsers = 'http://localhost:8000/modelUsuarios';


export const getUsers = async() => {

    try {
        const response = await fetch(urlUsers);

        if(!response.ok){
            throw new Error('Error de respuesta de servirdor');
        }   

        const data = await response.json();

        users = data;

        return users;

    } catch(err) {
        console.error(err);
    }

}




const postUsers = async(newUser) => {
    try {

      await fetch(urlUsers, {
        method: 'POST',
        body: newUser   
        }); 

    } catch(err){
        console.error(err);
    }
}

export const register = () => {
    let registerName = document.getElementById('nombre').value; 
    let registerLastName = document.getElementById('apellido').value; 
    let registerEmail = document.getElementById('email').value;
    let registerPhone = document.getElementById('phone').value; 
    let registerAdress = document.getElementById('address').value;
    let registerBirthdate = document.getElementById('fechaNacimiento').value; 
    let typeAccount = document.getElementById('tipoCuenta').value;
    let password = document.getElementById('password').value; 


    const newUser = {
        name: registerName, 
        lastName: registerLastName, 
        email: registerEmail, 
        phone: registerPhone,
        addres: registerAdress, 
        birthdate: registerBirthdate, 
        typeAccount: typeAccount,
        password: password
    }

    if (Object.values(newUser).some(value => value === '')) return;


    postUsers(JSON.stringify(newUser));


}


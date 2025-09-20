// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let maximoAmigos = 10;
let amigoSecreto = []; //vamos a trabajar con este.
















//Valida si alcanzó la cantidad maxima de amigos y Captua los valores de entradas que no contengan espacios.
function agregarAmigo() {

    if (amigoSecreto.length == maximoAmigos) {

        alert(`Alcanzastes el numero maximo de amigos, la cantidad maxima para añadir es ${maximoAmigos}`);

    } else {
        

        let amigo =(document.getElementById('amigo').value);
        for (let i= 0; i< amigo.length; i++) {


            if (amigo[i] != ' '){
                continue;
                
            
            } else {
                alert('Debes ingresar el nombre de tu amigo sin espacios');
                return;
            }


        }

        amigoSecreto.push(amigo);     
       


    }
    cleaner();
   
   

    return;

};
 


function mensaje(etiqueta, texto) {
    let test = document.querySelector(etiqueta);
    test.innerHTML = texto;
    return;
};





function cleaner() {
    let clear = document.querySelector('#amigo');
    clear.value = '';


    return;
}












// Accede a la lista de amigos y selecciona a uno al azar.
function sortearAmigo(etiqueta, texto) {

    


let amigoAleatorio = parseInt((Math.random() * amigoSecreto.length));


mensaje('h2',`El amigo seleccionado es: ${amigoSecreto[amigoAleatorio]}`)


return;

    
};




const personas = [
    new Persona ('juan', 'perez'),//al estar en la misma carpeta de Persona, se puede crear el constructor mandando a llamar la clase persona
    new Persona ('jose', 'alvareto')
];

function mostrarPersonas() { //onload
    let texto = '';
    for (let persona of personas){ //agregando los objetos de tipo persona a la variable de texto
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById('personas').innerHTML = texto; //pasando los objetos de tipo persona que almacenaron en la variable texto a 'personas' en html
}

function agregarPersona (){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '', apellido.value != ''){
        const persona = new Persona (nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona); //se agrega 'persona' al arreglo para que este almacene la informacion
        mostrarPersonas(); //se vuelve a llamar la funcion ya que en esta funcion se actualizo y luego de ejecutarse el codigo recientemente establecido se agrega a la funcion mostrarPersonas()
    } else {
        console.log('no se agrego ninguna informacion');
    }
}
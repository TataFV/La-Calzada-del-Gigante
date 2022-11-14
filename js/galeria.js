
/**
Crear elemento
const img = document.createElement("img");
console.log(img);

//introducir el elemento dentro 
const contenedor = document.getElementById("contenedor");
console.log(contenedor);
contenedor.prepend(img);

*/

const div = document.createElement("div");
div.setAttribute("id", "galeria");
console.log(div);
const container = document.querySelector("#container");
container.append(div);

boton = document.getElementById("boton");
boton.addEventListener('click', () => {
    darkTheme(div, boton);
});


function darkTheme(galeria, boton) {
    galeria.classList.toggle("darkTheme");
    if (galeria.classList.contains("darkTheme")) {
        boton.innerHTML = "Enciende la luz";
        h1.classList.add("darkTheme");
    } else {
        boton.innerHTML = "Apaga la luz";
        h1 = document.getElementsByTagName("h1")[0];
        console.log(h1);

        h1.classList.remove("darkTheme");
    }
}


/** 
 Solo crea y añade a galeria una imagen con atributos concretos. 
const foto = document.createElement("img");
console.log(foto);
foto.setAttribute("class", "estiloFoto");
foto.setAttribute('src', 'resources/img/image_1.jpg');
console.log(foto);
div.append(foto);
*/

// Función que crea una galeria de imagenes 
function createGallery() {
    // Array de objetos JSON. 
    // Lo uso para poder usar imagenes distintas y cuyos valores de las propiedades son distintas. 
    const images = [
        { src: 'resources/img/image_1.jpg', alt: '' },
        { src: 'resources/img/image_2.jpg', alt: '' },
        { src: 'resources/img/image_3.jpg', alt: '' },
        { src: 'resources/img/image_4.jpg', alt: '' },
        { src: 'resources/img/image_5.jpg', alt: '' },
        { src: 'resources/img/image_6.jpg', alt: '' },
        { src: 'resources/img/image_7.jpg', alt: '' },
        { src: 'resources/img/image_8.jpg', alt: '' },
        { src: 'resources/img/image_9.jpg', alt: '' },
        { src: 'resources/img/image_10.jpg', alt: '' },
        { src: 'resources/img/image_11.jpg', alt: '' },
        { src: 'resources/img/image_12.jpg', alt: '' },
        { src: 'resources/img/image_13.jpg', alt: '' },
        { src: 'resources/img/image_14.jpg', alt: '' },
        { src: 'resources/img/image_15.jpg', alt: '' },


    ];
    // Bucle for del Array. Crea una imagen y le añade atributos. Añade un escuchador de eventos a todas las imagenes para que reaccionen al hacer click en cada una y se hagan más grandes. 
    // Añade la foto dentro del div.

    for (let i in images) {
        const image = images[i];
        const foto = document.createElement("img");

        foto.setAttribute("class", "estiloFoto");
        foto.setAttribute('src', image.src);
        foto.setAttribute('alt', image.alt);
        foto.addEventListener('click', () => {
            clickImage(foto);
        });
        console.log(foto);
        div.append(foto);
    }
}

createGallery();

function clickImage(foto) {
    //toggle funciona como un interruptor. Tiene la clase 'zoom' que modifica la escala de la imagen. zoom in/zoom out
    foto.classList.toggle("zoom");
    document.getElementById("zoom-background").classList.toggle('zoom-on');
}


console.log(foto.classList);
if (document.querySelector('foto.Zoom') !== null) {
    console.log('Tiene una clase');
    foto.classList.remove('zoom');
}
else {
    console.log('Class does not exist');
    foto.classList.add("zoom");
}
console.log(foto);


document.querySelector("img.estiloFoto").addEventListener("click", () => {
    console.log(this);
    //this.style.transform = "scale(1.5)";
});
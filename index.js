let PIZZAS = [

    {
    
    id: 1,
    nombre:`Especial`,
    ingredientes:["Muzzarella","Jamon","Morrones"],
    precio:800,
    imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg' ,


    },

    {
    
        id: 2,
        nombre:`Napolitana`,
        ingredientes:["Muzzarella","Tomate","Ajo"],
        precio:750,
        imagen: 'https://1.bp.blogspot.com/-cVyINRrJePk/YIF73zMERXI/AAAAAAAAMpg/WxWJ75h6s1UOqWjQCREuSPaN1hzvcwC3ACLcBGAsYHQ/s538/Napolitana23456.jpg' ,
    
    
        },

        {
    
            id:3,
            nombre:`Huevon`,
            ingredientes:["Muzzarella","Huevo","Jamon"],
            precio:550,
            imagen: 'https://www.supermercedes.com.ar/lagringa/wp-content/uploads/2020/11/pizza-jamon-y-huevo-picado.jpg',
        
        
            },

            {
    
                id:4,
                nombre:`Calabresa`,
                ingredientes:["Muzzarella","Salame"],
                precio:500,
                imagen:'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg' ,
            
            
                },

                {
    
                    id:5,
                    nombre:`Tropical`,
                    ingredientes:["Muzzarella","Jamon","Anana"],
                    precio:780,
                    imagen:'https://cocina-casera.com/wp-content/uploads/2017/12/pizza-tropical.jpg' ,
                
                
                    },

                    {
    
                        id:6,
                        nombre:`Anchoas`,
                        ingredientes:["Muzzarella","Anchoas","Alcaparras"],
                        precio:850,
                        imagen: 'https://cdn7.kiwilimon.com/recetaimagen/15736/16754.jpg',
                    
                    
                        }




];




const array = localStorage.setItem('array', JSON.stringify(PIZZAS));
 
const arrayPizzas = localStorage.getItem('array');

const arrayparseado = JSON.parse(arrayPizzas);




const contenedor = document.getElementsByClassName("container");
const namepizza = document.getElementById("nombrepizza");
const price = document.getElementById("precio");
const ingredientes = document.getElementById("ingredientes");
const tarjetaimagen = document.getElementById("imagen");
const ingreso = document.querySelector("input");
const sendboton = document.querySelector("button");
const eliminarmsj = document.getElementById("mensaje");


render = (ID) =>{



    while (nombrepizza.firstChild) {
		namepizza.removeChild(nombrepizza.firstChild);
	}

	while (price.firstChild) {
		price.removeChild(price.firstChild);

	}

    while (ingredientes.firstChild) {
		ingredientes.removeChild(ingredientes.firstChild);

	}

    while (tarjetaimagen.firstChild){

        tarjetaimagen.removeChild(tarjetaimagen.firstChild);
    }



    const pizza = arrayparseado.find(p => p.id === ID);

    if(!pizza){

        alert("No existe la pizza con ese ID");
        return;
    }

    while (eliminarmsj.firstChild){

        eliminarmsj.removeChild(eliminarmsj.firstChild);
    }

    const imagen= document.createElement('img');
    imagen.setAttribute("src",pizza.imagen);
    imagen.classList.add("image");
    tarjetaimagen.appendChild(imagen);

    
    const rendername = document.createTextNode(`Pizza: ${pizza.nombre}`);
    namepizza.appendChild(rendername);

 
    const renderprice = document.createTextNode(`Precio: $ ${pizza.precio}`);
    price.appendChild(renderprice);



    const renderingredientes = document.createTextNode(`Ingredientes: ${pizza.ingredientes}`);
    ingredientes.appendChild(renderingredientes);


  






}

sendboton.addEventListener('click', () => {



    let valor = ingreso.value;

    render(Number(valor));

})



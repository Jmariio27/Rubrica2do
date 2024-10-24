const url ='https://fakestoreapi.com/products'
fetch (url)
.then((Response)=>Response.json())
.then(datos=>console.log(datos))
.catch(error=>console.error(error))
/*
const buscarDato=async()=>{
    try{
        const res=await fetch(url)
        const data= await res.json();
        data.map (item =>console.log(`${item.id}: ${item.title}`))
    } catch (error){
        console.log (error);    
    }
}

buscarDato( )*/

const imgcard = document.querySelector('#imgC')
const  nombreProducto = document.querySelector('#Nombre')
const precioProducto = document.querySelector('#precioP')
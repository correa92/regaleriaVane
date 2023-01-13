import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { datos } from "../../productos";

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState({});

    const {idProduct} =useParams();

    useEffect(()=>{

        const getProducts = () =>{
            return new Promise((resolve,reject)=>{
                const productosFiltrados = datos.find((prod)=> prod.id === parseInt(idProduct));
                
                const prodEncontrado = idProduct ? productosFiltrados : undefined;
                setTimeout(()=>{
                    resolve(prodEncontrado);
                },2000);
            });
        };

        getProducts().then((resolve)=>{
            setItem(resolve)
        })
        .catch((error)=>{
            console.log(error);
        });

    },[idProduct]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
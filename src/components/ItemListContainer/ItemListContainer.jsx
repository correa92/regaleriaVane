
import { datos } from "../../productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ()=>{

    const [items, setItems] = useState([]);
   
    const {categoryName} = useParams();
    useEffect(()=>{

        const getProducts = () =>{
            return new Promise((resolve,reject)=>{
                const productosFiltrados = datos.filter((prod)=> prod.category === categoryName || (categoryName === "offer" & prod.offer === "true" ));

                const prodListados = categoryName ? productosFiltrados : datos;
                setTimeout(()=>{
                    resolve(prodListados);
                },1000);

            });

        };

        getProducts().then((resolve)=>{
            setItems(resolve)
        })
        .catch((error)=>{
            console.log(error);
        });

    },[categoryName]);

    return (
        <div className="itemListContainer" >
            <ItemList items={items}/>
        </div>
                     
    )
}

export default ItemListContainer;




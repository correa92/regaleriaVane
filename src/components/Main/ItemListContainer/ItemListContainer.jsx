// import { datos } from "../../../productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { MoonLoader } from "react-spinners";
import { productsCollection } from "../../../firebaseConfig";
import { getDocs,query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  //   Spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {

      let pedido = {};

       if(categoryName === 'offer'){
        const filtro = query(productsCollection, where('offer','==',true))
        pedido = getDocs(filtro);
      }else if (categoryName !== undefined) {
        const filtro = query(productsCollection, where('category','==',categoryName))
        pedido = getDocs(filtro);
      }else{
        pedido = getDocs(productsCollection);
      }

      
      pedido.then((resp)=>{
        const productos = resp.docs.map((product)=> {
          const producto = {id: product.id, ...product.data()}
          return producto
        })
        setLoading(false);
        setItems(productos);
      })
      .catch((er)=>console.error(er))
    };

    getProducts()
      
  }, [categoryName]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <MoonLoader
          color="#9acd32"
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "10% auto",
            borderColor: "red",
          }}
          speedMultiplier={0.7}
        />
      ) : (
        <ItemList items={items} />
      )}
      
    </div>
  );
};

export default ItemListContainer;

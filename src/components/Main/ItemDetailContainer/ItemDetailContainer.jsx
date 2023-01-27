import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { getDoc, doc } from "firebase/firestore";
import { productsCollection } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();

  // Spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {

      const referenciaDoc = doc(productsCollection,idProduct);
      const pedido = getDoc(referenciaDoc);

      pedido
      .then((resolve)=>{
        const producto = resolve.data();
        setItem({id: resolve.id, ...producto})
        setLoading(false);
      })
      .catch((er)=> console.error(er))

    };
    getProducts()
      
  }, [idProduct]);

  return (
    <div>
      {loading ? (
        <MoonLoader
          color="#9acd32"
          loading={loading}
          cssOverride={{ display: "block", margin: "10% auto" }}
        />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

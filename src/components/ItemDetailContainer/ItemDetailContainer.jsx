import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { datos } from "../../productos";
import { MoonLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();

  // Spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        const productosFiltrados = datos.find(
          (prod) => prod.id === parseInt(idProduct)
        );

        const prodEncontrado = idProduct ? productosFiltrados : undefined;
        setTimeout(() => {
          setLoading(false);
          resolve(prodEncontrado);
        }, 2000);
      });
    };

    getProducts()
      .then((resolve) => {
        setItem(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idProduct]);

  return (
    <div>
      {loading ? (
        <MoonLoader
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

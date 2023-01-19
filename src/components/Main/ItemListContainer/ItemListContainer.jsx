import { datos } from "../../../productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { MoonLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  //   Spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        const productosFiltrados = datos.filter(
          (prod) =>
            prod.category === categoryName ||
            (categoryName === "offer") & (prod.offer === "true")
        );

        const prodListados = categoryName ? productosFiltrados : datos;
        setTimeout(() => {
          setLoading(false);
          resolve(prodListados);
        }, 2000);
      });
    };

    getProducts()
      .then((resolve) => {
        setItems(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
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

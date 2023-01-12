import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({ items }) => {
  return (
    <div className="itemList">

      {items.map((element) => (
        <Item
          key={element.id}
          id={element.id}
          name={element.name}
          price={element.price}
          stock={element.stock}
          img={element.img}
          category={element.category}
        />
      ))}
      
    </div>
  );
};

export default ItemList;

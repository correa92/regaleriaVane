import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CarWidget = ()=>{
   return(
     <div className="contenedor" id="cardWidget">
        <FontAwesomeIcon icon={faCartShopping} />
        <p>(0)</p>
    </div>
   )
}

export default CarWidget;
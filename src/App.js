import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

          <Footer />

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

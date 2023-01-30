import NavBar from "./components/Header/NavBar/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Main/Cart/Cart";
import CarritoProvider from "./components/Context/CartContext";
import WeContainer from "./components/Main/WeContainer/WeContainer";
import Form from "./components/Form/Form";

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:idProduct"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/we" element={<WeContainer/>} />
              <Route path="/validation" element={<Form/>} />
              <Route path="*" element={<h1>404 Not Found =(</h1>} />
            </Routes>
          </header>

          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;

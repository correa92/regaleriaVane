import NavBar from "./components/Header/NavBar/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Main/Cart/Cart";
import CustomProvider from "./components/Context/CustomProvider";

function App() {
  return (
    <CustomProvider>
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
              <Route path="*" element={<h1>404 Not Found =(</h1>} />
            </Routes>
          </header>

          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;

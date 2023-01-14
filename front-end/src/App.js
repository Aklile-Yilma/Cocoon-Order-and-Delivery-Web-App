import Menu from "./components/Menu";
import "./app.css";
import "./index.css";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col ">
      <Header/>
      <ProductDetail />
    </div>
  );
}

export default App;

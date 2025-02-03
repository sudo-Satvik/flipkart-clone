import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Carousel from "./components/ui/Carousel";

const App = () => {
  return (
    <div className="bg-[#F1F2F4] min-h-screen w-full">
      <Navbar />
      <div className="container mx-auto mt-16 p-5">
        <ProductList />
        <Carousel />
      </div>
    </div>
  );
};

export default App;

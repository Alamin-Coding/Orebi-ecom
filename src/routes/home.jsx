
import { useProductContext } from "../context/productContext";
import ProductCard from "../components/productCard";

const Home = () => {
  const {isLoading, newArrivals, products} = useProductContext();
  // console.log(newArrivals);

  return (
    <div className="container">
      {isLoading && <h1 className="text-2xl text-blue-500 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Product is loading.....</h1>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map((e) => {
            return (
              <ProductCard key={e.id} data={e} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;

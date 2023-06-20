
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/productContext";

const Home = () => {
  const { isLoading, newArrival, bestSellers } = useProductContext();

  return (
    <div className="container">
      {/* New Arrival Section */}
      <Section sectionHeading={"New Arrivals"}>
        {
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrival.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        }
      </Section>
      {/* Our Bestsellers Section */}
      <Section sectionHeading={"Our Bestsellers"}>
        {
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        }
      </Section>
    </div>
  );
};

export default Home;

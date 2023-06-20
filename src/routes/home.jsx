import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/productContext";
import Banner from "../components/Banner";
import Feature from "../components/Feature";

const Home = () => {
  const { isLoading, newArrival, bestSellers } = useProductContext();

  return (
    <>
      <Banner />
      <Feature />
      <div className="container">
        {/* New Arrival Section */}
        <Section sectionHeading={"New Arrivals"}>
          {isLoading ? (
            <b>Loading..............</b>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrival.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          )}
        </Section>
        {/* Our Bestsellers Section */}
        <Section sectionHeading={"Our Bestsellers"}>
          {isLoading ? (
            <b>Loading..............</b>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          )}
        </Section>
      </div>
    </>
  );
};

export default Home;

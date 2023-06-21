import { Link, useParams } from "react-router-dom";
import ImageGrid from "../components/single-product/imageGrid";
import SingleProductDescription from "../components/single-product/singleProductDescription";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <section>
      <div className="container">
        {/* Breadcrumb start */}
        <div className="py-4">
          <p>
            <Link to={"/"} className="text-blue-500">
              Home
            </Link>
            /<span>Product {id}</span>
          </p>
        </div>
        {/* Breadcrumb end */}

        {/* Image Grid start */}
        <ImageGrid />
        {/* Image Grid end */}
        {/* Product Description start */}
        <SingleProductDescription />
        {/* Product Description end */}
      </div>
    </section>
  );
};

export default SingleProduct;

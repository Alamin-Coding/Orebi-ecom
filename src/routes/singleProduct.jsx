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
          <p className="text-neutral-500 text-xl font-normal flex gap-3 items-center">
            <Link to={"/"} className="text-slate-900">
              Home
            </Link>
            /
            <span className="text-gray-400">Product {id}</span>
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

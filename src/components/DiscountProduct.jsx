import Button from "./Button";

/* eslint-disable react/prop-types */
const DiscountProduct = ({discountProductData}) => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="relative">
            <img
              className="object-cover w-full"
              src={"/src/assets/images/Image-1.png"}
              alt="image-1"
            />
            <div className="absolute bottom-6  left-6">
              <h3 className="text-[39px] leading-[51px] text-heading">
                Phones sale
              </h3>
              <p className="flex items-center pt-7 pb-11 text-[#6D6D6D] text-base leading-5">
                Up to <span className="text-[40px] text-[#262626]">30%</span>
                sale for all phones!
              </p>
              <Button>Shop Now</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative">
              <img
                className="object-cover w-full "
                src="/src/assets/images/Image-2.png"
                alt="image-1"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-6">
                <h3 className="text-[39px] leading-[51px] text-heading">
                  Electronics Sale
                </h3>
                <p className="flex items-center pt-7 pb-11 text-[#6D6D6D] text-base leading-5">
                  Up to <span className="text-[40px] text-[#262626]">70%</span>
                  sale for all electronics!
                </p>
                <Button>Shop Now</Button>
              </div>
            </div>
            <div className="relative">
              <img
                className="object-cover w-full "
                src="/src/assets/images/Image-3.png"
                alt="image-1"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-6">
                <h3 className="text-[39px] leading-[51px] text-heading">
                  Furniture Offer
                </h3>
                <p className="flex items-center pt-7 pb-11 text-[#6D6D6D] text-base leading-5">
                  Up to <span className="text-[40px] text-[#262626]">50%</span>
                  sale for all furniture items!
                </p>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountProduct;

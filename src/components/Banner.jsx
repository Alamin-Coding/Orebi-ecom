import Button from "./Button";
const Banner = () => {
  return (
    <section className="bg-hero-1 bg-no-repeat bg-cover bg-center py-24 md:py-[165px]">
      <div className="container">
        <h2 className="text-5xl leading-normal text-heading">Final Offer</h2>
        <p className="flex items-center pt-7 pb-11 text-[#6D6D6D] text-base leading-5">
          Up to <span className="text-[40px] text-[#262626]">50%</span>sale for
          all furniture items!
        </p>
        <div>
          <Button navigate="/shop">Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

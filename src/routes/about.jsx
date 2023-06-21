// import { useProductContext } from "../context/productContext"

import { Link } from "react-router-dom";
import Button from "../components/Button";

const About = () => {
  // const {singleProduct} = useProductContext()
  return (
    <div>
      <div className="container">
        {/* Breadcrumb start */}
        <div className="py-8">
          <p className="text-neutral-800 text-[49px] font-bold">About</p>
        </div>
        <div className="py-4">
          <p>
            <Link to={"/"} className="text-blue-500">
              Home
            </Link>
            /<span>About</span>
          </p>
        </div>
        {/* Breadcrumb end */}
        <div className="flex gap-6 py-8">
          <div className="relative">
            <figure>
              <img
                className="w-full object-cover"
                src={"/src/assets/images/about/about-1.png"}
                alt={"about-1"}
              />
            </figure>
            <div className="flex justify-center absolute bottom-7 left-1/2 -translate-x-1/2">
              <Button>Our Product</Button>
            </div>
          </div>
          <div className="relative">
            <figure>
              <img
                className="w-full object-cover"
                src={"/src/assets/images/about/about-2.png"}
                alt={"about-1"}
              />
            </figure>
            <div className="flex justify-center absolute bottom-7 left-1/2 -translate-x-1/2">
              <Button>Our Product</Button>
            </div>
          </div>
        </div>

        <div className="H2Infotext py-8">
          <p className="OrebiIsOneOfThe text-neutral-800 text-[39px] font-normal leading-10">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking className.
          </p>
        </div>

        <div className="flex gap-6">
          <div className=" flex-col justify-center items-start gap-[11px] inline-flex">
            <div className=" text-neutral-800 text-[25px] font-bold leading-9">
              Our Brands
            </div>
            <div className="LoremIpsumIsSimpl text-neutral-500 text-[16px] font-normal leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </div>
          </div>
          <div className="OurStory flex-col justify-center items-start gap-[11px] inline-flex">
            <div className="OurStory text-neutral-800 text-[25px] font-bold leading-9">
              Our Story
            </div>
            <div className="LoremIpsumIsSimpl font-normal leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </div>
          </div>
          <div className="OurVision flex-col justify-center items-start gap-[11px] inline-flex">
            <div className="OurVision text-neutral-800 text-[25px] font-bold leading-9">
              Our Vision
            </div>
            <div className="LoremIpsumIsSimpl">
              <span className="text-neutral-500 text-[16px] font-normal leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an{" "}
              </span>
              <span className="text-neutral-500 text-[16px] font-normal leading-loose"></span>
              <span className="text-neutral-500 text-[16px] font-normal leading-loose">
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

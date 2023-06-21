import Color from "./color";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Button from "../Button";

const SingleProductDescription = ({ productName }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 py-12">
          <h3 className="text-neutral-800 text-[39px] font-bold">Product</h3>
          <p className="flex gap-4 items-center">
            <span className="flex gap-2 items-center">
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
              <BsStar />
              <BsStar />
            </span>
            <span className="text-neutral-500 text-[14px] font-normal">
              ${1} Review
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <span className="text-neutral-500 text-[16px] font-normal line-through">
              $88.00
            </span>
            <span className="text-neutral-800 text-[20px] font-bold">
              $44.00
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex gap-4 items-center">
            <span className="text-neutral-800 text-[16px] font-bold leading-snug">
              COLOR:
            </span>
            <div className="flex gap-3">
              <Color />
              <Color />
              <Color />
              <Color />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-neutral-800 text-[16px] font-bold leading-snug">
              SIZE:
            </span>
            <select name="size" id="size">
              <option
                className="text-neutral-500 text-[16px] font-normal leading-loose"
                value="S"
              >
                S
              </option>
              <option
                className="text-neutral-500 text-[16px] font-normal leading-loose"
                value="L"
              >
                L
              </option>
              <option
                className="text-neutral-500 text-[16px] font-normal leading-loose"
                value="XL"
              >
                XL
              </option>
              <option
                className="text-neutral-500 text-[16px] font-normal leading-loose"
                value="XXL"
              >
                XXL
              </option>
            </select>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-neutral-800 text-[16px] font-bold leading-snug">
              QUANTITY:
            </span>
            <div>
              <button className="text-neutral-500 text-[16px] font-normal leading-loose">
                -
              </button>
              <input
                className="text-neutral-500 text-[16px] font-normal leading-loose w-4 text-center"
                type="text"
                value={"1"}
              />
              <button className="text-neutral-500 text-[16px] font-normal leading-loose">
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-neutral-800 text-[16px] font-bold leading-snug">
              STATUS:
            </span>
            <span className="text-neutral-500 text-[16px] font-normal leading-loose">
              In stock
            </span>
          </div>
          <div className="text-neutral-800 text-[16px] font-bold leading-snug">
            FEATURES & DETAILS
          </div>
        </div>
        <div>
          <p className="w-[780px] h-[60px] text-neutral-500 text-[16px] font-normal leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <br />
        </div>
      </div>

      <div>
        <p className="flex gap-14 items-center">
          <span className="text-center text-neutral-500 text-[20px] font-normal leading-7">
            Description
          </span>
          <span className="text-neutral-800 text-[20px] font-bold">
            Reviews (1)
          </span>
        </p>
        <p className="text-neutral-500 text-[14px] font-normal leading-loose">
          1 review for Product
        </p>

        <div className="flex gap-14 items-center">
          <span className="text-neutral-800 text-[16px] font-normal leading-loose">
            John Ford
          </span>
          <span className="flex gap-2 items-center">
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
            <BsStar />
          </span>
        </div>

        <div className="flex gap-14 items-center">
          <p className=" text-neutral-500 text-[16px] font-normal leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            <br />
          </p>
        </div>

        <div className="pt-20 pb-16">
          <div className="pb-4">
            <span className="text-neutral-800 text-[20px] font-bold">
              Add a Review
            </span>
          </div>
          <form action="/">
            <div className="flex gap-6 flex-col py-4">
              <div className="flex gap-2 flex-col">
                <label
                  className="text-neutral-800 text-[16px] font-bold leading-snug"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="text-neutral-500 text-[14px] font-normal"
                  type="text"
                  placeholder="Your name here"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label
                  className="text-neutral-800 text-[16px] font-bold leading-snug"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="text-neutral-500 text-[14px] font-normal"
                  type="email"
                  placeholder="Your email here"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label
                  className="text-neutral-800 text-[16px] font-bold leading-snug"
                  htmlFor="name"
                >
                  Review
                </label>
                <input
                  className="text-neutral-500 text-[14px] font-normal"
                  type="text"
                  placeholder="Your review here"
                />
              </div>
            </div>
            <Button>Post</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleProductDescription;

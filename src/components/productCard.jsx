/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ConvertCurrency from "../helper/convertCurrency";

const ProductCard = ({ product }) => {
  const { thumbnail, price, title, newProduct, id } = product;

  return (
    <>
      <div className="relative">
        {newProduct && (
          <label
            htmlFor="/"
            className="absolute z-10 left-3 top-3 px-7 py-2 text-base bg-black text-white text-[14px]"
          >
            New
          </label>
        )}

        <div className="relative group hover:cursor-pointer">
          <Link to={`product/${id}`}>
            <figure>
              <img
                className="object-cover w-full h-52"
                src={thumbnail}
                alt="image-4"
              />
            </figure>
          </Link>
          <div className="absolute w-full bottom-0 right-0 bg-white opacity-0 group-hover:opacity-100 transition-all">
            <div className="flex flex-col gap-2 py-4 px-4">
              <p className="flex justify-end gap-3 items-center">
                <label
                  htmlFor="wish"
                  className="text-base text-[#767676] font-normal"
                >
                  Add to Wish List
                </label>
                <span id="wish">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3822 0.844553C10.9176 -0.403554 8.73939 -0.179055 7.39507 1.20803L6.86857 1.75057L6.34206 1.20803C5.00041 -0.179055 2.81957 -0.403554 1.35498 0.844553C-0.323416 2.27707 -0.411612 4.84812 1.09039 6.4009L6.26188 11.7408C6.59596 12.0855 7.1385 12.0855 7.47257 11.7408L12.6441 6.4009C14.1487 4.84812 14.0605 2.27707 12.3822 0.844553Z"
                      fill="#262626"
                    />
                  </svg>
                </span>
              </p>
              <p className="flex justify-end gap-3 items-center">
                <label
                  htmlFor="compare"
                  className="text-base text-[#767676] font-normal"
                >
                  Compare
                </label>
                <span id="compare">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z"
                      fill="#262626"
                    />
                  </svg>
                </span>
              </p>
              <p className="flex justify-end gap-3 items-center">
                <label
                  htmlFor="cart"
                  className="text-base text-[#767676] font-normal"
                >
                  Add to Cart
                </label>
                <span id="cart">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z"
                      fill="#262626"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-6">
          <h4 className="text-heading text-xl leading-normal font-bold flex justify-between gap-2 items-center">
            <Link to={`product/${id}`}>{title}</Link>
            <span className="text-[#767676] text-base leading-normal font-normal">
              <ConvertCurrency price={price} />
            </span>
          </h4>
          <p className="text-paragraph text-base leading-normal">Black</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

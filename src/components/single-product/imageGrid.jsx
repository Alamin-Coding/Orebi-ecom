
const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="max-h-[780px] overflow-hidden">
       <figure>
        <img className="w-full object-cover" src={"/src/assets/images/single-product/Image_1.png"} alt={"file-name"} />
       </figure>
      </div>

      <div className="max-h-[780px] overflow-hidden">
       <figure>
        <img className="w-full object-cover" src={"/src/assets/images/single-product/Image_2.png"} alt={"file-name"} />
       </figure>
      </div>

      <div className="max-h-[780px] overflow-hidden">
       <figure>
        <img className="w-full object-cover" src={"/src/assets/images/single-product/Image_3.png"} alt={"file-name"} />
       </figure>
      </div>

      <div className="max-h-[780px] overflow-hidden">
       <figure>
        <img className="w-full object-cover" src={"/src/assets/images/single-product/Image_4.png"} alt={"file-name"} />
       </figure>
      </div>
    </div>
  )
}

export default ImageGrid

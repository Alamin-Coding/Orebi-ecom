/* eslint-disable react/prop-types */

const NewArrival = ({ sectionHeading, children }) => {
  
  return (
    <section className="pt-32">
      <div className="container">
        <h2 className="text-heading text-[39px] leading-[51px] font-bold pb-12">
          {sectionHeading}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default NewArrival;

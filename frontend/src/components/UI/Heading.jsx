const Heading = ({ heading, align = "text-center" }) => {
  return (
    <div className="w-full    ">
      <h1 className={`text-primary ${align}  text-[22px] sm:text-[28px] lg:text-[38px] font-bold`}>
        {" "}
        {heading}
      </h1>
    </div>
  );
};

export default Heading;

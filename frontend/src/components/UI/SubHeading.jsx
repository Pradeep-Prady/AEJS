const SubHeading = ({ heading, align = "text-center" }) => {
  return (
    <div className="w-full   ">
      <h4
        className={`text-myLG  ${align} tracking-wide text-[18px] sm:text-[22px] lg:text-[26px] font-bold `}
      >
        {" "}
        {heading}
      </h4>
    </div>
  );
};

export default SubHeading;

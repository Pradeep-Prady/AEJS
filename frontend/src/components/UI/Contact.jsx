import Heading from "./Heading";

const Contact = ({ title, title2 = "", subTitle }) => {
  return (
    <div className="my-10 md:my-20 py-5 md:py-10 myPadX bg-[#F1F1F1]">
      <Heading heading={title} />
      {title2 && <Heading heading={title2} />}

      {subTitle && (
        <h4 className={`text-[22px] text-myBlue text-center my-3`}>
          {subTitle}
        </h4>
      )}
      <div className={`w-full flex items-center justify-center my-2`}>
        <button className="btn-round-green !text-white font-medium my-2 md:my-5">
          {" "}
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;

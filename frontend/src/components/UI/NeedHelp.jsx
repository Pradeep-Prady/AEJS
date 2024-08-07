import { BiSolidPhoneCall } from "react-icons/bi";
const NeedHelp = () => {
  return (
    <div className="w-full myPadX">
      <div className="my-10 md:my-20 py-5 md:py-10 rounded-md  bg-[#F1F1F1] w-full flex flex-col items-center">
        <h1
          className={`text-[32px] text-myBlue text-center font-semibold my-3`}
        >
          NEED HELP?
        </h1>

        <h2 className="text-[20px]">
          {" "}
          Call our corporate office and we will connect you with a team member
          who can help.{" "}
        </h2>
        <a href="tel:9944580798">
          <div className="bg-myGreen  my-5 px-4 py-2 rounded-full text-[24px] flex items-center justify-center">
            <BiSolidPhoneCall />
            <p className="pl-1 ">+91 99445 80798</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NeedHelp;

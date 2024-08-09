import Image from "next/image";
import quotes from "/public/assets/general/quotes.png";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className={`w-full my-7 md:my-10 p-5 rounded-xl bg-[#63636325]`}>
      <div className={`w-full flex`}>
        <div className="w-[50px] md:w-[100px] max:w-[200px] flex items-start">
          <Image
            className={`rotate-180 h-auto w-auto`}
            src={quotes}
            alt="quotes"
          />
        </div>
        <p className={`text-center font-semibold leading-7`}>
          {testimonial.content}
        </p>
        <div className="w-[50px] md:w-[100px] max:w-[200px] flex items-start">
          <Image className={``} src={quotes} alt="quotes" />
        </div>
      </div>
      <div className="flex items-center justify-center py-5 w-full ">
        <div className="flex border-[6px] border-myLG items-center justify-center rounded-full overflow-hidden   w-[100px]  h-[100px]">
          <Image
            className="h-full object-cover  "
            src={testimonial.img}
            alt="user"
          />
        </div>
      </div>
      <h3 className={`text-[20px] text-center font-semibold`}>
        {testimonial.name}{" "}
      </h3>
    </div>
  );
};

export default TestimonialsCard;

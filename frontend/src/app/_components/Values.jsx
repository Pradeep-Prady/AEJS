import Image from "next/image";

const Values = () => {
  const values = [
    {
      name: " Commitment to Integrity",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/bespoke-comprehensive-digital-strategies.svg",
      content:
        "  At our security agency in Coimbatore, honesty is our core value. Our detective services and surveillance room operations are based on being truthful and transparent. We conduct all investigations discreetly, providing accurate and reliable information. Every team member, from security guards to fire safety experts, follows high standards of honesty, ensuring our clients trust us completely.",
    },
    {
      name: "   Striving for Excellence",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/results-driven-and-performance-focused.svg",
      content:
        "   We aim to provide the best in all our services. Our armed PSOs, security supervisors, and gunmen are well-trained professionals dedicated to keeping environments safe. Our bouncers and ASOs handle situations skillfully and professionally, ensuring our clients' safety. We continuously train our team to stay updated with the latest security practices, making sure we meet and exceed our clients' expectations.",
    },
    {
      name: "Embracing Innovation",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/in-house-creative-production.svg",
      content:
        "Innovation is key to our security services. Our surveillance room usesthe latest technology for real-time monitoring and quick response to security threats. We use advanced tools and techniques in our fire safety and security services to offer complete protection. By staying innovative, we make sure our security measures are effective and can adapt to new threats, providing our clients with the best and most reliable security solutions.",
    },
  ];
  return (
    <div className="w-full relative z-10 grid md:grid-cols-3 myPadX md:my-10  md:gap-10">
      {values.map((value, index) => (
        <ValueCard value={value} key={index} />
      ))}
      
    </div>
  );
};

export default Values;

const ValueCard = ({ value }) => {

 
  return (
    <div className="md:p-3">
      <div className="flex sm:flex-col items- gap-5 sm:gap-0">
        <Image
          src={value.image}
          className="w-[3em] sm:w-[5em]"
          alt="image"
          width={70}
          height={70}
        />
        <h1 className="font-semibold my-5 text-myBlue text-[24px] md:text-[26px]">
          {value.name}
        </h1>
      </div>

      <p className="leading-2 md:leading-7   md:text-[17px]">
        {" "}
        {value.content}{" "}
      </p>
    </div>
  );
};

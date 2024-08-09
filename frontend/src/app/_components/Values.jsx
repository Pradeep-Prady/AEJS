import Image from "next/image";

const Values = () => {
  const values = [
    {
      name: "Commitment to Integrity",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/bespoke-comprehensive-digital-strategies.svg",
      content:
        "It is important to note that in AEJSINFO, we uphold the attribute of corporate integrity high when working. As such, the quality policy fully supports and acts on each of the following cardinal principles; The members of our team remain committed to professionalism because we want our clients to be able to turn to us for reliable and uncomplicated service.",
    },
    {
      name: "Striving for Excellence ",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/results-driven-and-performance-focused.svg",
      content:
        "Quality is not an aim, but a standard at Dunmore. Since we have been providing our services for more than 15 years, we are always in pursuit of perfection and the best results. This team is capable of handling each of these challenges with the utmost professionalism hence offering the best services all the time.",
    },
    {
      name: "Embracing Innovation",
      image:
        "https://www.dilate.com.au/wp-content/uploads/2023/12/in-house-creative-production.svg",
      content:
        "It goes without saying that in the modern world, the idea of leadership implies the use of state-of-art technologies and ideas. At AEJSINFO, our priority is to use the latest security systems and solutions in the line of our services hence availing security services in the market with the highest level of protection.",
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
        <h3 className="font-semibold my-5 text-myBlue text-[24px] md:text-[26px]">
          {value.name}
        </h3>
      </div>

      <p className="leading-2 md:leading-7   md:text-[17px]">
        {" "}
        {value.content}{" "}
      </p>
    </div>
  );
};

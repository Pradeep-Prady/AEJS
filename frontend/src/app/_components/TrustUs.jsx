 
import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import React from "react";
 
import Slider from "@/components/UI/Slider";

const TrustUs = () => {
  const testimonials = [
   
    1, 2, 3, 4, 5, 6,
  ];

  // Function to chunk the testimonials array into pairs
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Chunk the testimonials array into pairs
  const lgChunkedTestimonials = chunkArray(testimonials, 2);
  const smChunkedTestimonials = chunkArray(testimonials, 1);


  return (
    <div className="w-full my-10 lg:my-20 myPadX">
      <Heading heading={`Why Our Clients Trust Us`} />
      <SubHeading heading={`Clients Testimonials`} />
      <Slider lgChunkedTestimonials={lgChunkedTestimonials} smChunkedTestimonials={smChunkedTestimonials} />
    </div>
  );
};

export default TrustUs;

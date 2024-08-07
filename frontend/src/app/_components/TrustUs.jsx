import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import React from "react";

import Slider from "@/components/UI/Slider";

import user1 from "/public/assets/testimonials/1.jpg";
import user2 from "/public/assets/testimonials/2.jpg";
import user3 from "/public/assets/testimonials/3.jpg";
import user4 from "/public/assets/testimonials/4.jpg";
import user5 from "/public/assets/testimonials/5.jpg";
import user6 from "/public/assets/testimonials/6.jpg";

const TrustUs = () => {
  const testimonials = [
    {
      img: user5,
      name: "Priya Sharma",
      content:
        "AEJS Info's manpower solutions saved our project. They quickly provided skilled workers when we were in a crunch. Their efficiency and reliability make them our go-to staffing partner in Coimbatore.",
    },

    {
      img: user3,
      name: "Anand Patel",
      content:
        "As a small business owner, I was worried about security. AEJS Info tailored a perfect security plan for our needs and budget. Their guards are courteous and vigilant. I sleep better knowing they're on watch.",
    },

    {
      img: user4,
      name: "Krishnan",
      content:
        "The level of professionalism from AEJS Info is outstanding. Their security personnel at our college events are always alert and respectful. They've become an essential part of our event planning in Coimbatore.",
    },
    {
      img: user2,
      name: "Dr. Suresh Menon",
      content:
        "We hired AEJS Info for a delicate corporate investigation. Their detective team was discreet, thorough, and delivered results beyond our expectations. They're now our trusted partners for all sensitive matters.",
    },

    {
      name: "Lakshmi Venkatesh",
      img: user1,
      content:
        "The detective services from AEJS Info were invaluable to our case. Their discreet and thorough investigation provided crucial evidence. Highly recommended for anyone in Coimbatore needing professional detective work.",
    },

    {
      img: user6,
      name: "Vikram Reddy",
      content:
        "The manpower AEJS Info provided for our seasonal rush was exceptional. Well-trained, punctual, and hardworking individuals who integrated seamlessly with our team. They're our first choice for temporary staffing in Coimbatore.",
    },
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
      <Slider
        lgChunkedTestimonials={lgChunkedTestimonials}
        smChunkedTestimonials={smChunkedTestimonials}
      />
    </div>
  );
};

export default TrustUs;

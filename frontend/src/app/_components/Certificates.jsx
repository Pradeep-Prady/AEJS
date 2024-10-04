// "use client";
// import React, { useState } from "react";
// import certificate1 from "/public/assets/about/certificate (1).png";
// import certificate2 from "/public/assets/about/certificate (2).png";
// import certificate3 from "/public/assets/about/certificate (3).png";
// import certificate4 from "/public/assets/about/certificate (4).png";

// import isc from "/public/assets/about/isc.jpg";
// import startup from "/public/assets/about/startup.jpg";

// import Image from "next/image";
// import { certificatesData, certificatesFAQsData } from "../_data/general";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// const Certificates = ({ certificate }) => {
//   const [expandedFaq, setExpandedFaq] = useState(certificatesFAQsData[0].id);

//   const toggleFaq = (id) => {
//     setExpandedFaq((prev) => (prev === id ? null : id));
//   };
//   return (
//     <div className={`w-full h-auto md:grid grid-cols-2 myPadX `}>
//       <div className={`w-full h-full flex items-center gap-5 p-5`}>
//         <div
//           className={`w-full h-full flex flex-col gap-10 items-center justify-center`}
//         >
//           <Image
//             className="md:w-[300px] md:h-[400px] shadow-xl"
//             width={300}
//             height={500}
//             src={isc.src}
//             alt="certificate1"
//           />
//           {/* <Image
//             className="md:w-[300px] md:h-[200px]"
//             width={300}
//             height={200}
//             src={certificate1.src}
//             alt="certificate1"
//           />
//           <Image
//             className="md:w-[300px] md:h-[200px]"
//             width={300}
//             height={200}
//             src={certificate3.src}
//             alt="certificate3"
//           /> */}
//         </div>
//         <div className={`w-full h-full flex flex-col gap-10 justify-center`}>
//           {/* <Image
//             className="md:w-[300px] md:h-[200px]"
//             width={300}
//             height={200}
//             src={certificate4.src}
//             alt="certificate4"
//           />
//           <Image
//             className="md:w-[300px] md:h-[200px]"
//             width={300}
//             height={200}
//             src={certificate2.src}
//             alt="certificate2"
//           /> */}

//           <Image
//             className="md:w-[300px] md:h-[200px] shadow-xl"
//             width={300}
//             height={200}
//             src={startup.src}
//             alt="certificate2"
//           />
//         </div>
//       </div>

//       <div className={"p-2 sm:p-5"}>
//         <h1
//           className={`text-myLG text-[22px] sm:text-[28px] lg:text-[38px] font-bold`}
//         >
//           Why Choose Us?
//         </h1>

//         <div>
//           <h2 className="text-[18px] w-11/12 font-semibold my-1">
//             {certificatesData[certificate]?.mainContent}
//           </h2>
//         </div>

//         {certificatesData[certificate]?.contents?.map((cert) => (
//           <div key={cert.title}>
//             <h2 className="text-[16px] w-11/12 font-semibold my-1">
//               {cert.title}
//             </h2>
//             <div className={`ps-5 my-2`}>
//               <p>{cert.data}</p>
//             </div>
//           </div>
//         ))}

//         <div>
//           <h2 className="text-[18px] mt-3 w-11/12 font-semibold my-1">
//             {certificatesData[certificate]?.subContent}
//           </h2>
//         </div>

//         {/* {certificatesFAQsData?.map((faq) => (
//           <div
//             className={`border-b-2 py-2 border-[rgb(47,84,206,0.5)]`}
//             key={faq.id}
//           >
//             <div className="flex justify-between items-start">
//               <h2 className="text-[18px] w-11/12 font-semibold my-1">
//                 {faq.qus}
//               </h2>
//               <button
//                 className={
//                   "w-1/12 flex items-center justify-center cursor-pointer"
//                 }
//                 onClick={() => toggleFaq(faq.id)}
//               >
//                 {expandedFaq === faq.id ? <FaMinus /> : <FaPlus />}
//               </button>
//             </div>
//             {expandedFaq === faq.id && (
//               <div className={`ps-5 my-2`}>
//                 <p>{faq.ans}</p>
//               </div>
//             )}
//           </div>
//         ))} */}

//       </div>
//     </div>
//   );
// };

// export default Certificates;
 

"use client";
import React, { useState } from "react";

import isc from "/public/assets/about/isc.jpg";
import startup from "/public/assets/about/startup.jpg";

import Image from "next/image";
import { certificatesData } from "../_data/general";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Certificates = ({ certificate }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`w-full h-auto md:grid grid-cols-2 myPadX `}>
      <div className={`w-full h-full flex items-center gap-5 p-5`}>
        <div
          className={`w-full h-full flex flex-col gap-10 items-center justify-center`}
        >
          <Image
            className="md:w-[300px] md:h-[400px] shadow-xl"
            width={300}
            height={500}
            src={isc.src}
            alt="certificate1"
          />
        </div>
        <div className={`w-full h-full flex flex-col gap-10 justify-center`}>
          <Image
            className="md:w-[300px] md:h-[200px] shadow-xl"
            width={300}
            height={200}
            src={startup.src}
            alt="certificate2"
          />
        </div>
      </div>

      <div className={"p-2 sm:p-5"}>
        <h3
          className={`text-myLG text-[22px] sm:text-[28px] lg:text-[38px] font-bold`}
        >
          Why Choose Us?
        </h3>

        <div>
          <p className="text-[18px] w-11/12 font-semibold my-1">
            {certificatesData[certificate]?.mainContent}
          </p>
        </div>

        {certificatesData[certificate]?.contents?.map((cert, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center my-3 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h4 className="text-[16px] w-11/12 font-semibold my-1">
                {cert.title}
              </h4>
              {expandedFaq === index ? <FaMinus /> : <FaPlus />}
            </div>
            {expandedFaq === index && (
              <div className={`ps-5 my-2`}>
                <p>{cert.data}</p>
              </div>
            )}
          </div>
        ))}

        <div>
          <h4 className="text-[16px] mt-3 w-11/12 font-semibold my-1">
            {certificatesData[certificate]?.subContent}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

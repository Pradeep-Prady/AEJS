import serviceImage4 from "/public/assets/security services/service-image.png";
import serviceImage3 from "/public/assets/security services/service-image-3.png";
import service_armed_pso from "/public/assets/security services/icons/Armed PSO.png";
import service_security_guard from "/public/assets/security services/icons/Security Guard.png";
import service_security_supervisor from "/public/assets/security services/icons/Security Supervisor.png";
import service_gunman from "/public/assets/security services/icons/Gunman.png";
import service_surveillance_room from "/public/assets/security services/icons/SurveillanceRoom.png";
import service_fire_safety_expert from "/public/assets/security services/icons/FireSafetyExpert.png";
import service_armed_security_officer from "/public/assets/security services/icons/Armed Security officer.png";
import service_bouncer from "/public/assets/security services/icons/Bouncer.png";

//

import ArmedPsoImg from "/public/assets/security services/armed-pso/ArmedPso.webp";
import SecurityGuardImg from "/public/assets/security services/armed-pso/SecurityGuard.webp";
import ASOImg from "/public/assets/security services/armed-pso/ASO.webp";
import SecuritySupervisorImg from "/public/assets/security services/armed-pso/SecuritySupervisor.webp";
import GunmanImg from "/public/assets/security services/armed-pso/Gunman.webp";
import BouncerImg from "/public/assets/security services/armed-pso/Bouncer.webp";
import FireSafteyExpertImg from "/public/assets/security services/armed-pso/FireSafteyExpert.webp";
import SurvilanceRoomImg from "/public/assets/security services/armed-pso/SurvilanceRoom.webp";

// Detactive Services Icons

import detective_agencies_for_cyber_crime from "/public/assets/Detective Services/icons/detective-agencies-for-cyber-crime.svg";
import detective_agencies_for_matrimonial_screening from "/public/assets/Detective Services/icons/detective-agencies-for-matrimonial-screening.svg";
import personal_investigation from "/public/assets/Detective Services/icons/personal-investigation.svg";
import corporate_investigation from "/public/assets/Detective Services/icons/corporate-investigation.svg";
import forensic_investigation from "/public/assets/Detective Services/icons/forensic-investigation.svg";
import cybercrime_investgation from "/public/assets/Detective Services/icons/cybercrime-investgation.svg";

// Manpower

import it_labour from "/public/assets/Manpower Consultancy/icons/it-labour.svg";
import skilled_labour from "/public/assets/Manpower Consultancy/icons/skilled-labour.svg";
import unskilled_labour from "/public/assets/Manpower Consultancy/icons/unskilled-labour.svg";

// House Cleaning

import house_cleaning from "/public/assets/House Cleaning/icons/House cleaning.svg";

import deep_cleaning from "/public/assets/House Cleaning/icons/deep-cleaning.svg";

export const navBarData = [
  {
    id: "nbd_1",
    title: "Home",
    path: "/",
  },
  // {
  //   id: "nbd_2",
  //   title: "About Us",
  //   path: "/about-us",
  // },
  {
    id: "nbd_3",
    title: "Security Services",
    path: "/security-services",

    subMenu: [
      {
        id: "nbd_3_1",
        title: "Armed PSO",
        path: "/security-services/armed-pso-coimbatore",
        icon: service_armed_pso,
        image: ArmedPsoImg,
      },
      {
        id: "nbd_3_2",
        title: "Security Guard",
        path: "/security-services/security-guard-coimbatore",
        image: SecurityGuardImg,
        icon: service_security_guard,
      },
      {
        id: "nbd_3_3",
        title: "Security Supervisor",
        path: "/security-services/security-supervisor-coimbatore",
        icon: service_security_supervisor,
        image: SecuritySupervisorImg,
      },
      {
        id: "nbd_3_4",
        title: "Gunman",
        path: "/security-services/gunman-coimbatore",
        icon: service_gunman,
        image: GunmanImg,
      },
      {
        id: "nbd_3_5",
        title: "ASO",
        path: "/security-services/aso-coimbatore",
        icon: service_armed_security_officer,
        image: ASOImg,
      },
      {
        id: "nbd_3_6",
        title: "Bouncer",
        path: "/security-services/bouncer-coimbatore",
        icon: service_bouncer,
        image: BouncerImg,
      },
      {
        id: "nbd_3_7",
        title: "Fire Safety Expert",
        path: "/security-services/fire-safety-expert-coimbatore",
        icon: service_fire_safety_expert,
        image: FireSafteyExpertImg,
      },
      {
        id: "nbd_3_8",
        title: "Surveillance Room",
        path: "/security-services/surveillance-room-coimbatore",
        icon: service_surveillance_room,
        image: SurvilanceRoomImg,
      },
    ],
  },
  {
    id: "nbd_4",
    title: "Detective Services",
    path: "/detective-services",
    subMenu: [
      {
        id: "nbd_4_1",
        title: "Detective agencies for Cyber Crime",
        path: "/detective-services/detective-agencies-for-cyber-crime-coimbatore",
        image: serviceImage3,
        icon: detective_agencies_for_cyber_crime,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_2",
        title: "Detective agencies for Matrimonial Screening",
        path: "/detective-services/detective-agencies-for-matrimonial-screening-coimbatore",
        image: serviceImage3,
        icon: detective_agencies_for_matrimonial_screening,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_3",
        title: "Personal Investigation",
        path: "/detective-services/personal-investigation-coimbatore",
        image: serviceImage3,
        icon: personal_investigation,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_4",
        title: "Corporate Investigation",
        path: "/detective-services/corporate-investigation-coimbatore",
        image: serviceImage3,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
        icon: corporate_investigation,
      },
      {
        id: "nbd_4_5",
        title: "Forensic Investigation",
        path: "/detective-services/forensic-investigation-coimbatore",
        image: serviceImage3,
        icon: forensic_investigation,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_6",
        title: "Cybercrime Investgation",
        path: "/detective-services/cybercrime-investgation-coimbatore",
        image: serviceImage3,
        icon: cybercrime_investgation,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
    ],
  },
  {
    id: "nbd_5",
    title: "Manpower Consultancy",
    path: "/manpower-consultancy",
    subMenu: [
      {
        id: "nbd_5_1",
        title: "IT labour",
        path: "/manpower-consultancy/it-labour-coimbatore",
        icon: it_labour,
        image: serviceImage3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_5_2",
        title: "Skilled labour",
        path: "/manpower-consultancy/skilled-labour-coimbatore",
        image: serviceImage3,
        icon: skilled_labour,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_5_3",
        title: "Unskilled labour",
        path: "/manpower-consultancy/unskilled-labour-coimbatore",
        image: serviceImage3,
        icon: unskilled_labour,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
    ],
  },
  {
    id: "nbd_6",
    title: "House Cleaning",
    path: "/house-cleaning",
    subMenu: [
      {
        id: "nbd_6_1",
        title: "Deep Cleaning",
        path: "/house-cleaning/deep-cleaning-coimbatore",
        icon: deep_cleaning,
        image: serviceImage3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
    ],
  },

  // {
  //   id: "nbd_7",
  //   title: "Career",
  //   path: "/career",
  // },
  // {
  //   id: "nbd_8",
  //   title: "Contact Us",
  //   path: "/contact-us",
  // },
  {
    id: "nbd_7",
    title: "More",
    // path: "/career",
    subMenu: [
      {
        id: "nbd_7_01",
        title: "About Us",
        path: "/about-us",
      },
      {
        id: "nbd_7_02",
        title: "Career",
        path: "/career",
      },
      {
        id: "nbd_7_03",
        title: "Contact Us",
        path: "/contact-us",
      },
    ],
  },
];

export const mainContentData = [
  {
    title:
      "We Provide Security, Detective, and Manpower services in Coimbatore",
    subTitle: "Peace of mind. Guaranteed.",
    content:
      "AEJS INFO stands as a one-stop shop for all your needs in Coimbatore since the company was established to provide various services that cater to all the client's needs. The services offered range from the provision of reliable and comprehensive security solutions to investigation services, or manpower consulting services.",
    datas: [
      {
        title: "Security Solutions ",
        description: "for residential, commercial, and industrial properties.",
      },
      {
        title: "Detective Services",
        description:
          "for matrimonial screening, corporate investigations, and more.",
      },
      {
        title: "Manpower Consultancy ",
        description: "to connect you with the right personnel.",
      },
      {
        title: "Housekeeping Services",
        description: "to maintain clean and orderly environments.",
      },
    ],
  },
  {
    title: "Who We Are?",
    subTitle: "Your Trusted Partner for Security, Investigations, and People..",
    content:
      "AEJS INFO is one of the most reputable security companies situated in Coimbatore for the last 15 years that provides a full range of services to satisfy all your security requirements. Being consistent with quality standards and ensuring customer satisfaction has made us the most sought-after organization by clients in different fields.",
    datas: [
      {
        title: "Security Solutions",
        description:
          "Through our state-of-the-art security solutions for homes, offices, businesses, and factories - you can be assured that your property is safe all the time. ",
      },
      {
        title: "Detective Services",
        description:
          "Our expert investigators conduct investigations for various situations such as pre-marriage screening, corporate investigation, and fraud investigation among others.",
      },
      {
        title: "Manpower Consultancy",
        description:
          "In this respect, we provide professional manpower solutions and services that enable business organizations to source suitable and qualified personnel to manage their security and other human resource requirements. ",
      },
      {
        title: "Housekeeping Services",
        description:
          "Our commitment and services entail cleaning servants and collecting all dirt in both individual homes and offices or business premises.",
      },
    ],
  },
];

export const certificatesData = [
  {
    id: "cd_1",
    mainContent:
      "There should be no doubt that by selecting AEJS INFO, one selects a company with a well-founded reputation. Here's why we're the preferred security services in Coimbatore",
    contents: [
      {
        title: "Experienced Team",
        data: "Our team consists of professionals who have been working in the security industry for the last 15 years, thus, we have got the necessary knowledge and experience to guarantee the excellent results. ",
      },
      {
        title: "24/7 Availability",
        data: "Due to this we know that security needs might occur at any time and this is why we offer our services at any time of the day and any day of the year.",
      },
      {
        title: "Advanced Technology",
        data: "Employing the best of state of art security solution is our major strength where our clients are always on the receiving end of state of the art security systems solutions",
      },
      {
        title: "Comprehensive Services",
        data: "From security solutions and detective services to manpower consultancy and housekeeping being some of the services we provide, are unique to the need you have.",
      },
      {
        title: "Customer Satisfaction",
        data: "Guarantee of the customer's satisfaction is seen in our individualized, adequate, and timely work.",
      },
    ],
    subContent:
      "When a client turns to AEJS INFO for security, what he or she receives is not a service, but assurance. Choose our services to protect your best assets, with the knowledge and passion that can only come from would-be professionals with a string of years in practicing and excellence oriented. ",
  },
  {
    id: "cd_2",
    mainContent:
      "There should be no doubt that by selecting AEJS INFO, one selects a company with a well-founded reputation. Here's why we're the preferred security service provider in Coimbatore",
    contents: [
      {
        title: "Experienced Team",
        data: "Our team consists of professionals who have been working in the security industry for the last 15 years, thus, we have got the necessary knowledge and experience to guarantee the excellent results. ",
      },
      {
        title: "24/7 Availability",
        data: "Due to this we know that security needs might occur at any time and this is why we offer our services at any time of the day and any day of the year.",
      },
      {
        title: "Advanced Technology",
        data: "Employing the best of state of art security solution is our major strength where our clients are always on the receiving end of state of the art security systems solutions",
      },
      {
        title: "Comprehensive Services",
        data: "From security solutions and detective services to manpower consultancy and housekeeping being some of the services we provide, are unique to the need you have.",
      },
      {
        title: "Customer Satisfaction",
        data: "Guarantee of the customer's satisfaction is seen in our individualized, adequate, and timely work.",
      },
    ],
    subContent:
      "When a client turns to AEJS INFO for security, what he or she receives is not a service, but assurance. Choose our services to protect your best assets, with the knowledge and passion that can only come from would-be professionals with a string of years in practicing and excellence oriented. ",
  },
];

export const certificatesFAQsData = [
  {
    id: "cfd_1",
    qus: "Are your security guards and investigators highly trained and experienced?",
    ans: "Yes, our security guards are rigorously trained and licensed, exceeding industry standards. They are equipped to handle a variety of situations and ensure the safety of your property and personnel.  ",
  },
  {
    id: "cfd_2",

    qus: "Do you offer a wide range of security and investigative services to meet my specific needs?",
    ans: "Yes, our security guards are rigorously trained and licensed, exceeding industry standards. They are equipped to handle a variety of situations and ensure the safety of your property and personnel.  ",
  },
  {
    id: "cfd_3",

    qus: "Do you stay up-to-date on the latest security threats and investigative techniques?",
    ans: "Yes, our security guards are rigorously trained and licensed, exceeding industry standards. They are equipped to handle a variety of situations and ensure the safety of your property and personnel.  ",
  },
  {
    id: "cfd_4",

    qus: "Do you have a proven track record of success in the security and investigation industry?",
    ans: "Yes, our security guards are rigorously trained and licensed, exceeding industry standards. They are equipped to handle a variety of situations and ensure the safety of your property and personnel.  ",
  },
];

export const coreValues = [
  {
    id: "cv_1",
    title: "Integrity",
    description:
      "Upholding the highest ethical standards in all our operations.",
  },
  {
    id: "cv_2",

    title: "Reliability",
    description: "Providing consistent, dependable services 24/7, every day.",
  },
  {
    id: "cv_3",

    title: "Innovation",
    description:
      "Leveraging cutting-edge technology for advanced security solutions.",
  },
  {
    id: "cv_4",

    title: "Customer Focus",
    description:
      "Prioritizing client needs with personalized, exceptional service.",
  },
  {
    id: "cv_5",

    title: "Professionalism",
    description:
      " Delivering services with efficiency, respect, and expertise.",
  },
];

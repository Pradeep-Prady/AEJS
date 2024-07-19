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
        path: "/security-services/armed-pso",
        icon: service_armed_pso,
        image: serviceImage4,
      },
      {
        id: "nbd_3_2",
        title: "Security Guard",
        path: "/security-services/security-guard",
        image: serviceImage4,
        icon: service_security_guard,
      },
      {
        id: "nbd_3_3",
        title: "Security Supervisor",
        path: "/security-services/security-supervisor",
        icon: service_security_supervisor,
        image: serviceImage4,
      },
      {
        id: "nbd_3_4",
        title: "Gunman",
        path: "/security-services/gunman",
        icon: service_gunman,
        image: serviceImage4,
      },
      {
        id: "nbd_3_5",
        title: "ASO",
        path: "/security-services/aso",
        icon: service_armed_security_officer,
        image: serviceImage4,
      },
      {
        id: "nbd_3_6",
        title: "Bouncer",
        path: "/security-services/bouncer",
        icon: service_bouncer,
        image: serviceImage4,
      },
      {
        id: "nbd_3_7",
        title: "Fire Safety Expert",
        path: "/security-services/fire-safety-expert",
        icon: service_fire_safety_expert,
        image: serviceImage4,
      },
      {
        id: "nbd_3_8",
        title: "Surveillance Room",
        path: "/security-services/surveillance-room",
        icon: service_surveillance_room,
        image: serviceImage4,
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
        path: "/detective-services/detective-agencies-for-cyber-crime",
        image: serviceImage3,
        icon: detective_agencies_for_cyber_crime,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_2",
        title: "Detective agencies for Matrimonial Screening",
        path: "/detective-services/detective-agencies-for-matrimonial-screening",
        image: serviceImage3,
        icon: detective_agencies_for_matrimonial_screening,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_3",
        title: "Personal Investigation",
        path: "/detective-services/personal-investigation",
        image: serviceImage3,
        icon: personal_investigation,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_4",
        title: "Corporate Investigation",
        path: "/detective-services/corporate-investigation",
        image: serviceImage3,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
        icon: corporate_investigation,
      },
      {
        id: "nbd_4_5",
        title: "Forensic Investigation",
        path: "/detective-services/forensic-investigation",
        image: serviceImage3,
        icon: forensic_investigation,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_4_6",
        title: "Cybercrime Investgation",
        path: "/detective-services/cybercrime-investgation",
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
        path: "/manpower-consultancy/it-labour",
        icon: it_labour,
        image: serviceImage3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_5_2",
        title: "Skilled labour",
        path: "/manpower-consultancy/skilled-labour",
        image: serviceImage3,
        icon: skilled_labour,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed odio id turpis laoreet pharetra. Cras vestibulum imperdiet tellus, in pulvinar ex viverra nec. Suspendisse lobortis erat nec orci vehicula vestibulum. ",
      },
      {
        id: "nbd_5_3",
        title: "Unskilled labour",
        path: "/manpower-consultancy/unskilled-labour",
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
        path: "/house-cleaning/deep-cleaning",
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
      "We Secure Your World. We Find the Truth. We Provide the People. At AEJS Info Services, we offer a comprehensive suite of services designed to give you complete peace of mind.",
    datas: [
      {
        title: "Security Solutions",
        description:
          "Our highly trained security guards, security consultants, and cybersecurity experts work together to keep you safe – from physical threats to digital breaches.",
      },
      {
        title: "Investigative Expertise",
        description:
          "Our discreet and experienced detectives handle a wide range of investigations, uncovering the truth in matters of infidelity, fraud, missing persons, and more.  We also offer advanced digital forensics capabilities.",
      },
      {
        title: "Manpower Services",
        description:
          "Need temporary or permanent staffing solutions?  We connect you with qualified personnel for a variety of needs, ensuring you have the right people in the right place.",
      },
    ],
  },
  {
    title: "Who We Are?",
    subTitle: "Your Trusted Partner for Security, Investigations, and People..",
    content:
      "We Secure Your World. We Find the Truth. We Provide the People. At AEJS Info Services, we offer a comprehensive suite of services designed to give you complete peace of mind.",
    datas: [
      {
        title: "Security Solutions",
        description:
          "Our highly trained security guards, security consultants, and cybersecurity experts work together to keep you safe – from physical threats to digital breaches.",
      },
      {
        title: "Investigative Expertise",
        description:
          "Our discreet and experienced detectives handle a wide range of investigations, uncovering the truth in matters of infidelity, fraud, missing persons, and more.  We also offer advanced digital forensics capabilities.",
      },
      {
        title: "Manpower Services",
        description:
          "Need temporary or permanent staffing solutions?  We connect you with qualified personnel for a variety of needs, ensuring you have the right people in the right place.",
      },
    ],
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
    title: "Integrity1",
    description: "Acting with honesty and transparency in all dealings.",
  },
  {
    id: "cv_2",

    title: "Integrity2",
    description: "Acting with honesty and transparency in all dealings.",
  },
  {
    id: "cv_3",

    title: "Integrity3",
    description: "Acting with honesty and transparency in all dealings.",
  },
  {
    id: "cv_4",

    title: "Integrity4",
    description: "Acting with honesty and transparency in all dealings.",
  },
  {
    id: "cv_5",

    title: "Integrity5",
    description: "Acting with honesty and transparency in all dealings.",
  },
];

import securityBg from "/public/assets/security services/security-bg.png";
import serviceImage4 from "/public/assets/security services/service-image.png";
import serviceImage3 from "/public/assets/security services/service-image-3.png";
import armedpso_banner from "/public/assets/security services/armed-pso/banner.png";

import armedpso_person_1 from "/public/assets/security services/armed-pso/persons (1).png";
import armedpso_person_2 from "/public/assets/security services/armed-pso/persons (2).png";
import armedpso_person_3 from "/public/assets/security services/armed-pso/persons (3).png";
import armedpso_person_4 from "/public/assets/security services/armed-pso/persons (4).png";

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

export const services = [
  {
    id: "security-services",
    name: "Security Services",
    subTitle: "Protecting Your World",
    banner: securityBg,
    mainContent: {
      title: "Why AEJS for security solutions?",
      subTitle: "Our Security Solutions",
      content:
        "Our team of highly trained security professionals works tirelessly to safeguard your assets and personnel. We offer a range of services, including",
      datas: [
        {
          title: "On-site Security Guards",
          description: "Deter crime and maintain a visible presence.",
        },
        {
          title: "Security Consulting",
          description:
            "Develop customized security plans to address your specific needs.",
        },
        {
          title: "Advanced Security Systems",
          description:
            " Install and monitor intrusion detection, access control, and video surveillance systems.",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your data and networks from cyber threats.",
        },
      ],
    },
    subMenu: [
      {
        id: "armed-pso",
        title: "Armed PSO",
        path: "/security-services/armed-pso",
        image: serviceImage4,
        subTitle: "Security services",
        banner: armedpso_banner,
        icon: service_armed_pso,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "security-guard",
        title: "Security Guard",
        path: "/security-services/security-guard",
        subTitle: "Security services",
        banner: armedpso_banner,
        image: serviceImage4,
        icon: service_security_guard,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "security-supervisor",
        title: "Security Supervisor",
        path: "/security-services/security-supervisor",
        image: serviceImage4,
        icon: service_security_supervisor,

        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "gunman",
        title: "Gunman",
        path: "/security-services/gunman",
        image: serviceImage4,
        icon: service_gunman,

        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "aso",
        title: "ASO",
        path: "/security-services/aso",
        image: serviceImage4,
        icon: service_armed_security_officer,
        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "bouncer",
        title: "Bouncer",
        path: "/security-services/bouncer",
        image: serviceImage4,
        icon: service_bouncer,
        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "fire-safety-expert",
        title: "Fire Safety Expert",
        path: "/security-services/fire-safety-expert",
        image: serviceImage4,
        icon: service_fire_safety_expert,
        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "surveillance-room",
        title: "Surveillance Room",
        path: "/security-services/surveillance-room",
        image: serviceImage4,
        icon: service_surveillance_room,
        subTitle: "Security services",
        banner: armedpso_banner,

        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
    ],
  },
  {
    id: "detective-services",

    name: "Detective Services",
    subTitle: "Protecting Your World",
    banner: securityBg,
    mainContent: {
      title: "Why AEJS for security solutions?",
      subTitle: "Our Security Solutions",
      content:
        "Our team of highly trained security professionals works tirelessly to safeguard your assets and personnel. We offer a range of services, including",
      datas: [
        {
          title: "On-site Security Guards",
          description: "Deter crime and maintain a visible presence.",
        },
        {
          title: "Security Consulting",
          description:
            "Develop customized security plans to address your specific needs.",
        },
        {
          title: "Advanced Security Systems",
          description:
            " Install and monitor intrusion detection, access control, and video surveillance systems.",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your data and networks from cyber threats.",
        },
      ],
    },
    subMenu: [
      {
        id: "detective-agencies-for-cyber-crime",
        title: "Detective agencies for Cyber Crime",

        path: "/detective-services/detective-agencies-for-cyber-crime",

        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: detective_agencies_for_cyber_crime,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },

      {
        id: "detective-agencies-for-matrimonial-screening",
        title: "Detective agencies for Matrimonial Screening",

        path: "/detective-services/detective-agencies-for-matrimonial-screening",

        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: detective_agencies_for_matrimonial_screening,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },

      {
        id: "personal-investigation",
        title: "Personal Investigation",
        path: "/detective-services/personal-investigation",
        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: personal_investigation,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },

      {
        id: "corporate-investigation",
        title: "Corporate Investigation",
        path: "/detective-services/corporate-investigation",
        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: corporate_investigation,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },

      {
        id: "forensic-investigation",
        title: "Forensic Investigation",
        path: "/detective-services/forensic-investigation",
        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: forensic_investigation,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },

      {
        id: "cybercrime-investgation",
        title: "Cybercrime Investgation",
        path: "/detective-services/cybercrime-investgation",
        image: serviceImage4,

        subTitle: "Detective Services",
        banner: armedpso_banner,
        icon: cybercrime_investgation,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
    ],
  },
  {
    id: "manpower-consultancy",
    name: "Manpower Consultancy",
    subTitle: "Protecting Your World",
    banner: securityBg,
    mainContent: {
      title: "Why AEJS for security solutions?",
      subTitle: "Our Security Solutions",
      content:
        "Our team of highly trained security professionals works tirelessly to safeguard your assets and personnel. We offer a range of services, including",
      datas: [
        {
          title: "On-site Security Guards",
          description: "Deter crime and maintain a visible presence.",
        },
        {
          title: "Security Consulting",
          description:
            "Develop customized security plans to address your specific needs.",
        },
        {
          title: "Advanced Security Systems",
          description:
            " Install and monitor intrusion detection, access control, and video surveillance systems.",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your data and networks from cyber threats.",
        },
      ],
    },
    subMenu: [
      {
        id: "it-labour",
        title: "IT labour",
        path: "/manpower-consultancy/it-labour",
        image: serviceImage4,

        subTitle: "Manpower Consultancy",
        banner: armedpso_banner,
        icon: it_labour,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "skilled-labour",
        title: "Skilled labour",
        path: "/manpower-consultancy/skilled-labour",
        image: serviceImage4,

        subTitle: "Manpower Consultancy",
        banner: armedpso_banner,
        icon: skilled_labour,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
      {
        id: "unskilled-labour",
        title: "Unskilled labour",
        path: "/manpower-consultancy/unskilled-labour",
        image: serviceImage4,

        subTitle: "Manpower Consultancy",
        banner: armedpso_banner,
        icon: unskilled_labour,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
    ],
  },
  {
    id: "house-cleaning",
    name: "House Cleaning",
    subTitle: "Protecting Your House",
    banner: securityBg,
    mainContent: {
      title: "Why AEJS for security solutions?",
      subTitle: "Our Security Solutions",
      content:
        "Our team of highly trained security professionals works tirelessly to safeguard your assets and personnel. We offer a range of services, including",
      datas: [
        {
          title: "On-site Security Guards",
          description: "Deter crime and maintain a visible presence.",
        },
        {
          title: "Security Consulting",
          description:
            "Develop customized security plans to address your specific needs.",
        },
        {
          title: "Advanced Security Systems",
          description:
            " Install and monitor intrusion detection, access control, and video surveillance systems.",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your data and networks from cyber threats.",
        },
      ],
    },
    subMenu: [
      {
        id: "deep-cleaning",
        title: "Deep Cleaning",
        path: "/house-cleaning/deep-cleaning",
        image: serviceImage4,

        subTitle: "Deep Cleaning ",
        banner: armedpso_banner,
        icon: deep_cleaning,
        descriptionOne:
          "If you're looking to ensure your safety and well-being are in good hands, this team has got you covered. From assessing potential threats to planning out top-notch security measures, they've got all the bases covered. In case of emergencies, you can trust them to respond promptly and effectively. Plus, they always keep a tight lid on things, making sure to handle everything with utmost professionalism for your peace of mind.",
        descriptionTwo:
          "In the realm of personal security, the primary role of a Personal Security Officer (PSO) is to ensure the safety and protection of their principal from potential threats. Whether working independently or as part of a cohesive team, a PSO is equipped to handle a variety of security scenarios. These highly skilled professionals extend their services to individuals and corporate figures, offering security coverage as needed, be it temporary or on a continuous basis. The core duty of our dedicated Personal Security Officer is to uphold a round-the-clock vigilance, shielding their clients from any forms of danger and swiftly mitigating any risks that may arise.",
        images: [
          armedpso_person_1,
          armedpso_person_2,
          armedpso_person_3,
          armedpso_person_4,
        ],
      },
    ],
  },
];

import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { v4 } from "uuid";
import { formatDate } from "@/utils/formatDate";

export const heroHome = {
  title: "Boost your Software team with LATAM talent.",
  subtitle: "Staff augmentation made easy.",
  text: "Whether you need one developer or an entire team, we have the expertise to find the right fit for your project. Plus, with our flexible engagement models, you can choose the level of support that works best for your needs.",
  buttonText: "Get in Touch",
  logo: "/image_2.png",
  customClasses: {
    customClass: "hero--home",
    customContent: "hero--home__content",
  },
};

export const serviceHome = {
  title: "SERVICES",
  subtitle: "Empower your business with our software development services.",
  text: "Our expert team delivers solutions tailored to your needs, on time and on budget.",
  image: "/services_image.png",
};

export const letUsHome = {
  title: "LET US HANDLE THE REST",
  subtitle:
    "Our model is specifically crafted to simplify your life, so you can focus solely on developing your software product.",
  text: "We take care of everything else, ensuring that your team has the necessary support and resources to successfully complete your projects. With us as your partner, you can rest easy knowing that we’ve got your back and are committed to helping you achieve your business goals.",
  text_secondary:
    "By ensuring that your staff augmentation service provider is responsible for these key areas, you can rest assured that you are getting the best possible value for your investment, and that you are well-positioned to achieve your business goals.",
  image: "/circle.png",
};

export const letsBuildHome = {
  title: "LET’S BUILD YOUR REMOTE TEAM IN 3 EASY STEPS",
  subtitle:
    "Our success rate for converting trials into hires stands at an impressive 98%",
};

export const reviewsHome = {
  title: "REVIEWS",
  subtitle: "Insights and Ideas",
  text: "We take care of everything else, ensuring that your team has the necessary support and resources to successfully complete your projects.",
};

export const blogHome = {
  title: "BLOG",
  subtitle: "Insights and Trends",
};

export const contactUs = {
  title: "CONTACT US",
  subtitle: "Let’s Connect!",
  text: "Transform your business with our software development services. Our expert team delivers tailored solutions that exceed your expectations. ",
  secondaryText: "Fill out the contact form below to get started.",
  fields: [
    {
      id: v4(),
      placeholder: "Name",
      type: "text",
      name: "name",
      customClass: "input input--contact",
    },
    {
      id: v4(),
      placeholder: "Email",
      type: "text",
      name: "email",
      customClass: "input input--contact",
    },
    {
      id: v4(),
      placeholder: "Company",
      type: "text",
      name: "company",
      customClass: "input input--contact",
    },
    {
      id: v4(),
      placeholder: "Phone Number",
      type: "tel",
      name: "phoneNumber",
      customClass: "input input--contact",
    },
    {
      id: v4(),
      placeholder: "Message",
      type: "text",
      name: "message",
      customClass: "input input--contact input--contact-message",
      isTextarea: true,
    },
  ],
  initialValues: {
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  },
};

export const footer = {
  menu: [
    { id: v4(), text: "HOME", link: "/" },
    { id: v4(), text: "SOFTWARE DEVELOPMEMT", link: "/" },
    { id: v4(), text: "HOW WE WORK", link: "/" },
    { id: v4(), text: "ABOUT US", link: "/" },
  ],

  icons: [
    <FaFacebookSquare key={v4()} />,
    <FaLinkedin key={v4()} />,
    <FaSquareXTwitter key={v4()} />,
  ],

  contacts: [
    {
      id: v4(),
      icon: <FaMapMarkerAlt className="footer__contacts-icons" />,
      link: "/",
      text: "Stay up to date with the latest news, announcements and articles.",
    },
    {
      id: v4(),
      icon: <FaPhoneAlt className="footer__contacts-icons" />,
      link: "tel:+1 888 888888",
      text: "+1 888 888888",
    },
    {
      id: v4(),
      icon: <FaEnvelope className="footer__contacts-icons" />,
      link: "mailto:email@smbssolutions.com",
      text: "email@smbssolutions.com",
    },
  ],

  subscribeTitle: "Sign up to our newsletter",
  subscribeText:
    "Stay up to date with the latest news, announcements and articles.",
  copyright: "© 2023 SMBS. All rights reserved ",
  PrivacyPolicy: "Privacy policy",
};

export const heroAbout = {
  title:
    "We connect the LATAM's top engineers with the world's top organizations.",
  text: "Welcome to SMBS, where success is our commitment. We bring together top-tier engineers, curated from the top 1% of developers, to fuel your growth.",
  buttonText: "Get in Touch",
  customClasses: {
    customClass: "backdrop backdrop--hero hero--about",
    customContent: "hero--about__content",
    customTitle: "hero--about__title",
    customText: "hero--about__text",
    customDescription: "hero--about__description",
  },
};
export const testimonialsAbout = {
  title: "TESTIMONIALS",
  subtitle: "Our Success Stories in Client Words",
  text: "We take care of everything else, ensuring that you team has the neccesary support and resources to successfully complete your projects",
};

export const about = {
  title: "ABOUT US",
  subtitle: "Empowering Success, Fostering Happiness",
  text: "At SMBS, our mission is twofold: to empower businesses through innovative software development and staff augmentation services, and to create a vibrant and happy workplace for our talented team. We strive to seamlessly integrate top-tier talent into organizations, fostering innovation and driving success. Simultaneously, we are committed to nurturing a positive work environment that promotes collaboration, growth, and employee satisfaction. Through expertise and a passion for excellence, we aim to elevate businesses to new heights of productivity and growth while ensuring our team thrives in a happy workplace.",
};

export const leadershipAbout = {
  title: "MEET OUR LEADERSHIP TEAM",
  subtitle: "The Faces Behind SMBS Success",
  members: [
    {
      id: v4(),
      image: "/marielena.png",
      width: 306,
      height: 306,
      alt: "CO-founder, CEO",
      position: "CO-founder, CEO",
      name: "Marielena Robelo",
    },
    {
      id: v4(),
      image: "/tony.png",
      width: 306,
      height: 306,
      alt: "CO-Founder, CTO",
      position: "CO-Founder, CTO",
      name: "Tony Lopez",
    },
    {
      id: v4(),
      image: "/bluey.png",
      width: 306,
      height: 306,
      alt: "Chief Happiness Officer",
      position: "Chief Happiness Officer",
      name: "Bluey",
    },
    {
      id: v4(),
      image: "/cinthia.png",
      width: 306,
      height: 306,
      alt: "People Experience Mgr",
      position: "People Experience Mgr",
      name: "Cinthia Robelo",
    },
    {
      id: v4(),
      image: "/gershell.png",
      width: 306,
      height: 306,
      alt: "Engineering Manager",
      position: "Engineering Manager",
      name: "Gershell Lopez",
    },
    {
      id: v4(),
      image: "/lucky.png",
      width: 306,
      height: 306,
      alt: "Chief Cuddles Officer",
      position: "Chief Cuddles Officer",
      name: "Lucky",
    },
    {
      id: v4(),
      image: "/damaris.png",
      width: 306,
      height: 306,
      alt: "People Development",
      position: "People Development",
      name: "Damaris Blandón",
    },
    {
      id: v4(),
      image: "/robert.png",
      width: 306,
      height: 306,
      alt: "Tech Lead",
      position: "Tech Lead",
      name: "Robert  Samuel",
    },
    {
      id: v4(),
      image: "/elias.png",
      width: 306,
      height: 306,
      alt: "Communication Strategist",
      position: "Communication Strategist",
      name: "Elías Úbeda",
    },
  ],
};

export const heroAugmentation = {
  title: "Scale your in-house team with the best LATAM Engineers.",
  subtitle:
    "Get the talent you need, when you need it, and watch your projects thrive.",
  buttonText: "Extend Your Team Now",
  customClasses: {
    customClass: "hero--augmentation",
    customContainer: "hero--augmentation__container",
    customContent: "hero--augmentation__content",
    customDescription: "hero--augmentation__description",
    customTitle: "hero--augmentation__title",
    customSubtitle: "hero--augmentation__subtitle",
    customButton: "hero--augmentation__button",
  },
  points: [v4(), v4(), v4(), v4(), v4(), v4(), v4()],
};

export const clientsAugmentation = {
  clients: [
    {
      id: v4(),
      stack: [
        { id: v4(), text: "Docker" },
        { id: v4(), text: "PHP" },
        { id: v4(), text: "Phyton" },
        { id: v4(), text: "TypeScript" },
        { id: v4(), text: "Phyton" },
      ],
      direction: "left",
      speed: 20,
    },

    {
      id: v4(),
      stack: [
        { id: v4(), text: "Kotlin" },
        { id: v4(), text: "TypeScript" },
        { id: v4(), text: "Docker" },
        { id: v4(), text: "Kotlin" },
        { id: v4(), text: "Aws" },
      ],
      direction: "right",
      speed: 30,
    },
  ],

  text: "Our staff augmentation service seamlessly integrates world-class developers into your in-house team. With this collaborative approach, our skilled professionals work side by side with your existing team, enhancing productivity and driving project success.",
};

export const outstandingAugmentation = {
  title: "BUILD OUTSTANDING REMOTE TEAMS, ON DEMAND!",
  subtitle: "Experience Seamless Integration, Expertise, and Growth",
  perks: [
    {
      id: v4(),
      title: "Seamless Collaboration",
      description:
        "Working with the best LATAM professionals minimizes communication barriers and facilitates real-time coordination with your existing team.",
    },
    {
      id: v4(),
      title: "Flexible Scalability",
      description:
        "Easily adjust your team’s size to match changing project needs, all while maintaining flexibility with adaptable contracts and monthly billing.",
    },
    {
      id: v4(),
      title: "Agile Talent Acquisition",
      description:
        "Quickly onboard experienced engineers. Bypass the time-consuming hiring process and have skilled engineers contributing to your project in a record time frame.",
    },
    {
      id: v4(),
      title: "Reduced Administrative Overhead",
      description:
        "Minimize administrative tasks related to hiring, onboarding, and HR management. This allows you to focus more on your core business functions while we handle the logistics.",
    },
  ],
};

export const letsBuildAugmentation = {
  title: "LET’S BUILD YOUR REMOTE TEAM IN 3 EASY STEPS",
  subtitle:
    "Our success rate for converting trials into hires stands at an impressive 98%",
  customClasses: {
    customClass: "build--augmentation",
    customTitle: "build--augmentation__title",
    customSubtitle: "build--augmentation__subtitle",
    customPerks: "build--augmentation__perks",
    customButton: "build--augmentation__button",
  },
};

export const industryAugmentation = {
  title: "INDUSTRY INSIGHTS",
  subtitle: "Learn more about",
  posts: [
    {
      id: v4(),
      image: "/post_image_industry.png",
      altPost: "post",
      author: "Author’s Name",
      date: formatDate(new Date()),
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      text: "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      tags: [
        { id: v4(), text: "Product" },
        { id: v4(), text: "Research" },
        { id: v4(), text: "Frameworks" },
      ],
    },
    {
      id: v4(),
      image: "/post_image_industry.png",
      altPost: "post",
      author: "Author’s Name",
      date: formatDate(new Date()),
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      text: "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      tags: [
        { id: v4(), text: "Product" },
        { id: v4(), text: "Research" },
        { id: v4(), text: "Frameworks" },
      ],
    },
    {
      id: v4(),
      image: "/post_image_industry.png",
      altPost: "post",
      author: "Author’s Name",
      date: formatDate(new Date()),
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      text: "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      tags: [
        { id: v4(), text: "Product" },
        { id: v4(), text: "Research" },
        { id: v4(), text: "Frameworks" },
      ],
    },
  ],
};

export const heroDedicated = {
  title:
    "Empower Your Projects with SMBS: Seamless Integration, Exceptional Delivery.",
  text: "Achieve outstanding outcomes with precision and agility using our dedicated software teams. Fully integrated and aligned with your objectives, we ensure your projects are executed flawlessly from conception to completion.",
  buttonText: "Extend Your Team Now",
  image: "/dedicated-hero.png",

  customClasses: {
    customClass: "hero--dedicated",
    customContent: "hero--dedicated__content",
    customTitle: "hero--dedicated__title",
    customText: "hero--dedicated__text",
    customButton: "hero--dedicated__button",
  },
};

export const clientsDedicated = {
  clients: [
    {
      id: v4(),
      stack: [
        { id: v4(), text: "Docker" },
        { id: v4(), text: "PHP" },
        { id: v4(), text: "Phyton" },
        { id: v4(), text: "TypeScript" },
        { id: v4(), text: "Phyton" },
      ],
      direction: "left",
      speed: 20,
    },

    {
      id: v4(),
      stack: [
        { id: v4(), text: "Kotlin" },
        { id: v4(), text: "TypeScript" },
        { id: v4(), text: "Docker" },
        { id: v4(), text: "Kotlin" },
        { id: v4(), text: "Aws" },
      ],
      direction: "right",
      speed: 30,
    },
  ],

  text: "At SMBS, we understand that the backbone of any successful software project is a robust and agile team. Our Dedicated Software Development Teams are the perfect example of synergy and expertise, tailored to bring your software visions to fruition. Composed of seasoned developers, DevOps engineers, QA specialists, UX designers, and project managers, we assemble a constellation of talent that aligns precisely with your project’s needs.",
};

export const letsBuildDedicated = {
  title: "LET’S BUILD YOUR REMOTE TEAM IN 3 EASY STEPS",
  subtitle:
    "Our success rate for converting trials into hires stands at an impressive 98%",
  customClasses: {
    customClass: "build--dedicated",
    customTitle: "build--dedicated__title",
    customSubtitle: "build--dedicated__subtitle",
    customPerks: "build--dedicated__perks",
    customButton: "build--dedicated__button",
  },

  perks: [
    {
      id: v4(),
      number: "01",
      image: "/image5.png",
      width: 260,
      height: 5,
      alt: "arrow",
      title: "DISCOVERY SESSION",
      text: "We’ll delve into your team’s structure, define success criteria, establish timelines and budgets, and pinpoint the necessary skill sets. We align our services with your needs for a successful collaboration.",
    },
    {
      id: v4(),
      number: "02",
      image: "/image5.png",
      width: 260,
      height: 5,
      alt: "arrow",
      title: "YOUR IDEAL TEAM, ON DEMAND",
      text: "Say goodbye to the hassle of team assembly. At SMBS, we expedite the process of crafting the perfect team for your project. We swiftly curate a team that aligns precisely with your requirements, sparing you the complexities of recruitment.",
    },
    {
      id: v4(),
      number: "03",
      title: "SEAMLESS ONBOARDING, INSTANT PRODUCTIVITY",
      text: "We kick off the engagement with a trial period where you can test the waters with your developer. Payment is made only upon satisfaction, allowing you to verify the perfect fit before formal engagement.",
    },
  ],
};

export const heroBlogs = {
  title: "Stay Ahead of the Curve with Our Blog",
  text: "Discover insights tailored for both strategic minds and technical experts on the SMBS Blog. From industry trends to coding tips, stay informed and inspired to shape the future of software development. Join us as we navigate the dynamic landscape together.",
  buttonText: "Get in touch",
  customClasses: {
    customClass: "backdrop backdrop--hero backdrop--hero-blogs hero--blogs",
    customContent: "hero--blogs__content",
    customTitle: "hero--blogs__title",
    customText: "hero--blogs__text",
    customDescription: "hero--blogs__description",
  },
};

export const BlogsPost = {
  TOPPOSTS: [
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
  ],
  postsRight: [
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",

      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",

      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
  ],

  postsDown: [
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",

      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
    {
      id: v4(),
      link: "blog",
      title:
        "What is staff augmentation, and how does it differ from outsourcing?",
      image: {
        src: "/post_image_industry.png",
        alt: "some alt description",
      },
      description:
        "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
      author: "Author’s Name",
      category: [{ id: v4(), text: "Product" }],
    },
  ],

  postDouble: {
    image: "/post_image_industry.png",
    alt: "some alt description",
    link: "What is staff augmentation, and how does it differ from outsourcing?",
    informations: [
      {
        id: v4(),

        title:
          "What is staff augmentation, and how does it differ from outsourcing?",
        description:
          "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
        author: "Author’s Name",
        category: [{ id: v4(), text: "Product" }],
      },
      {
        id: v4(),
        title:
          "What is staff augmentation, and how does it differ from outsourcing?",
        description:
          "Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec orci gravida accumsan a sed odio.",
        author: "Author’s Name",
        category: [{ id: v4(), text: "Product" }],
      },
    ],
  },
};

export const newsletterData = {
  title: "STAY UP TO DATE",
  description: "Business, technology, and innovation insights",
  initialValues: {
    email: "",
    checkPolicy: true,
  },
  label: "Your e-mail address",
  checkText: "By subscribing I accept the ",
  policy: " Privacy Policy",
};

export const heroCareers = {
  title: "Invest in Your Future: Join Our Team",
  text: "We believe in the power of a happy workplace. If you're passionate about software development, innovation, and collaborative success, you're in the right place. Explore our career opportunities and embark on a journey where your skills, creativity, and dedication are celebrated.",
  buttonText: "Apply Now",
  image: "/careers-hero.png",

  customClasses: {
    customClass: "hero--careers",
    customContent: "hero--careers__content",
    customTitle: "hero--careers__title",
    customText: "hero--careers__text",
    customButton: "hero--careers__button",
  },
};

export const workCareers = {
  title: "WHY WORK WITH US?",
  subtitle:
    "Join us for a joyful and innovative work environment. Let's Shape the Future Together",
  services: [
    {
      id: v4(),
      image: "/work_1_icon.png",
      title: "We make work gratifying in more than one way",
      description:
        "We really go beyond the basics and keep finding ways to make work <br /> —Latam or on-site— <br /> as fun as possible.",
    },
    {
      id: v4(),
      image: "/work_2_icon.png",
      title: "We care for our people",
      description:
        "We guarantee that everyone’s as happy as possible from the moment someone joins the team to the day they leave the company.",
    },
    {
      id: v4(),
      image: "/work_3_icon.png",
      title: "We believe in autonomy and empowerment",
      description:
        "Our Devs are exposed to project discussions and have direct interaction with peers on the client side. This type of exposure is key for our team members’ growth.",
    },
    {
      id: v4(),
      image: "/work_4_icon.png",
      title: "We partner with great clients",
      description:
        "We can be selective about which clients we work with. We want to make sure they’re great brands with interesting challenges. We want to know there’s a cultural fit that leads to productive and respectful collaboration.",
    },
  ],
};

export const careersRecruitment = {
  title: "RECRUITMENT PROCESS",
  subtitle: "Your Path to Success at SMBS",
  steps: [
    {
      id: v4(),
      number: "1",
      title: "Initial Screening",
      text: "A member of our team will reach out to gauge if you are a technical and cultural match for the role.",
    },
    {
      id: v4(),
      number: "2",
      title: "Technical Interviews",
      text: "We want to get to know you better by learning about your achievements and technical skills in more details.",
    },
    {
      id: v4(),
      number: "3",
      title: "Assessment",
      text: "This is meant to give you an idea of the type of work that will be asked of you.",
    },
    {
      id: v4(),
      number: "4",
      title: "Final Interview",
      text: "Meet with a member of our leadership team.",
    },
    {
      id: v4(),
      number: "5",
      title: "Contract Signing and Onboarding",
    },
  ],

  customClasses: {
    customClass: "recruitment",
    customTitle: "recruitment__title",
    customSubtitle: "recruitment__subtitle",
    customPerks: "recruitment__steps",
    customButton: "d-none",
  },
};

export const reviewsCareers = {
  title: "TEAM REVIEWS",
  subtitle: "Here's what our team members have to say about life at SMBS",
  text: "We're more than just colleagues — we're innovators, creators, and trailblazers. Each voice is heard, each idea valued, and each contribution celebrated.",
  cards: [
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
    {
      id: v4(),
      name: "Luis F.",
      position: "Project Leader",
      description:
        "“At SMBS, I've found unparalleled professional growth, a fantastic work environment, and access to the latest in software development technology. A truly rewarding experience!”",
      image: "/glassdoor.png",
      link: "https://www.glassdoor.com/Overview/Working-at-Smart-Business-Solutions-NJ-EI_IE7698126.11,38.htm",
    },
  ],
  responsive: {
    0: {
      slidesPerView: 1.193,
      spaceBetween: 25,
    },
    576: {
      slidesPerView: 1.35,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 2.62,
      spaceBetween: 25,
    },
    1800: {
      slidesPerView: 3.5,
    },
  },
};

export const benefitsCareers = {
  title: "PERKS & BENEFITS",
  subtitle: "WORK AND LIFE SHOULD FIT TOGETHER",
  cards: [
    {
      id: v4(),
      image: "/entertainment.png",
      description: "Entertainment spaces",
    },
    {
      id: v4(),
      image: "/stocked_kitchen.png",
      description: "Fully Stocked Kitchen",
    },
    {
      id: v4(),
      image: "/remote_work.png",
      description: "Work from home",
    },
    {
      id: v4(),
      image: "/time_off.png",
      description: "Time off",
    },
    {
      id: v4(),
      image: "/birthdays.png",
      description: "Birthdays",
    },
    {
      id: v4(),
      image: "/career_advancement.png",
      description: "Career Advancement",
    },
    {
      id: v4(),
      image: "/comfortable_work.png",
      description: "Comfortable work environment",
    },
    {
      id: v4(),
      image: "/vision_benefits.png",
      description: "Vision Benefits",
    },
  ],
};

export const openPositions = {
  title: "Opening List",
  subtitle: "Interested in joining the SMBS team?",
  positions: [
    "all",
    "web development",
    "mobile development",
    "QA",
    "PM/PO",
    "UX/UI",
    "devops",
    "operations",
  ],
  offers: [
    {
      id: v4(),
      title: "Senior Frontend Developer",
      experience: "3+ years of experience",
      englishLevel: "Intermediate English",
      location: "Latam",
      description:
        "SMBS has an immediate opening for a React Developer to join our engineering team! Are you a front-end developer, involved with human centric interface development and developing quality code? Do you desire to make a difference and have an impact through the work that you create? If so, come join SMBS! You’ll work to develop applications in an Agile development environment.",
      competencies: [
        "Bachelor’s Degree in Computer Science or a related field.",
        "3-5 years of professional experience using React.",
        "Experience with state management libraries such as Redux.",
        "Experience with Next.js and Typescript.",
        "Experience with Jest/Enzyme or equivalent tools.",
        "Expertise using Hooks, including custom hooks",
        "Experience with Webpack.",
        "Professional experience with Test Driven Development and performing code reviews.",
        "Experience using version control systems like GIT.",
        "Experience working in an agile environment (Scrum preferred) as part of a cross-functional team.",
        "Strong communication skills.",
        "Fluent in English.",
      ],
      responsibilities: [
        "Create effectively tested, re-usable, and efficient JavaScript and TypeScript code.",
        "Develop user interfaces.",
        "Support continuous improvement by staying",
        "up-to-date on front-end technology.",
        "Work collaboratively with a team in an Agile environment.",
      ],
    },
    {
      id: v4(),
      title: "iOS Developer",
      experience: "3+ years of experience",
      englishLevel: "Intermediate English",
      location: "Latam",
      description:
        "SMBS has an immediate opening for a React Developer to join our engineering team! Are you a front-end developer, involved with human centric interface development and developing quality code? Do you desire to make a difference and have an impact through the work that you create? If so, come join SMBS! You’ll work to develop applications in an Agile development environment.",
      competencies: [
        "Bachelor’s Degree in Computer Science or a related field.",
        "3-5 years of professional experience using React.",
        "Experience with state management libraries such as Redux.",
        "Experience with Next.js and Typescript.",
        "Experience with Jest/Enzyme or equivalent tools.",
        "Expertise using Hooks, including custom hooks",
        "Experience with Webpack.",
        "Professional experience with Test Driven Development and performing code reviews.",
        "Experience using version control systems like GIT.",
        "Experience working in an agile environment (Scrum preferred) as part of a cross-functional team.",
        "Strong communication skills.",
        "Fluent in English.",
      ],
      responsibilities: [
        "Create effectively tested, re-usable, and efficient JavaScript and TypeScript code.",
        "Develop user interfaces.",
        "Support continuous improvement by staying",
        "up-to-date on front-end technology.",
        "Work collaboratively with a team in an Agile environment.",
      ],
    },
    {
      id: v4(),
      title: "iOS Developer",
      experience: "3+ years of experience",
      englishLevel: "Intermediate English",
      location: "Latam",
      description:
        "SMBS has an immediate opening for a React Developer to join our engineering team! Are you a front-end developer, involved with human centric interface development and developing quality code? Do you desire to make a difference and have an impact through the work that you create? If so, come join SMBS! You’ll work to develop applications in an Agile development environment.",
      competencies: [
        "Bachelor’s Degree in Computer Science or a related field.",
        "3-5 years of professional experience using React.",
        "Experience with state management libraries such as Redux.",
        "Experience with Next.js and Typescript.",
        "Experience with Jest/Enzyme or equivalent tools.",
        "Expertise using Hooks, including custom hooks",
        "Experience with Webpack.",
        "Professional experience with Test Driven Development and performing code reviews.",
        "Experience using version control systems like GIT.",
        "Experience working in an agile environment (Scrum preferred) as part of a cross-functional team.",
        "Strong communication skills.",
        "Fluent in English.",
      ],
      responsibilities: [
        "Create effectively tested, re-usable, and efficient JavaScript and TypeScript code.",
        "Develop user interfaces.",
        "Support continuous improvement by staying",
        "up-to-date on front-end technology.",
        "Work collaboratively with a team in an Agile environment.",
      ],
    },
    {
      id: v4(),
      title: "React Developer",
      experience: "3+ years of experience",
      englishLevel: "Intermediate English",
      location: "Latam",
      description:
        "SMBS has an immediate opening for a React Developer to join our engineering team! Are you a front-end developer, involved with human centric interface development and developing quality code? Do you desire to make a difference and have an impact through the work that you create? If so, come join SMBS! You’ll work to develop applications in an Agile development environment.",
      competencies: [
        "Bachelor’s Degree in Computer Science or a related field.",
        "3-5 years of professional experience using React.",
        "Experience with state management libraries such as Redux.",
        "Experience with Next.js and Typescript.",
        "Experience with Jest/Enzyme or equivalent tools.",
        "Expertise using Hooks, including custom hooks",
        "Experience with Webpack.",
        "Professional experience with Test Driven Development and performing code reviews.",
        "Experience using version control systems like GIT.",
        "Experience working in an agile environment (Scrum preferred) as part of a cross-functional team.",
        "Strong communication skills.",
        "Fluent in English.",
      ],
      responsibilities: [
        "Create effectively tested, re-usable, and efficient JavaScript and TypeScript code.",
        "Develop user interfaces.",
        "Support continuous improvement by staying",
        "up-to-date on front-end technology.",
        "Work collaboratively with a team in an Agile environment.",
      ],
    },
    {
      id: v4(),
      title: "iOS Developer",
      experience: "3+ years of experience",
      englishLevel: "Intermediate English",
      location: "Latam",
      description:
        "SMBS has an immediate opening for a React Developer to join our engineering team! Are you a front-end developer, involved with human centric interface development and developing quality code? Do you desire to make a difference and have an impact through the work that you create? If so, come join SMBS! You’ll work to develop applications in an Agile development environment.",
      competencies: [
        "Bachelor’s Degree in Computer Science or a related field.",
        "3-5 years of professional experience using React.",
        "Experience with state management libraries such as Redux.",
        "Experience with Next.js and Typescript.",
        "Experience with Jest/Enzyme or equivalent tools.",
        "Expertise using Hooks, including custom hooks",
        "Experience with Webpack.",
        "Professional experience with Test Driven Development and performing code reviews.",
        "Experience using version control systems like GIT.",
        "Experience working in an agile environment (Scrum preferred) as part of a cross-functional team.",
        "Strong communication skills.",
        "Fluent in English.",
      ],
      responsibilities: [
        "Create effectively tested, re-usable, and efficient JavaScript and TypeScript code.",
        "Develop user interfaces.",
        "Support continuous improvement by staying",
        "up-to-date on front-end technology.",
        "Work collaboratively with a team in an Agile environment.",
      ],
    },
  ],
};

export const galleryCareers = [
  { id: v4(), image: "/gallery-1.png" },
  { id: v4(), image: "/gallery-2.png" },
  { id: v4(), image: "/gallery-3.png" },
  { id: v4(), image: "/gallery-4.png" },
  { id: v4(), image: "/gallery-5.png" },
  { id: v4(), image: "/gallery-6.png" },
  { id: v4(), image: "/gallery-7.png" },
  { id: v4(), image: "/gallery-8.png" },
  { id: v4(), image: "/gallery-9.png" },
  { id: v4(), image: "/gallery-10.png" },
];

export const detailsCareers = {
  careersLooking: "WE’RE LOOKING FOR A",
  about: "About you",
  perks: "Perks and Benefits",
  competencies: "You bring to SMBS the following competencies:",
  responsibilities:
    "You will be accountable for the following responsibilities:",
  benefits: [
    "Entertainment spaces",
    "Fully Stocked Kitchen",
    "Work from home",
    "Time off",
    "Birthdays",
    "Career Advancement",
    "Comfortable work environment",
    "Vision Benefits",
  ],
};

export const applyPosition = {
  title: "START YOUR JOURNEY WITH SMBS",
  subtitle: "Apply for this position",
  description:
    "We're proud of the culture and community we've built at SMBS, where every team member is empowered to excel. Join us and be a part of our vibrant team. We look forward to having you on board!",
  inputs: [
    {
      id: v4(),
      name: "name",
      type: "text",
    },
    {
      id: v4(),
      name: "email",
      type: "email",
    },
    {
      id: v4(),
      name: "country",
      type: "text",
    },
    {
      id: v4(),
      name: "phone",
      type: "tel",
    },
    {
      id: v4(),
      name: "portfolio",
      type: "text",
    },
    {
      id: v4(),
      name: "reffered",
      type: "text",
    },
  ],
};

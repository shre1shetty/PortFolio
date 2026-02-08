// Mock data for Shrevan Shetty's Portfolio

export const personalInfo = {
  name: "Shrevan Shetty",
  role: "MERN Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "shrevan506@gmail.com",
  phone: "+91 8356076185",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/shrevan-shetty",
  github: "https://github.com/shre1shetty",
  about: `MERN Stack Developer with 2+ years of experience building scalable web applications and production-grade UIs. I've worked on SAML-based authentication for enterprise clients and developed multi-tenant SaaS platforms with complex features like CMS, theming, and payment integration. Strong expertise in React, Node.js, and MongoDB with hands-on experience in secure, high-performance application architecture.`,
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "Redux/Zustand", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "ShadCN UI", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "JWT Auth", level: 90 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Azure", level: 75 },
    { name: "Postman", level: 88 },
    { name: "SAML SSO", level: 82 },
    { name: "Razorpay", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "SaaS Multi-Store E-Commerce",
    subtitle: "Shopify-like Platform",
    description:
      "A multi-tenant e-commerce platform enabling businesses to create and manage their own branded online stores with independent admin dashboards.",
    longDescription:
      "Built a comprehensive Shopify-like multi-tenant e-commerce platform with JWT authentication, role-based access control, modular CMS, dynamic theming, MongoDB GridFS for media, fuzzy search, Razorpay payment integration, and Google Analytics.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Razorpay",
      "JWT",
    ],
    liveUrl: "https://e-commerce-git-main-shrevan-shettys-projects.vercel.app/",
    githubUrl: "https://github.com/shre1shetty/E-Commerce",
    featured: true,
    images: ["/images/EcommHome1.png"],
    details: [
      {
        images: [
          "/images/EcommHome1.png",
          "/images/EcommHome1.1.png",
          "/images/EcommHome2.png",
          "/images/EcommHome2.1.png",
          "/images/EcommHome3.png",
          "/images/EcommHome3.1.png",
        ],
        title: "Home Page",
        description:
          "The home page is completely dynamic and customizable where each element is rendered based on active layout configuration set by the store owner. The home page consist of header component [carousel, banner] with optional sub banner, category section, the dynamic sections. The width of all sections are configurable.",
      },
      {
        images: ["/images/EcommProds1.1.png", "/images/EcommProds1.png"],
        title: "Products Page",
        description:
          "The products page is a dynamic listing page which renders products based on the category or search query. The filters and sorting options are also rendered based on the configuration set by the store owner. The product data is fetched from the server and rendered on the client side.",
      },

      {
        images: ["/images/EcommProduct1.png", "/images/EcommProduct1.1.png"],
        title: "Product Page",
        description:
          "The Product page is a dynamic page which renders the product details based on the product id. The product data is fetched from the server and rendered on the client side. The product page consist of product images, product description, price, add to cart button, reviews, variants and share button.",
      },
      {
        images: [
          "/images/UserDetails1.png",
          "/images/UserDetails2.png",
          "/images/UserDetails3.png",
          "/images/UserDetails4.png",
        ],
        title: "User Details Page",
        description:
          "The user details page is a dynamic page which renders the user details based on the user id. The user data is fetched from the server and rendered on the client side. The user details page consist of user information, order history, address book and wishlisted items.",
      },
      {
        images: [
          "/images/EcommCart1.png",
          "/images/EcommCart2.png",
          "/images/EcommCart3.png",
          "/images/EcommCart4.png",
          "/images/EcommCart5.png",
        ],
        title: "Cart Page",
        description:
          "The cart page is a dynamic page which renders the cart details based on the user id. The cart data is fetched from the server and rendered on the client side. The cart page consist of cart items, total price, checkout section, address and payment section with razorpay integration and also option for COD.",
      },
    ],
    adminDetails: [
      {
        images: ["/images/AdminDashboard.png", "/images/AdminDashboard2.png"],
        title: "Admin Dashboard",
        description:
          "Each store has its own independent admin dashboard where he can have insights about his store and manage his store. The admin dashboard consist of sales insights, order insights, product insights, customer insights. The dashboard also shows views with google analytics integration.",
      },
      {
        images: ["/images/EcommVariant1.png", "/images/EcommVariant2.png"],
        title: "Variant Configuration",
        description:
          "The admin creates products variants eq.Shoes, Jacket, Action Figures,  etc. Where each variant has its own tax slabs based on which the final price is calculated. This variant is then used while creating products. Each variant has its own variant fields which can be created using the plus button in the grid.",
      },
      {
        images: [
          "/images/EcommVarinatField1.png",
          "/images/EcommVariantField2.png",
        ],
        title: "Variant Fields Configuration",
        description:
          "This fields are used to create the product variants. For example, if the variant is shoes then the fields can be size, color, material etc. Each field has its type based on which it is displayed on the product card.For example, size is of type text so it is displayed as text and for color it is of type fill so it is displayed as color fill. ",
      },
      {
        images: ["/images/EcommFilters.png"],
        title: "Filters Configuration",
        description:
          "The filter is parent for filter types. Example filter types male,female are children of filter gender. This are used on the products page to filter the products based on the selected filters. ",
      },
      {
        images: [
          "/images/EcommFilterType1.png",
          "/images/EcommFilterType2.png",
          "/images/EcommFilterType3.png",
        ],
        title: "Filter Types Configuration",
        description:
          "The filter type is used while creating products to specify which category of products it belongs to. Each filter type has its own image which is used to display under category section on the home page. And also isActive flag based on which the category is displayed on besides the search bar.",
      },
      {
        images: ["/images/EcommStages.png"],
        title: "Workflow Stages Configuration",
        description:
          "The workflow stages are used to define the workflow of the products.The workflow are defined in the worflow defination and can be customized based on the business requirements.",
      },
      {
        images: [
          "/images/EcommWorkFlowDef1.png",
          "/images/EcommWorkFlowDef2.png",
        ],
        title: "WorkFlow Defination Configuration",
        description:
          "The workflow defination is used to define the workflow of the products. The workflow are defined in the worflow defination and can be customized based on the business requirements. The workflow defination consist of stages and each stage has a flag first stage or final stage based on which the workflow is executed. The workflow defination also consist of the next stage based on the action taken by the user. For example, if the action is approve then the next stage is approved stage and if the action is reject then the next stage is rejected stage.",
      },
      {
        images: [
          "/images/EcommProdToDisp1.png",
          "/images/EcommProdToDisp2.png",
          "/images/EcommProdToDisp3.png",
          "/images/EcommProdToDisp4.png",
          "/images/EcommProdToDisp5.png",
          "/images/EcommProdToDisp6.png",
        ],
        title: "Products to Display Configuration",
        description:
          "This page displays all the products created by the admin. The admin can createe products by clicking on the create button. Or also can download template and upload the products in bulk. Then create product on the create by template. Where most of fields are auto filled based on the template. Then only images are uploaded separately for each variant.",
      },
      {
        images: [
          "/images/EcommLayout1.png",
          "/images/EcommLayout2.png",
          "/images/EcommLayout3.png",
          "/images/EcommLayout4.png",
          "/images/EcommLayout5.png",
          "/images/EcommLayout6.png",
          "/images/EcommLayout7.png",
          "/images/EcommLayout8.png",
        ],
        title: "Layout Configuration",
        description:
          "The layout configuration includes theme color configuration, Logo, header element configuration of home page with sizing, Category section, section mapping with sizing, footer configuration and sticky panel configuration.",
      },
      {
        images: ["/images/Orders1.png", "/images/Orders2.png"],
        title: "Orders Page",
        description:
          "The orders page displays all the orders placed by the customers. The admin can view the order details, update the order status. On order rejection the order is cancelled and amount is refunded to the customer with mail notification.",
      },
    ],
  },
  {
    id: 2,
    title: "Enterprise SSO Portal",
    subtitle: "SAML Authentication System",
    description:
      "Enterprise-grade Single Sign-On solution with SAML-based authentication serving 10K+ corporate users with secure data handling.",
    longDescription:
      "Developed a complete React-based UI from scratch with dynamic routing, reusable components, and SAML integration. Implemented industry-standard security protocols including token-based authentication and RSA encryption.",
    technologies: ["React", "SAML", "Node.js", "RSA", "Azure", "Redux"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    image: [],
  },
  {
    id: 3,
    title: "Bank Application",
    subtitle: "Next Js Bank application",
    description:
      "Interactive analytics dashboard with real-time data visualization and comprehensive reporting features. With card details payments etc.",
    longDescription:
      "A modern analytics platform built with React and Next js with card details payments and status.",
    technologies: ["React", "Next js", "Plaid", "Sentry"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    image: [],
  },
];

export const experience = [
  {
    company: "Osource Global Pvt Ltd",
    role: "Software Developer",
    period: "October 2023 - Present",
    description:
      "Building enterprise-grade applications with React and implementing secure authentication solutions.",
  },
];

export const education = [
  {
    degree: "BSc-IT",
    institution: "M.L. Dahanukar College",
    year: "2020-2023",
    score: "SGPI: 9.18",
  },
];

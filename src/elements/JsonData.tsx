import { IMAGES } from "./theme";
// 💡 Subtype-to-images mapping for LightGallery grouping
export type HomeGalleryItem = {
  img: string;
  img2?: string;
  categery: string;
};

export const ArchitectureSubtypeImages: Record<string, string[]> = {
  "KSA Villa": [
    IMAGES.ksaView1,
    IMAGES.ksaView2,
    IMAGES.ksaView3,
    IMAGES.ksaInterior1,
    IMAGES.ksaInterior2,
    IMAGES.ksaInterior3,
    IMAGES.ksaInterior4,
    IMAGES.ksaInterior5,
  ],
  "Lebanese Style": [
    IMAGES.lebaneseElevation1,
    IMAGES.lebaneseView1,
    IMAGES.lebaneseView2,
    IMAGES.lebaneseView3,
  ],
  "Modern Villa": [
    IMAGES.modernElevation1,
    IMAGES.modernElevation2,
    IMAGES.modernView1,
    IMAGES.modernView2,
    IMAGES.modernView3,
    IMAGES.modernView4,
    IMAGES.modernView5,
    IMAGES.modernView6,
  ],
  "Medical Tourism": [
    IMAGES.medicalView1,
    IMAGES.medicalView2,
    IMAGES.medicalView3,
    IMAGES.medicalView4,
    IMAGES.medicalView5,
    IMAGES.medicalView6,
    IMAGES.medicalView7,
    IMAGES.medicalView8,
    IMAGES.medicalView9,
  ],
};

export const ResidentialSubtypeImages: Record<string, string[]> = {
  "Living Room": [IMAGES.residentialLR3, IMAGES.residentialLR4],
  "Master Bedroom 1": [IMAGES.MBR1, IMAGES.MBR2, IMAGES.MBR3, IMAGES.MBR4, IMAGES.MBR5],
  "Master Bedroom 2": [IMAGES.GBR1, IMAGES.GBR2, IMAGES.GBR3, IMAGES.GBR4, IMAGES.GBR5],
  "Salon": [IMAGES.S1, IMAGES.S2, IMAGES.S3, IMAGES.S4, IMAGES.S5],
};


export const HeaderSocialIcon = [
  { icon: "fab fa-facebook-f" },
  { icon: "fab fa-linkedin-in" },
  { icon: "fab fa-instagram" },
];

export const MainSliderArr = [
  { img: IMAGES.mainslid_pic2 },
];

export const HomeGalleryArr = [
  // 4 Architecture Images (Items 1–4) -> We derive sub-types (Lebanese Style, KSA Villa, etc.) via getImageLabel
  { img: IMAGES.architecture1, img2: IMAGES.architecture2, categery: "Architecture" },
  { img: IMAGES.architecture3, img2: IMAGES.architecture4, categery: "Architecture" },
  { img: IMAGES.architecture5, img2: IMAGES.architecture6, categery: "Architecture" },
  { img: IMAGES.architecture7, img2: IMAGES.architecture8, categery: "Architecture" },

  // 2 Grand Bedroom Images (Items 5–6)
  { img: IMAGES.interior1, img2: IMAGES.interior2, categery: "Grand Bedroom" },
  { img: IMAGES.interior3, img2: IMAGES.interior4, categery: "Grand Bedroom" },

  // 2 Salon Images (Items 7–8)
  { img: IMAGES.interior5, img2: IMAGES.interior6, categery: "Salon" },
  { img: IMAGES.interior7, img2: IMAGES.interior8, categery: "Salon" },

  // Commercial Images (8 images)
  {
    img: IMAGES.commercial1,
    img2: IMAGES.commercial2,
    categery: "Commercial",
  },
  {
    img: IMAGES.commercial3,
    img2: IMAGES.commercial4,
    categery: "Commercial",
  },
  {
    img: IMAGES.commercial5,
    img2: IMAGES.commercial6,
    categery: "Commercial",
  },
  {
    img: IMAGES.commercial7,
    img2: IMAGES.commercial8,
    categery: "Commercial",
  },

  // Residential Images (8 images)
  {
    img: IMAGES.residentialLR3,
    categery: "Residential",
  },
  {
    img: IMAGES.MBR1,
    categery: "Residential",
  },
  {
    img: IMAGES.GBR1,
    categery: "Residential",
  },
  {
    img: IMAGES.S1,
    categery: "Residential",
  },
  

  // Additional Architecture Images (Optional/Repetitions)
  {
    img: IMAGES.architecture1,
    img2: IMAGES.architecture2,
    categery: "Architecture",
  },
  {
    img: IMAGES.architecture3,
    img2: IMAGES.architecture4,
    categery: "Architecture",
  },
  {
    img: IMAGES.architecture5,
    img2: IMAGES.architecture6,
    categery: "Architecture",
  },
];

export const HomeServicesArr = [
  {
    img: IMAGES.servic_pic1,
    title: "Architectural Design",
    description: "Innovative and functional designs tailored to your vision, with complete concept development, architectural drawings, and technical documentation.",
  },
  {
    img: IMAGES.servic_pic2,
    title: "Construction",
    description: "Reliable construction services with full project delivery under the supervision of a licensed engineer, ensuring quality, precision, and timely execution at every stage.",
  },
  {
    img: IMAGES.servic_pic3,
    title: "Interior Design",
    description: "Stylish, comfortable, and personalized interior solutions—fully designed and executed from concept to completion, with every detail handled.",
  },
];

export const HomeModalBoxArr = [
  { num: 1, title: "Concept" },
  { num: 2, title: "Idea" },
  { num: 3, title: "Design" },
  { num: 4, title: "Excecution" },
];

export const HomeTeamArr = [
  { img: IMAGES.team_pic1, title: "Lala Rose " },
  { img: IMAGES.team_pic2, title: " Andrey Carol", setStyle: "m-t40" },
  { img: IMAGES.team_pic3, title: "Rebecca Ruth" },
  { img: IMAGES.team_pic3, title: "Rebecca Ruth", setStyle: "m-t40" },
  { img: IMAGES.team_pic4, title: "Austin Doe" },
  { img: IMAGES.team_pic2, title: " Andrey Carol", setStyle: "m-t40" },
];

export const HomeTestimonialArr = [
  { img: IMAGES.testimonial_pic2, title: "Lala Rose " },
  { img: IMAGES.testimonial_pic3, title: "Rebecca Ruth" },
  { img: IMAGES.testimonial_pic2, title: "Lala Rose " },
  { img: IMAGES.testimonial_pic3, title: "Rebecca Ruth" },
];

export const HomeBlogArr = [
  {
    img: IMAGES.blog_grid_pic1,
    title: "Sed lacinia pulvinar odio, nec tempus augue. ",
  },
  {
    img: IMAGES.blog_grid_pic2,
    title: "Integer vestibulum rutrum aliquet cras rutrum.",
  },
  {
    img: IMAGES.blog_grid_pic3,
    title: "Aenean sit amet ex nec nisl consectetur iaculis.",
  },
  {
    img: IMAGES.blog_grid_pic1,
    title: "Sed lacinia pulvinar odio, nec tempus augue. ",
  },
];

export const CounterUpArr = [
  { num: 7849, title: "SQURE AREA COMPLEX" },
  { num: 8749, title: "SATISFIED CLIENTS" },
  { num: 4157, title: "COMPLETED PROJECTS" },
  { num: 2458, title: "CUP OF COFFEE" },
];

export const OurFeaturArr = [
  { title: "Concept", icon: "flaticon-concept" },
  { title: "Design", icon: "flaticon-graphic-designer" },
  { title: "Administration", icon: "flaticon-project-management" },
  { title: "Execution", icon: "flaticon-execution" },
  { title: "Delivery", icon: "flaticon-telephone" },
];

export const TeamArr = [
  { name: "Andrey Carol", img: IMAGES.team_pic1 },
  { name: "Rebecca Ruth ", img: IMAGES.team_pic5 },
  { name: "Austin Doe", img: IMAGES.team_pic3 },
  { name: "Lala Rose", img: IMAGES.team_pic4 },
  { name: "Andrey Carol", img: IMAGES.team_pic5 },
  { name: "Rebecca Ruth", img: IMAGES.team_pic6 },
  { name: "Austin Doe", img: IMAGES.team_pic7 },
  { name: "Lala Rose", img: IMAGES.team_pic8 },
];

export const ClientLogoArr = [
  { img: IMAGES.logo_gray1, img2: IMAGES.logo_brown1 },
  { img: IMAGES.logo_gray2, img2: IMAGES.logo_brown2 },
  { img: IMAGES.logo_gray3, img2: IMAGES.logo_brown3 },
  { img: IMAGES.logo_gray4, img2: IMAGES.logo_brown4 },
  { img: IMAGES.logo_gray5, img2: IMAGES.logo_brown5 },
  { img: IMAGES.logo_gray6, img2: IMAGES.logo_brown6 },
  { img: IMAGES.logo_gray1, img2: IMAGES.logo_brown1 },
];

export const ProgressBarArr = [
  { title: "ARCHITECTURE", value: "90" },
  { title: "3D DESIGN", value: "80" },
  { title: "INTERIOR DESIGN", value: "95" },
];
export const ProgressBarArr2 = [
  { title: "Design", value: "80" },
  { title: "Architact", value: "90" },
  { title: "Planing", value: "70" },
];

export const PortfolioDetailsArr = [
  { img: IMAGES.work_pic9, changeStyle: "col-lg-3" },
  { img: IMAGES.work_pic10, changeStyle: "col-lg-3 " },
  { img: IMAGES.work_pic11, changeStyle: "col-lg-6 " },
];

export const PortfolioDetailsArr2 = [
  { img: IMAGES.work_pic13, changeStyle: "col-lg-3" },
  { img: IMAGES.work_pic14, changeStyle: "col-lg-3 " },
];

export const RelatedWorkGalleryArr = [
  { img: IMAGES.work_pic4 },
  { img: IMAGES.work_pic7 },
  { img: IMAGES.work_pic8 },
];

export const ServicesArr = [
  {
    img: IMAGES.servic_pic1,
    title: "Architectural Design",
    description:
     "Innovative and functional designs tailored to your vision, with complete concept development, architectural drawings, and technical documentation.",
  },
  {
    img: IMAGES.servic_pic2,
    title: "Construction",
    description:
      "Reliable construction services with full project delivery under the supervision of a licensed engineer, ensuring quality, precision, and timely execution at every stage.",
  },
  {
    img: IMAGES.servic_pic3,
    title: "Interior Design",
    description:
      "Stylish, comfortable, and personalized interior solutions—fully designed and executed from concept to completion, with every detail handled.",
  },
  {
    img: IMAGES.servic_pic4,
    title: "Real Estate",
    description:
      "Comprehensive support in property selection, evaluation, investment, and legal documentation to ensure secure and informed transactions.",
  },
  {
    img: IMAGES.servic_pic5,
    title: "Licenses & Permits",
    description:
     "Managing all legal procedures with full architectural, civil, mechanical, and electrical documentation to ensure compliant project approvals.",
  },
  {
    img: IMAGES.servic_pic6,
    title: "Topography",
    description:
      "Accurate land surveying and analysis with prepared documentation and a professional team ready to assist.",
  },
  {
    img: IMAGES.servic_pic7,
    title: "Administrative Documentation",
    description:
      "Preparation and management of all administrative documents, including permit applications, technical dossiers, and compliance files, to streamline project execution.",
  },
  {
    img: IMAGES.servic_pic8,
    title: "Project Management",
    description:
      "Structured oversight across all phases, including real estate transactions, documentation, and resolution of related disputes, to ensure seamless project delivery.",
  },
];

export const BlogCardArr = [
  { img: IMAGES.blog_large_pic1 },
  { img: IMAGES.blog_large_pic2 },
  { img: IMAGES.blog_large_pic3 },
];

export const BlogLeftContentArr = [
  { img: IMAGES.recent_blog_pic1 },
  { img: IMAGES.recent_blog_pic2 },
  { img: IMAGES.recent_blog_pic3 },
  { img: IMAGES.recent_blog_pic4 },
];

export const MainBanner2Arr = [
  {
    img: IMAGES.mainslider_pic3,
    title: "Creative Concepts",
    text: "Interior Design",
  },
  {
    img: IMAGES.mainslider_pic2,
    title: "WE CREAT YOUR",
    text: "DREAM IDEAS",
  },
];

export const Home2OurPortFolioArr = [
  { img: IMAGES.work_2_pic1, setStyle: "col-xl-6 col-md-6 col-sm-6 m-b30" },
  { img: IMAGES.work_2_pic2, setStyle: "col-xl-6 col-md-6 col-sm-6 m-b30" },
  { img: IMAGES.work_2_pic3, setStyle: "col-xl-4 col-md-6 col-sm-6 m-b30" },
  { img: IMAGES.work_2_pic4, setStyle: "col-xl-4 col-md-6 col-sm-6 m-b30" },
  { img: IMAGES.work_2_pic5, setStyle: "col-xl-4 col-md-6 col-sm-6 m-b30" },
];

export const Home2ServicesArr = [
  { icon: "flaticon-blueprint", title: "Architecture & Interior" },
  { icon: "flaticon-briefing", title: "Project Planning" },
  { icon: "flaticon-home", title: "Product Design" },
  { icon: "flaticon-concept", title: "Custom Solutions" },
];

export const Home2TestimonialArr = [
  { img: IMAGES.testimonial_pic1 },
  { img: IMAGES.testimonial_pic2 },
  { img: IMAGES.testimonial_pic3 },
];

export const Home2TeamArr = [
  { img: IMAGES.team_pic1 },
  { img: IMAGES.team_pic2 },
  { img: IMAGES.team_pic3 },
  { img: IMAGES.team_pic4 },
  { img: IMAGES.team_pic2 },
];

export const Home2ModalboxArr = [
  { img: IMAGES.logo_gray1, img2: IMAGES.logo_orange1 },
  { img: IMAGES.logo_gray2, img2: IMAGES.logo_orange2 },
  { img: IMAGES.logo_gray3, img2: IMAGES.logo_orange3 },
  { img: IMAGES.logo_gray4, img2: IMAGES.logo_orange4 },
  { img: IMAGES.logo_gray5, img2: IMAGES.logo_orange5 },
  { img: IMAGES.logo_gray1, img2: IMAGES.logo_orange1 },
  { img: IMAGES.logo_gray2, img2: IMAGES.logo_orange2 },
  { img: IMAGES.logo_gray3, img2: IMAGES.logo_orange3 },
  { img: IMAGES.logo_gray4, img2: IMAGES.logo_orange4 },
  { img: IMAGES.logo_gray5, img2: IMAGES.logo_orange5 },
];

export const Home2BlogArr = [
  { img: IMAGES.recent_blog_pic5 },
  { img: IMAGES.recent_blog_pic6 },
  { img: IMAGES.recent_blog_pic7 },
];

export const MainBanner3Arr = [
  { img: IMAGES.mainslid_pic4 },
  { img: IMAGES.mainslid_pic5 },
  { img: IMAGES.mainslid_pic1 },
];

export const MainBanner5Arr = [
  { title: "We Create Your Dream Ideas ", img: IMAGES.mainslid_pic6 },
  { title: "We Create Your Dream Ideas ", img: IMAGES.mainslid_pic6 },
  { title: "We Create Your Dream Ideas ", img: IMAGES.mainslid_pic6 },
];

export const Home5ServiceArr = [
  { icon: "flaticon-blueprint-1", title: "Interior Design" },
  { icon: "flaticon-blueprint", title: "Construction" },
  { icon: "flaticon-interior-design", title: "Architecture" },
  { icon: "flaticon-home", title: "24X7 Support" },
];

export const Home6ServiceArr = [
  { icon: "flaticon-blueprint-1", title: "Interior Design" },
  { icon: "flaticon-blueprint", title: "Construction" },
  { icon: "flaticon-interior-design", title: "Architecture" },
];

export const Home5PortfolioArr = [
  { img: IMAGES.filter_pic1, title: "Public Cafe Design", categery: "All" },
  {
    img: IMAGES.filter_pic2,
    title: "Interior Design",
    categery: "All Architecture Construction",
  },
  {
    img: IMAGES.filter_pic3,
    title: "Floor Plan Design",
    categery: "All Interior Design",
  },
  {
    img: IMAGES.filter_pic4,
    title: "Construction",
    categery: "All Architecture Construction",
  },
  {
    img: IMAGES.filter_pic5,
    title: "Furniture Production",
    categery: "All Interior Design",
  },
  {
    img: IMAGES.filter_pic6,
    title: "Architecture Design",
    categery: "All Architecture",
  },
  {
    img: IMAGES.filter_pic7,
    title: "Floor Plan Design",
    categery: "All Interior Design",
  },
  {
    img: IMAGES.filter_pic8,
    title: "Interior Design",
    categery: "All Interior Design Construction",
  },
];

export const Home5PortfolioButtonsArr = [
  { name: "All" },
  { name: "Architecture" },
  { name: "Interior Design" },
  { name: "Construction" },
];

export const Home5TestionialArr = [
  { img: IMAGES.testimonial_pic2, name: "Andrey", position: "Designer" },
  { img: IMAGES.testimonial_pic3, name: "Jakob", position: "developer" },
  { img: IMAGES.testimonial_pic4, name: "Lindsey", position: "programmer" },
];

export const Home5CreactiveExpriseArr = [
  { img: IMAGES.team_pic9, name: "Andrey", position: "Designer" },
  { img: IMAGES.team_pic10, name: "Jakob", position: "developer" },
  { img: IMAGES.team_pic11, name: "Lindsey", position: "programmer" },
  { img: IMAGES.team_pic12, name: "Andrey", position: "Designer" },
];

export const Home5BlogArr = [
  { img: IMAGES.blog_pic5 },
  { img: IMAGES.blog_pic6 },
  { img: IMAGES.blog_pic5 },
];

export const Home6PortfolioArr = [
  {
    title: "Construction",
    img: IMAGES.filter_pic4,
    setStyle: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
    categery: "All Architecture Construction",
  },
  {
    title: "Floor Plan Design",
    img: IMAGES.filter_pic3,
    setStyle: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
    categery: "All Interior Design",
  },
  {
    title: "Public Cafe Design",
    img: IMAGES.filter_pic1,
    setStyle: "col-xl-4 col-lg-4 col-md-4 col-sm-6",
    categery: "All Architecture Construction",
  },
  {
    title: "Interior Design",
    img: IMAGES.filter_pic2,
    setStyle: "col-xl-4  col-lg-4 col-md-4 col-sm-6",
    categery: "All Interior Design",
  },
  {
    title: "Floor Plan Design",
    img: IMAGES.filter_pic3,
    setStyle: "col-xl-4 col-lg-4 col-md-4 col-sm-6",
    categery: "All Architecture",
  },
];

export const Home6BlogArr = [
  { img: IMAGES.blog_grid_pic7 },
  { img: IMAGES.blog_grid_pic8 },
  { img: IMAGES.blog_grid_pic9 },
  { img: IMAGES.blog_grid_pic7 },
];

export const SwitcherButtonsArr = [
  { setStyle: "skin-3", skin: "color_1" },
  { setStyle: "skin-4", skin: "color_2" },
  { setStyle: "skin-2", skin: "color_3" },
  { setStyle: "skin-5", skin: "color_4" },
  { setStyle: "skin-1", skin: "color_5" },
  { setStyle: "skin-7", skin: "color_6" },
  { setStyle: "skin-8", skin: "color_7" },
  { setStyle: "skin-6", skin: "color_8" },
];

export const SwitcherLayoutArr = [
  { title: "wide-layout" },
  { title: "boxed" },
  { title: "frame" },
];

export const BackGroundColorArr = [
  { colorValue: "#a3cc02", setStyle: "bg-color-1" },
  { colorValue: "#57b7c0", setStyle: "bg-color-2" },
  { colorValue: "#c6a47e", setStyle: "bg-color-3" },
  { colorValue: "#ff1d4d", setStyle: "bg-color-4" },
  { colorValue: "#eab248", setStyle: "bg-color-5" },
  { colorValue: "#ef9f7e", setStyle: "bg-color-6" },
  { colorValue: "#e485da", setStyle: "bg-color-7" },
  { colorValue: "#8669d4", setStyle: "bg-color-8" },
];

export const BgSmallImgArr = [
  {
    img: IMAGES.switcher_small_bg1,
    imgLarge: IMAGES.switcher_large_bg1,
    ptSmall: IMAGES.switcher_small_pt1,
    ptLarge: IMAGES.switcher_large_pt1,
  },
  {
    img: IMAGES.switcher_small_bg2,
    imgLarge: IMAGES.switcher_large_bg2,
    ptSmall: IMAGES.switcher_small_pt2,
    ptLarge: IMAGES.switcher_large_pt2,
  },
  {
    img: IMAGES.switcher_small_bg3,
    imgLarge: IMAGES.switcher_large_bg3,
    ptSmall: IMAGES.switcher_small_pt3,
    ptLarge: IMAGES.switcher_large_pt3,
  },
  {
    img: IMAGES.switcher_small_bg4,
    imgLarge: IMAGES.switcher_large_bg4,
    ptSmall: IMAGES.switcher_small_pt4,
    ptLarge: IMAGES.switcher_large_pt4,
  },
  {
    // img: IMAGES.switcher_small_bg5,
    imgLarge: "",
    ptSmall: IMAGES.switcher_small_pt5,
    ptLarge: IMAGES.switcher_large_pt5,
  },
  {
    // img: IMAGES.switcher_small_bg6,
    imgLarge: "",
    ptSmall: IMAGES.switcher_small_pt6,
    ptLarge: IMAGES.switcher_large_pt6,
  },
  {
    // img: IMAGES.switcher_small_bg7,
    imgLarge: "",
    ptSmall: IMAGES.switcher_small_pt7,
    ptLarge: IMAGES.switcher_large_pt7,
  },
];

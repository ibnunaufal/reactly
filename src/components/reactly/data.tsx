import {
  AcademicCapIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../../assets/img/benefit-one.png";
import benefitTwoImg from "../../assets/img/benefit-two.png";
import { ReactNode } from "react";

interface BenefitData {
  title: string;
  desc: string;
  image: string;//ReactNode; // You might want to use the correct type for images
  bullets: Bullet[];
}

interface Bullet {
  title: string;
  desc: string;
  icon: ReactNode; // You might want to use the correct type for icons
}

const benefitOne: BenefitData = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <AcademicCapIcon />,
    },
  ],
};

const benefitTwo: BenefitData = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <AcademicCapIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

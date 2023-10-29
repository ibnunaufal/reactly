import React from "react";
// import Head from 'next/head';
import Hero from "../reactly/hero";
import Navbar from "../reactly/navbar";
import SectionTitle from "../reactly/sectionTitle";
import Video from "../reactly/video";
import Benefits from "../reactly/benefits";
import Footer from "../reactly/footer";
import Testimonials from "../reactly/testimonials";
import Cta from "../reactly/cta";
import Faq from "../reactly/faq";
import PopupWidget from "../reactly/popupwidget";
import "../../css/tailwind.css";
import benefitOneImg from "../../assets/img/benefit-one.png";
import {
  // FaceSmileIcon,
  // SunIcon,
  // SunIcon,
  // DevicePhoneMobileIcon,
  // AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/outline";
import Container from "../reactly/container";

type BenefitData = {
  image: string;
  title: string;
  desc: string;
  bullets: BenefitProps[];
};
interface BenefitProps {
  title: string;
  icon: React.ReactElement;
  desc: string;
  // children: React.ReactNode;
}

const benefitOne: BenefitData = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <SunIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <SunIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <SunIcon />,
    },
  ],
};

const HomeAgain = () => {
  return (
    // set the background color following dark or light mode

    <>
      {/* <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="About Us"
        title="Find Out More About Us"
      >
        Pada tanggal 05 Desember 2022, Mal Pelayanan Publik (MPP) Kota Cilegon diluncurkan secara nasional oleh Wakil Presiden Republik Indonesia, Bapak KH. Ma'ruf Amin, dengan peluncuran operasional di tingkat daerah oleh Wali Kota Cilegon pada 22 Desember 2022. Keberhasilan MPP Kota Cilegon berkat peran penting Wali Kota dan Wakil Wali Kota, serta dukungan Kementerian PANRB dan 21 instansi lainnya, menjadikannya pusat layanan one stop services untuk memudahkan akses masyarakat.
      </SectionTitle>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 right}`}
        >
          <div>
            <img
              src={benefitOneImg}
              width={10}
              height={10}
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              // blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            // data.imgPos === "right" ? "lg:justify-end" : ""
            "right"
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Highlight your benefits
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                You can use this space to highlight your first benefit or a
                feature of your product. It can also contain an image or
                Illustration like in the example along with some bullet points.
              </p>
            </div>

            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                  {/* <SunIcon /> */}
                  {React.cloneElement(<SunIcon />, {
                    className: "w-7 h-7 text-indigo-50",
                  })}
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Understand your customers
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Then explain the first point breifly in one or two lines.
                  </p>
                </div>
              </div>
              {/* {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))} */}
            </div>
          </div>
        </div>
      </Container>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fulfill your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts say a landing page with a video has a 3% higher conversion
        rate. So, don't forget to add one, just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials are a great way to increase brand trust and awareness. Use
        this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' possible questions here. It will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default HomeAgain;

import React from "react";
import Container from "./container";

import userOneImg from "../../assets/img/user1.jpg";
import userTwoImg from "../../assets/img/user2.jpg";
import userThreeImg from "../../assets/img/user3.jpg";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Typography,
} from "@material-tailwind/react";
import facility from "../../assets/img/facilities/1.jpg"

interface AvatarProps {
  imageSrc: string;
  name: string;
  title: string;
}
{
  /* using carousel, create carousel that contain several div of an element */
}
{
  /* <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-indigo-700 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Share a real <Mark>testimonial</Mark> that hits some of your
                benefits from one of your popular customers.
              </p>

              <Avatar
                imageSrc={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-indigo-700 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Share a real <Mark>testimonial</Mark> that hits some of your
                benefits from one of your popular customers.
              </p>

              <Avatar
                imageSrc={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
            </div>
          </div>
        </Carousel> */
}

const dataTestimonials = [
  {
    id: 1,
    text: "Mesin Antrian dan Video Mall",
  },
  {
    id: 2,
    text: "Ruang Gerai Layanan",
  },
  {
    id: 3,
    text: "Ruang Tunggu",
  },
  {
    id: 4,
    text: "Pojok Baca Digital",
  },
  {
    id: 5,
    text: "Ruang Prioritas",
  },
  {
    id: 7,
    text: "Ruang Tunggu",
  },
  {
    id: 8,
    text: "Kantin/Pojok UMKM",
  },
  {
    id: 9,
    text: "Mesin Survey Kepuasan Masyarakat",
  },
  {
    id: 10,
    text: "Ruang Difabel",
  },
  {
    id: 11,
    text: "Ruang Pengaduan",
  },
  {
    id: 12,
    text: "Toilet",
  },
  {
    id: 13,
    text: "Balai Nikah",
  },
  {
    id: 14,
    text: "Ruang Laktasi",
  },
  {
    id: 15,
    text: "Ruang Rapat",
  },
  
]
const Testimonials: React.FC = () => {
  return (
    <Container>
      <div className="flex overflow-x-auto max-h-50 flex-nowrap">
        <div className="flex flex-nowrap gap-3 mr-2">
        {dataTestimonials.map((item, index) => (
          <Card className="mt-6 w-96 bg-indigo-100" key={item.id}>
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={facility}
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.text}
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-indigo-500">Read More</Button>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
      <div>

      </div>
      {/* <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark> that hits some of your
              benefits from one of your popular customers.
            </p>

            <Avatar
              imageSrc={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make sure you only pick the <Mark>right sentence</Mark> to keep it
              short and simple.
            </p>

            <Avatar
              imageSrc={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>

            <Avatar
              imageSrc={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div> */}
    </Container>
  );
};

const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  name,
  title,
}: AvatarProps) => {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img src={imageSrc} alt="Avatar" width="40" height="40" />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
};

interface MarkProps {
  children: React.ReactNode;
}
const Mark: React.FC<MarkProps> = ({ children }: MarkProps) => {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {children}
      </mark>{" "}
    </>
  );
};

export default Testimonials;

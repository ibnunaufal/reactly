import React from "react";
import Container from "./container";

import userOneImg from "../../assets/img/user1.jpg";
import userTwoImg from "../../assets/img/user2.jpg";
import userThreeImg from "../../assets/img/user3.jpg";

interface AvatarProps {
  imageSrc: string;
  name: string;
  title: string;
}

const Testimonials: React.FC = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
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
      </div>
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

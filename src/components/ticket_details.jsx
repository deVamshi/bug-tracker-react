import React from "react";

import { Card, Badge } from "flowbite-react";

const TicketDetails = () => {
  const badge = (title) => {
    return (
      <Badge size={24} color="info">
        {title}
      </Badge>
    );
  };

  const SingleComment = () => {
    return (
      <div className=" px-16 py-2">
        {/* <Card> */}
        <div className="md:w-1/2 w-full min-w-full">
          <div className="h-full  my-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-2 h-2 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src="https://dummyimage.com/106x106"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-semibold text-sm text-gray-900">
                  Holden Caulfield
                </span>
                <span className="text-gray-500 text-xs">UI DEVELOPER</span>
              </span>
            </a>
          </div>
        </div>
        {/* </Card> */}
      </div>
    );
  };

  const CommentSection = () => {
    return (
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-2xl font-medium title-font text-gray-900 mb-1">
            Comments
          </h1>
          <div className=" -mx-4">
            {<SingleComment />}
            {<SingleComment />}
            {<SingleComment />}
            {<SingleComment />}
            {<SingleComment />}
            {<SingleComment />}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="p-18 max-w-5xl">
      <Card href="#">
        <div></div>
        <div>
          <h5 className="text-2xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            corporis. Deserunt minus cupiditate inventore, ullam nesciunt
            adipisci ratione accusamus, asperiores impedit illum labore unde,
            maiores nemo ipsam voluptate praesentium neque earum. Architecto,
            veritatis quod numquam libero sed maxime similique quas nisi amet
            qui natus excepturi cum nesciunt molestias voluptatibus commodi est
            ad laborum, magni facilis dolor voluptatem laboriosam omnis! Vitae,
            nam. Rem, sed dolore. Velit, minus impedit, pariatur aspernatur quam
            tempore necessitatibus sequi aperiam eaque iste, hic autem iusto ad
            numquam eius. Officiis alias itaque eaque, dolores sit consectetur
            quas!
          </p>
        </div>
        <div className="flex justify-end">
          <div className="max-w-fit flex space-x-2 justify-end">
            {badge("#UIDESIGN")}
            {badge("#UIDESIGN")}
            {badge("#UIDESIGN")}
            {badge("#UIDESIGN")}
          </div>
        </div>
      </Card>

      {<CommentSection />}
    </div>
  );
};

export default TicketDetails;

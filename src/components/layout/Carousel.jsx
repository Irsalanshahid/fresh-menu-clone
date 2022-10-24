import { React, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const clickPrev = () => {
    const Carousel = document.getElementById("carousel");
    let width = 0;
    width = Carousel.clientWidth;
    Carousel.scrollLeft = Carousel.scrollLeft - width / 3;
    console.log(Carousel.scrollLeft - width / 3);
  };
  const clickNext = () => {
    const Carousel = document.getElementById("carousel");
    let width = 0;
    width = Carousel.clientWidth;
    Carousel.scrollLeft = Carousel.scrollLeft + width / 3;
    console.log(Carousel.scrollLeft + width / 3);
  };
  useEffect(() => {
    setTimeout(() => {
      const Carousel = document.getElementById("carousel");
      let width = 0;
      width = Carousel.clientWidth;
      Carousel.scrollLeft = Carousel.scrollLeft + width / 3;
      console.log(Carousel.scrollLeft + width / 3);
    }, 20);
  },[]);
  return (
    <section className="relative  flex h-auto w-full overflow-x-hidden">
      <div className="w-max-20 absolute z-10 flex h-full w-20 items-center justify-center bg-transparent ">
        <a
          href="#"
          onClick={clickPrev}
          className="absolute -left-1/2 flex h-20 w-20 items-center justify-end rounded-full bg-white pr-4 text-2xl font-bold"
        >
          <FontAwesomeIcon icon={faLessThan} className="text-[#4a4a4a]" />
        </a>
      </div>

      <div className="w-max-20 absolute right-0 z-10 flex h-full w-20 items-center justify-center bg-transparent">
        <a
          href="#"
          onClick={clickNext}
          className="absolute left-1/2 flex h-20 w-20 items-center justify-start rounded-full bg-white pl-4 text-2xl font-bold"
        >
          <FontAwesomeIcon icon={faGreaterThan} className="text-[#4a4a4a]" />
        </a>
      </div>

      <div
        className="flex gap-x-4 overflow-x-hidden scroll-smooth"
        id="carousel"
      >
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/469ff800-2800-4932-a0c4-7244c157e090.jpg"
          className="h-auto w-[401px]"
        ></img>

        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/3cc0d71e-0ef6-412e-8a35-7d9f2a18fdd6.jpg"
          className="h-auto w-[401px]"
        ></img>

        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/3c2a7e34-1f2c-43e2-97ec-d01ddf472c21.jpg"
          className="h-auto w-[401px]"
        ></img>
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/4428631b-38be-4e91-ad24-44657c7f9e2b.jpg"
          className="h-auto w-[401px]"
        ></img>

        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/adbe24f0-7291-4e9e-ad1c-2ae3d649f984.jpg"
          className="h-auto w-[401px]"
        ></img>

        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/24ae0ab9-9914-4529-bb17-5aee99b58641.jpg"
          className="h-auto w-[401px]"
        ></img>

        <img
          src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/ca00a605-cbe2-4455-aed1-37d631a23254.jpeg"
          className="h-auto w-[401px]"
        ></img>
      </div>
    </section>
  );
};
export default Carousel;

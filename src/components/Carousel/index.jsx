import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import constants from '../../constants';

const {
  PROJECTS_BUILD_A_BUILD,
  PROJECTS_BUILD_A_BUILD_SLUG,
  PROJECTS_FORMULA_ASSISTANT_SLUG,
  PROJECTS_FORMULA_ASSISTANT,
  PROJECTS_PANKOV_SLUG,
  PROJECTS_PANKOV,
} = constants;

const Carousel = () => (
  <div className="carousel slide relative" data-bs-ride="carousel" id="carouselExampleCaptions">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        aria-current="true"
        aria-label="Slide 1"
        className="active"
        data-bs-slide-to="0"
        data-bs-target="#carouselExampleCaptions"
        type="button"
      />
      <button
        aria-label="Slide 2"
        data-bs-slide-to="1"
        data-bs-target="#carouselExampleCaptions"
        type="button"
      />
      <button
        aria-label="Slide 3"
        data-bs-slide-to="2"
        data-bs-target="#carouselExampleCaptions"
        type="button"
      />
    </div>

    <div className="carousel-inner relative w-full overflow-hidden">
      <div className="carousel-item active relative float-left w-full">
        <StaticImage
          alt="pankov"
          className="block w-full"
          placeholder="dominantColor"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          transformOptions={{ grayscale: true }}
        />
        <Link to={PROJECTS_PANKOV_SLUG}>
          <div className="flex carousel-caption absolute text-center h-full flex-col" style={{ justifyContent: 'center' }}>
            <h5 className="text-3xl sd:text-2xl md:text-4xl xl:text-8xl">{PROJECTS_PANKOV}</h5>
            <p className="hidden sm:block sd:text-base md:text-xl xl:text-2xl ">A dice game that you can play from the terminal</p>
          </div>
        </Link>
      </div>
      <div className="carousel-item relative float-left w-full">
        <StaticImage
          alt="Build-A-Build"
          className="block w-full"
          placeholder="dominantColor"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          transformOptions={{ grayscale: true }}
        />
        <Link to={PROJECTS_BUILD_A_BUILD_SLUG}>
          <div className="flex carousel-caption absolute text-center h-full flex-col" style={{ justifyContent: 'center' }}>
            <h5 className="text-3xl sd:text-2xl md:text-4xl xl:text-8xl">{PROJECTS_BUILD_A_BUILD}</h5>
            <p className="hidden sm:block sd:text-base md:text-xl xl:text-2xl ">A mobile app that will helps you playing Pokémon Unite</p>
          </div>
        </Link>
      </div>
      <div className="carousel-item relative float-left w-full">
        <StaticImage
          alt="Formula Assistant"
          className="block w-full"
          placeholder="dominantColor"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          transformOptions={{ grayscale: true }}
        />
        <Link to={PROJECTS_FORMULA_ASSISTANT_SLUG}>
          <div className="flex carousel-caption absolute text-center h-full flex-col" style={{ justifyContent: 'center' }}>
            <h5 className="text-3xl sd:text-2xl md:text-4xl xl:text-8xl">{PROJECTS_FORMULA_ASSISTANT}</h5>
            <p className="hidden sm:block sd:text-base md:text-xl xl:text-2xl ">A mobile app for all the F1 fans</p>
          </div>
        </Link>
      </div>
    </div>

    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      data-bs-slide="prev"
      data-bs-target="#carouselExampleCaptions"
      type="button"
    >
      <span aria-hidden="true" className="carousel-control-prev-icon inline-block bg-no-repeat" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      data-bs-slide="next"
      data-bs-target="#carouselExampleCaptions"
      type="button"
    >
      <span aria-hidden="true" className="carousel-control-next-icon inline-block bg-no-repeat" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;

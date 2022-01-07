import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import constants from '../../constants';

const {
  HOME_PAGE_SLUG,
  mapping,
} = constants;

const Header = ({ page }) => {
  const currentPage = mapping[page];

  const [dropDown, setDropDown] = useState(true);
  const [text, setText] = useState(currentPage);

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  return (
    <>
      <Helmet defer={false} title="Rollercoders">
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
      </Helmet>

      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white rounded shadow-lg py-5 px-7">
          <nav className="flex justify-center sm:justify-between">
            <Link className="flex items-center space-x-3 lg:pr-16" to={HOME_PAGE_SLUG}>
              <Badges />

              <h2 className="font-normal text-2xl leading-6 text-gray-800">Rollercoders</h2>
            </Link>

            {/* For medium and plus sized devices */}
            <ul className="hidden sm:flex flex-auto space-x-2 justify-end">
              {Object.entries(mapping).map(([slug, title]) => <Link className={`${currentPage === title ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`} role="presentation" to={slug}>{title}</Link>)}
            </ul>
          </nav>

          {/* for smaller devcies */}
          <div className="block sm:hidden w-full mt-5 ">
            <div className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full" onClick={() => setDropDown(!dropDown)} role="presentation">
              <div className="flex space-x-2">
                <p className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer " id="textClicked">{text}</p>
              </div>
              <svg className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} fill="none" height={24} id="ArrowSVG" viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>

            <div className=" relative z-10">
              <ul className={`${dropDown ? 'hidden' : 'flex'} flex-col font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`} id="list">
                {Object.entries(mapping).map(([slug, title]) => <Link className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal" onClick={() => setSelectedText(title)} role="presentation" to={slug}>{title}</Link>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Badges = () => (
  <div className="flex -space-x-2 overflow-hidden">
    <StaticImage
      alt="Alessandro Defendenti"
      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
      src="../../assets/images/aledefe.jpg"
    />
    <StaticImage
      alt="Luca Tagliabue"
      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
      src="../../assets/images/lucataglia.jpg"
    />
  </div>
);
export default Header;

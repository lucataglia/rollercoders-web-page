import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import constants from '../../constants';

const {
  HOME_PAGE_SLUG,
  mapping,
} = constants;

const Header = ({ page }) => {
  const currentPage = mapping[page];

  return (
    <>
      <Helmet defer={false} title="Rollercoders">
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
      </Helmet>

      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white rounded shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <Link className="flex items-center space-x-3 lg:pr-16 z-100" to={HOME_PAGE_SLUG}>
              <Badges />

              <h2 className="font-normal text-2xl leading-6 text-gray-800">Rollercoders</h2>

            </Link>

            {/* Menu for medium and plus sized devices */}
            <ul className="hidden sm:flex flex-auto space-x-2 justify-end">
              {Object.entries(mapping).map(([slug, title]) => <Link className={`${currentPage === title ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`} role="presentation" to={slug}>{title}</Link>)}
            </ul>

            {/* Menu for smaller devcies */}
            <div className="sm:hidden">
              <SmallDevicesMenu currentPage={currentPage} />
            </div>
          </nav>

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

// Mobile menu, show/hide based on menu open state.

// Entering: "duration-150 ease-out"
//   From: "opacity-0 scale-95"
//   To: "opacity-100 scale-100"
// Leaving: "duration-100 ease-in"
//   From: "opacity-100 scale-100"
//   To: "opacity-0 scale-95"

const SmallDevicesMenu = ({ currentPage }) => (
  <Popover>
    <div className="relative">
      <nav aria-label="Global" className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="-mr-2 flex items-center">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon aria-hidden="true" className="h-6 w-6" />
              </Popover.Button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
        focus
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-end">
            <div className="mt-1">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XIcon aria-hidden="true" className="h-6 w-6" />
              </Popover.Button>
            </div>
          </div>

          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(mapping).map(([slug, title]) => {
              const isCurrent = currentPage === title;

              return (
                <Link
                  key={title}
                  className={`${isCurrent ? 'bg-indigo-300 text-white cursor-default' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 rounded-md text-base font-medium`}
                  to={slug}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"

          >
            {'<Rollercoders />'}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>

);

export default Header;

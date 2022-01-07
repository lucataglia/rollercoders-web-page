import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import constants from '../constants';

import 'normalize.css';

const Home = () => (
  <Layout page={constants.HOME_PAGE_SLUG}>
    <Example />
    <Carousel />
  </Layout>
);

const Example = () => (
  <div className="flex relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">A group of</span>
              {' '}
              <span className="block text-indigo-600 xl:inline">software developer</span>
              {' '}
              <span className="block xl:inline">from Milan</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              In this web site you can find all our major projects other than all the resources to get in touch with
              us. This site was made using
              {' '}
              <Link className="underline hover:text-zinc-700" target="_blank" to="https://www.gatsbyjs.com/">Gatsby</Link>
              {' '}
              and
              {' '}
              <Link className="underline hover:text-zinc-700" target="_blank" to="https://tailwindcss.com/">Tailwind</Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
);

export default Home;

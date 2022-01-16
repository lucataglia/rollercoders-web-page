import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import CodeBlock from './code-block';
import Layout from '../Layout';
import constants from '../../constants';
import TerminalIco from '../../assets/icons/terminal.svg';
import MobileIco from '../../assets/icons/mobile.svg';

const mappingIco = {
  mobile: <MobileIco />,
  terminal: <TerminalIco />,
};

const components = {
  pre: CodeBlock,
};

const MdxLayout = ({ children, pageContext: { frontmatter } }) => (
  <Layout bodyClassName="r-projects" page={constants.PROJECTS_SLUG}>
    <Tabs currentFrontmatter={frontmatter} />

    <article className="r-projects__body p-8 md:p-16">
      <MDXProvider components={components}>{ children }</MDXProvider>
    </article>
  </Layout>
);

const Tabs = ({ currentFrontmatter }) => {
  const { allMdx: { edges } } = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              date
              icon,
              linkedin
              slug
              title
            }
          }
        }
      }
    }
  `);

  const frontmatters = edges
    .map(({ node: { frontmatter } }) => frontmatter)
    .sort(({ order: a }, { order: b }) => a - b);

  return (
    <div>
      <div className="hidden relative w-11/12 mx-auto rounded">
        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
          <svg className="icon icon-tabler icon-tabler-selector" fill="none" height={24} stroke="#A0AEC0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" stroke="none" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>

        <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
          {frontmatters.map(({ title, slug }) => (
            <option
              key={slug}
              className="text-sm text-gray-600"
              selected={slug === currentFrontmatter.slug}
            >
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="justify-between flex-wrap bg-white rounded shadow">
        <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
          <ul className="flex overflow-auto">
            {frontmatters.map(({ title, slug, icon }) => {
              const isCurrent = slug === currentFrontmatter.slug;

              return (
                <Link to={slug}>
                  <li className={isCurrent ? 'text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal' : 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800'}>
                    <div className="flex gap-4">
                      <span className="mb-3 cursor-pointer whitespace-nowrap">{title}</span>
                      {mappingIco[icon]}
                    </div>
                    {isCurrent && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MdxLayout;

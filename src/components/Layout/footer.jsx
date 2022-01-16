import React, { useState } from 'react';
import { Link } from 'gatsby';
import MultiButton from '../MultiButton';
import UserInfo from '../UserInfo';

const LUCA = 2;
const ALESSANDRO = 1;

const Footer = () => {
  const [selected, setSelected] = useState(LUCA);

  return (
    <footer className="r-footer">
      <div className="r-footer__body--large">
        <Alessandro />
        <Luca />
      </div>

      <div className="r-footer__body--small">

        <MultiButton
          onClickOne={() => setSelected(ALESSANDRO)}
          onClickTwo={() => setSelected(LUCA)}
          selected={selected}
        />
        {selected === ALESSANDRO && <Alessandro />}
        {selected === LUCA && <Luca /> }
      </div>

      <div className="r-footer__copyright">
        <div>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copyright: Rollercoders
        </div>

        <div>
          Powered by
          {' '}
          <Link className="r-underline" target="_blank" to="https://www.gatsbyjs.com/">Gatsby</Link>
          {' '}
          and
          {' '}
          <Link className="r-underline" target="_blank" to="https://tailwindcss.com/">Tailwind</Link>
        </div>
      </div>
    </footer>
  );
};

const Luca = () => (
  <UserInfo
    aforisma="Prefer duplication over the wrong abstraction"
    github="https://github.com/lucataglia"
    gmail="mailto:tagliabue.luca2@gmail.com"
    linkedin="https://it.linkedin.com/in/luca-tagliabue-77a779118"
    stackOverflow="https://stackoverflow.com/users/9099269/lucataglia"
    urlAforisma="https://kentcdodds.com/blog/aha-programming"
  />
);

const Alessandro = () => (
  <UserInfo
    aforisma="The future is still so much bigger than the past"
    github="https://it.linkedin.com/in/alessandro-defendenti-8b4879b5"
    gmail="https://github.com/TheFe91"
    linkedin="https://stackoverflow.com/users/6326261/ale-thefe"
    stackOverflow="#"
  />
);

export default Footer;

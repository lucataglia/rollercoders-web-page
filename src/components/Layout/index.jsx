import React from 'react';
import Header from './header';
import Footer from './footer';

import '../../styles/styles.scss';

const Layout = ({ children, page }) => (
  <>
    <Header page={page} />

    {children}

    <Footer />
  </>
);

export default Layout;

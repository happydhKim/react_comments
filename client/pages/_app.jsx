import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const App = ({ Component }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      <title>댓글 달아봐요</title>
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType
};

export default App;

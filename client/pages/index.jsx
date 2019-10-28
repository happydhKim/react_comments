import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Main = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      <title>댓글 달아봐요</title>
    </Head>
    <AppLayout>
      <div>메인 페이지 입니다.</div>
    </AppLayout>
  </>
);

export default Main;

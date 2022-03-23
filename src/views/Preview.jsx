import Changelog from '../components/Preview/Changelog';
import Header from '../components/header/Header';
import HeroPreview from '../components/hero/HeroPreview';
import HomeDemos from '../components/Preview/HomeDemos';
import PageDemos from '../components/Preview/PageDemos';
import PreviewFooter from '../components/footer/PreviewFooter';
import Purshase from '../components/Preview/Purshase';
import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';

const Preview = () => {
  useDocumentTitle(' Open Pad ');
  return (
    <div>
      <Header />
      <HeroPreview />
      <HomeDemos />
      <PageDemos />
      <Changelog />
      <Purshase />
      <PreviewFooter />
    </div>
  );
};

export default Preview;

import React from 'react';
import Header from '../components/Header';
import AboutHeader from '../components/AboutPage/AboutHeader';
import Features from '../components/AboutPage/Features';
import FeaturesTwo from '../components/AboutPage/FeaturesTwo';
import Plans from '../components/AboutPage/Plans';
import InvoiceSection from '../components/InvoiceSection'
import Footer from '../components/Footer'
import WhyBelarus from '../components/AboutPage/WhyBelarus';

export default () => {
    return (
      <>
        <Header headerType={'about-page'}/>
        <AboutHeader />
        <Features />
        <Plans />
        <FeaturesTwo />
        <WhyBelarus />
        <InvoiceSection />
        <Footer />
      </>
    );
  }
  
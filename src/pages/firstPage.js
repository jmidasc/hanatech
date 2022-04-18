import React from 'react';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import GuideFirst from '../components/GuideFirst';
import GuideSecond from '../components/GuideSecond';
import GuideThird from '../components/GuideThird'
import GoodSidesFirst from '../components/GoodSidesFirst'
import GoodSidesSecond from '../components/GoodSidesSecond'
import GuideFourth from '../components/GuideFourth'
import GuideFifth from '../components/GuideFifth'
import CustomerSays from '../components/CustomerSaying';
import OffshoreServices from '../components/OffshoreServices';
import Technologies from '../components/Technologies';
import InvoiceSection from '../components/InvoiceSection'
import Footer from '../components/Footer'

export default () => {
    return (
      <>
        <Header headerType={'first-page'}/>
        <MainBanner />
        <GuideFirst />
        <GuideSecond />
        <GuideThird />
        <GoodSidesFirst />
        <GuideFourth />
        <GuideFifth />
        <GoodSidesSecond />
        <CustomerSays />
        <OffshoreServices />
        <Technologies />
        <InvoiceSection />
        <Footer />
      </>
    );
  }
  
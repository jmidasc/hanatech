import React from "react";
import Carousel from "react-multi-carousel";

import "./style.scss";
import "./multiCarouselStyles.css";

import zon from "../images/new_our_technologies_slide_amazon.jpg";
import oid from "../images/new_our_technologies_slide_android.jpg";
import ure from "../images/new_our_technologies_slide_azure.jpg";
import gle from "../images/new_our_technologies_slide_google.jpg";
import oku from "../images/new_our_technologies_slide_heroku.jpg";
import lid from "../images/new_our_technologies_slide_hyblid.jpg";
import mg4 from "../images/new_our_technologies_slide_img4.jpg";
import lar from "../images/new_our_technology_slide_angular.jpg";
import ios from "../images/new_our_technology_slide_ios.jpg";
import ava from "../images/new_our_technology_slide_java.jpg";
import ode from "../images/new_our_technology_slide_node.jpg";
import php from "../images/new_our_technology_slide_php.jpg";
import hon from "../images/new_our_technology_slide_python.jpg";
import act from "../images/new_our_technology_slide_react.jpg";
import vue from "../images/new_our_technology_slide_vue.jpg";

const imgList = [zon, oid, ure, gle, oku, lid, mg4, lar, ios, ava, ode, php, hon, act, vue];

export default () => {

  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 6
    }
  }

  return (
    <section className="main-container">
      <div className="auto-container">
        <div className="title-container">
          <h2>Our technologies</h2>
          <div className="bottom"></div>
        </div>
        <div className="intro">
          HanaTech’s software solutions development services make use of
          the latest technologies. Currently, every company encounters the
          demands
          <br />
          of embracing digital transformation. Whether your firm seeks to employ
          artificial intelligence to streamline your value chain processes or
          create an
          <br />
          Internet of Things environment using smart contracts, our software
          developers can provide all the main tech stacks to assist you along
          the way.
          <br />
          From its humble beginnings, HanaTech has leveraged emerging
          technologies to help our customers with proven strategies and
          enterprise-
          <br />
          wide software solutions.
          <br />
          <br />
          Frontend: AngularJS, ReactJS, VueJS.
          <br />
          <br />
          <br />
          Backend: Java, NodeJS, Python, PHP, .NET.
          <br />
          <br />
          <br />
          Mobile: iOS, Android, Hybrid.
          <br />
          <br />
          <br />
          Cloud: Amazon Web Services, Google App Engine, Microsoft Azure,
          Heroku.
          <br />
          <br />
          <br />
        </div>
        <div className="bottom-container">
            <div className="img-container">
              <Carousel responsive={responsive} arrows={false} autoPlay={true} infinite={true} autoPlaySpeed={1500}>
                {imgList.map((name) => ( <img className="img-display" alt="" src={name}/>))}
              </Carousel>
            </div>
          </div>
        </div>
    </section>
  );
};

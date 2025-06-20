import Head from 'next/head';
import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OneStepAwaySection from "./components/OneStepAwaySection";
import ColorImageSection1 from "./components/ColorImageSection1";
import ColorImageSection2 from "./components/ColorImageSection2";
import ColorImageSection3 from "./components/ColorImageSection3";
import TestimonialSection from "./components/TestimonialSection";
import ComboImageTextGrid from "./components/ComboImageTextGrid";
import CourseSliderSection from "./components/CourseSliderSection";
import NumbersStatisticsSection from "./components/NumbersStatisticsSection";
import TeachersSection from "./components/TeachersSection";
import BrandsPlatformsSection from "./components/BrandsPlatformsSection";
import CTASection from "./components/CTASection";
import FooterNewsletterSection from "./components/FooterNewsletterSection";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Phoenix Course - Webflow Ecommerce website template</title>
        <meta name="description" content="Create a sleek, modern online presence with Phoenix Course Webflow Template - the perfect solution for all your online course needs." />
        <meta property="og:title" content="Home | Phoenix Course - Webflow Ecommerce website template" />
        <meta property="og:description" content="Create a sleek, modern online presence with Phoenix Course Webflow Template - the perfect solution for all your online course needs." />
        <meta property="og:image" content="/63bc1e3983475d58fd4fd957/63bee27e5f811083d090eb70_OG.jpg" />
        <meta property="twitter:title" content="Home | Phoenix Course - Webflow Ecommerce website template" />
        <meta property="twitter:description" content="Create a sleek, modern online presence with Phoenix Course Webflow Template - the perfect solution for all your online course needs." />
        <meta property="twitter:image" content="/63bc1e3983475d58fd4fd957/63bee27e5f811083d090eb70_OG.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/63bc1e3983475d58fd4fd957/63bee59b2af6428ddd4f1fe5_32%20x32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/63bc1e3983475d58fd4fd957/63bee59d073b2cfe60ac0b82_256%20x256.png" />
        {/* <link href="/63bc1e3983475d58fd4fd957/css/phoenix-course.webflow.a18353b96.css" rel="stylesheet" type="text/css" /> */}
      </Head>
      <Navbar />
      <HeroSection />
      <OneStepAwaySection />
      <ColorImageSection1 />
      <ColorImageSection2 />
      <ColorImageSection3 />
      <TestimonialSection />
      <ComboImageTextGrid />
      <CourseSliderSection />
      <NumbersStatisticsSection />
      <TeachersSection />
      <BrandsPlatformsSection />
      <CTASection />
      <FooterNewsletterSection />
    </>
  );
};

export default Home; 
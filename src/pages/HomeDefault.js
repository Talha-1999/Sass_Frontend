import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import HeaderOne from "../common/header/HeaderOne";
// import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import Separator from "../elements/separator/Separator";
// import TimelineOne from "../elements/timeline/TimelineOne";
// import VideoItem from "../elements/video/VideoItem";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import AboutOne from "../elements/about/AboutOne";
import PricingOne from "../elements/pricing/PricingOne";
var BlogListData = BlogClassicData.slice(0, 3);

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: [
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
    ],
  },
];

const HomeDefault = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const about = useRef(null);
  const services = useRef(null);
  const pricing = useRef(null);
  const portfolio = useRef(null);
  const blog = useRef(null);

  const leng = useSelector((state) => state.languages);

  useEffect(() => {
    i18n.changeLanguage(leng);
  }, [leng]);


  useEffect(() => {
    dispatch({ type: 'GET_PACKAGE' })
  }, [])

  const scrollToSection = (event) => {
    window.scrollTo({
      top: event.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
    <>
      <SEO title="Micro Band" />
      <main
        className="page-wrapper"
        id="main"
        style={leng == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
          scroll={scrollToSection}
          aboutt={about}
          service={services}
          pricing={pricing}
          portfolio={portfolio}
          blog={blog}
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 variation-default height-850 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-3.jpg)`,
          }}
        >
          {/* <p>{t('Thanks.1')}</p>
                    <p>{t('Why.1')}</p> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <span className="subtitle">{t("Home.1")}</span>
                  <h1 className="title display-one">
                    {t("Home.2")} <span>{t("Home.3")}</span>.
                  </h1>
                  <p className="description">{t("Home.4")}</p>
                  <div className="button-group">
                    <a
                      className="btn-default btn-medium round btn-icon"
                      href="https://cpanel.microband.cloud"
                    >
                      {t("Home.5")}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </a>
                    <Link
                      className="btn-default btn-medium btn-border round btn-icon"
                      to="/contact"
                    >
                      {t("Home.6")}{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}
        <div ref={about} className="about">
          <AboutOne />
        </div>

        {/* Start Service Area  */}
        <div
          className="rn-service-area rn-section-gap"
          id="service"
          ref={services}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle={t("ServiceSection.subtitle")}
                  title={t("ServiceSection.title")}
                  description={t("ServiceSection.description")}
                />
              </div>
            </div>
            <ServiceOne
              serviceStyle="service__style--1 bg-color-blackest radius mt--25"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        {/* Pricing Table */}
        <div
          className="rwt-pricing-area rn-section-gap"
          ref={pricing}
          id="pricing"
        >
          <div className="container">
            <div className="row mb--40 mb_sm--0">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle={t("Pricing.PB")}
                  title={t("Pricing.PH")}
                  description={t("Pricing.PD")}
                />
              </div>
            </div>
            <PricingOne />
          </div>
        </div>
        {/* Start Portfolio Area  */}
        <div
          id="portfolio"
          ref={portfolio}
          className="rwt-portfolio-area rn-section-gap"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle={t("Portfolio.PHB")}
                  title={t("Portfolio.PH")}
                  description={t("Portfolio.PD")}
                />
              </div>
            </div>
            <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
          </div>
        </div>
        {/* End Portfolio Area  */}

        <Separator />
        {/* Start Timeline Area  */}
        {/* <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Working Process"
                                    title="Business Working Process."
                                    description="We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row mt_dec--20">
                            <div className="col-lg-12">
                                <TimelineOne />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* End Timeline Area  */}

        {/* Start Video Area  */}
        {/* <div className="rwt-video-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            {PopupData.map((item) => (
                                <div className="col-lg-12" key={item.id}>
                                    <VideoItem galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
        {/* End Video Area  */}

        <Separator />

        {/* Start Elements Area  */}
        {/* <div className="rwt-testimonial-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Client Feedback"
                  title="Our Clients Feedback."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <TestimonialThree teamStyle="" />
          </div>
        </div> */}
        {/* End Elements Area  */}

        <Separator />
        {/* <div className="blog-area rn-section-gap" ref={blog} id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Latests News"
                  title="Our Latest News."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <div className="row row--15">
              {BlogListData.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
                >
                  <BlogList StyleVar="box-card-style-default" data={item} />
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Start Elements Area  */}
        {/* <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div> */}
        {/* End Elements Area  */}

        <FooterOne />
        <Copyright />
      </main>
    </>
  );
};
export default HomeDefault;

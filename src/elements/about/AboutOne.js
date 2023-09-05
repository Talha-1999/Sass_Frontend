import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Typed from "react-typed";

const AboutOne = () => {
  const { t, i18n } = useTranslation();

  const leng = useSelector((state) => state.languages);

  useEffect(() => {
    i18n.changeLanguage(leng);
  }, [leng]);
  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/about-1.png"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="section-title">
                <h2 className="title">
                  {t("About.1")} <br />{" "}
                  <Typed
                    className="theme-gradient"
                    strings={["Landingpage", "Finance.", "Agency."]}
                    typeSpeed={80}
                    backSpeed={5}
                    backDelay={1000}
                    loop
                  />
                </h2>
                <p>{t("About.2")}</p>
                <p>{t("About.3")}</p>
                <div className="read-more-btn mt--40">
                  <a className="btn-default" href="#">
                    <span>{t("About.4")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;

import React from "react";
import { FiCheck } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PricingOne = () => {
  const { t, i18n } = useTranslation();

  const packagess = useSelector((state) => state.packages)

  return (
    <div className="row row--30">
      {/* Start PRicing Table Area  */}
      {packagess.length && packagess.map((value) => {
        return (
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rn-pricing">
              <div className="pricing-table-inner">
                <div className="pricing-header">
                  {/* <h4 className="title">{t("Pricing.P1H")}</h4> */}
                  <h4 className="title">{value.name}</h4>
                  <div className="pricing">
                    <div className="price-wrapper">
                      <span className="currency">{t("Pricing.Pr")}</span>
                      <span className="price">{value.price}</span>
                    </div>
                    <span className="subtitle">{value.expiryDate}</span>
                    {/* <span className="subtitle">{t("Pricing.Pm")}</span> */}
                  </div>
                </div>
                <div className="pricing-body">
                  {value.description.length && value.description.map((val) => (
                    <ul className="list-style--1">
                      <li>
                        <FiCheck /> {val}
                      </li>
                      {/* <li>
                        <FiCheck /> {t("Pricing.P1.2")}
                      </li>
                      <li>
                        <FiCheck /> {t("Pricing.P1.3")}
                      </li>
                      <li>
                        <FiCheck /> {t("Pricing.P1.4")}
                      </li> */}
                    </ul>
                  )
                  )}
                  {/* <ul className="list-style--1">
                    <li>
                      <FiCheck /> {t("Pricing.P1.1")}
                    </li>
                    <li>
                      <FiCheck /> {t("Pricing.P1.2")}
                    </li>
                    <li>
                      <FiCheck /> {t("Pricing.P1.3")}
                    </li>
                    <li>
                      <FiCheck /> {t("Pricing.P1.4")}
                    </li>
                  </ul> */}
                </div>
                <div className="pricing-footer">
                  <a className="btn-default btn-border" href={"https://cpanel.microband.cloud"}>
                    {t("Pricing.PB")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}

      {/* <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing active">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">{t("Pricing.P2H")}</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="currency">{t("Pricing.Pr")}</span>
                  <span className="price">199</span>
                </div>
                <span className="subtitle">{t("Pricing.Pm")}</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> {t("Pricing.P2.1")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P2.2")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P2.3")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P2.4")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P2.5")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P2.6")}
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a className="btn-default" href={"https://cpanel.microband.cloud"}>
                {t("Pricing.PB")}
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}

      {/* <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">{t("Pricing.P3H")}</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="currency">{t("Pricing.Pr")}</span>
                  <span className="price">299</span>
                </div>
                <span className="subtitle">{t("Pricing.Pm")}</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> {t("Pricing.P3.1")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P3.2")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P3.3")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P3.4")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P3.5")}
                </li>
                <li>
                  <FiCheck /> {t("Pricing.P3.6")}
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a className="btn-default btn-border" href={"https://cpanel.microband.cloud"}>
                {t("Pricing.PB")}
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* End PRicing Table Area  */}
    </div>
  );
};
export default PricingOne;

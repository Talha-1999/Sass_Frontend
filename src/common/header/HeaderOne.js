import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderOne = ({
  btnStyle,
  HeaderSTyle,
  scroll,
  aboutt,
  service,
  pricing,
  portfolio,
  blog,
}) => {
  const ref = useRef();
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;
  const { clientHeight } = ref;

  const leng = useSelector((state) => state.languages);

  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const checkChange = (value) => {
    setCheck(value);
  };

  return (
    <>
      <header
        className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}
        style={leng == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <Logo
                image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
              />
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav
                    scroll={scroll}
                    about={aboutt}
                    service={service}
                    pricing={pricing}
                    portfolio={portfolio}
                    blog={blog}
                  />
                </nav>
                <div className="header-btn">
                  <a href={"https://cpanel.microband.cloud"} className={`btn-default ${btnStyle}`}>
                    Login
                  </a>
                </div>
                {/* <div className="header-btn">
                                    <Link to={"/login"} className={`btn-default ${btnStyle}`}>Login</Link>
                                </div> */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu />
                    </span>
                  </div>
                </div>
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderOne;

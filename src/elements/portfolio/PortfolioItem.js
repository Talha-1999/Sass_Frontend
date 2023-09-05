import React from 'react';
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    let link1 = "https://backend.microband.cloud/uploads/themes/covido-html/index.html"
    let link2 = "https://backend.microband.cloud/uploads/themes/templatemo_564_plot_listing/index.html"
    let link3 = "https://backend.microband.cloud/uploads/themes/html/index.html"
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <a href={`${portfolio.id == 1 && link1 || portfolio.id == 2 && link2 || portfolio.id == 3 && link3}`}>
                            <img className="img-fluid" src={portfolio.portfolioImage} alt="Portfolio-01" />
                        </a>
                    </figure>
                    {/* <Link to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`} className="rwt-overlay"></Link> */}
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <Link to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}>
                            {portfolio.title}
                        </Link>
                    </h5>
                    <span className="subtitle b2 text-capitalize">{portfolio.category}</span>
                </div>
            </div>
        </div>
    )
}
export default PortfolioItem;
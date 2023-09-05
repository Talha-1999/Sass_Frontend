import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as action from '../../store/reducer'

const Nav = ({ scroll, about, service, pricing, portfolio, blog }) => {
    const dispatch = useDispatch()
    const leng = useSelector((state) => state.languages)

    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(leng)
    }, [leng])


    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">{t("NavBar.1")}</Link>
                
            </li>

            <li style={{ cursor: 'pointer' }} onClick={() => scroll(about)}><a>{t("NavBar.2")}</a></li>

            {/* <li className="has-droupdown" style={{ cursor: 'pointer' }} onClick={() => scroll(service)}>
                <a>{t("NavBar.3")}</a>
            </li> */}

            <li className="has-droupdown" style={{ cursor: 'pointer' }} onClick={() => scroll(pricing)}>
                <a>{t("NavBar.4")}</a></li>

            <li className="has-droupdown" style={{ cursor: 'pointer' }} onClick={() => scroll(portfolio)}><a>{t("NavBar.5")}</a></li>

            {/* <li className="has-droupdown" style={{ cursor: 'pointer' }} onClick={() => scroll(blog)}><a>{t("NavBar.6")}</a></li> */}
            {/* <Link to="/blog-grid">Blog</Link> */}
            <li className="has-droupdown"><Link to="/contact">{t("NavBar.7")}</Link></li>
            <li className="has-droupdown"><Link to="/">{t("NavBar.8")}</Link>
                <ul className="submenu">
                    <li onClick={() => {
                        dispatch(action.Language('en'))
                    }}><a role="button">English</a></li>
                    <li onClick={() => {
                        dispatch(action.Language('ar'))
                    }}><a role="button">Arabic</a></li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav;

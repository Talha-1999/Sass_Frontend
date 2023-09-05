import React, { useState } from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Register = () => {
    const router = useHistory();
    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState({ fullname: '', email: '', password: '', phone: '' })

    const LoginPush = (e) => {
        e.preventDefault()
        router.push("/login")
    }

    const onChangeForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    const onHandleSubmit = () => {
        dispatch({ type: 'SUBMIT_SIGNUP_FORM', payload: formValue })
    }
    return (
        <>
            <SEO title="Marketing" />
            <main className="page-wrapper">

                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />


                {/* Start form Area  */}
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-6">
                                <h1> Register</h1>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        required
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        onChange={onChangeForm}

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        onChange={onChangeForm}

                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        required
                                        onChange={onChangeForm}

                                    />

                                </div>
                                <div className="button-group">
                                    <button className="btn-default btn-large" onClick={LoginPush}>Login</button>
                                    <button className="btn-default btn-large" onClick={onHandleSubmit}>Register</button>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* End form  Area  */}



                <FooterThree />

            </main>
        </>
    )
}

export default Register;
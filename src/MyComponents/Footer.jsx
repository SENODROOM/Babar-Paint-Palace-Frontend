import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ProfileInformation } from '../Data/ProfileInfo';
import { Link } from "react-router-dom";
import { CustomerCareOptions } from '../Data/footer';

function Footer() {
    return (
        <footer>
            <div className="foot">
                <div className="footer-contact-us">

                    <div className="footer-contact-us-title">
                        Follow Us
                    </div>

                    <div className="footer-contact-us-options">

                        <div className="footer-contact-us-option">
                            <div className="circle-for-style">
                                <Link to={ProfileInformation.instagram} target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </div>
                        </div>

                        <div className="footer-contact-us-option">
                            <div className="circle-for-style">
                                <Link to={ProfileInformation.facebook} target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>

                        <div className="footer-contact-us-option">
                            <div className="circle-for-style">
                                <Link to={ProfileInformation.twitter} target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                            </div>
                        </div>

                        <div className="footer-contact-us-option">
                            <div className="circle-for-style">
                                <Link to={`mailto:${ProfileInformation.email}`}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="chuchu-bestoo">
                    <div className="footer-customer-care-title">
                        Customer Care
                    </div>
                    <div className="footer-customer-care">
                        {CustomerCareOptions.map((element, index) => (
                            <div key={index}>
                                <Link to={element.path}>
                                    {element.option}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="container">
                <p>© <strong>Canvas Market</strong> — All Rights are Reserved</p>
            </div>
        </footer>
    );
}


export default Footer;


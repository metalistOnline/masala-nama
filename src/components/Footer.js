import Map from './Map';
import '../styles/components/Footer.scss';
import NewWinLink from './Utils/NewWinLink';

// Export Footer component as default
export default function Footer() {
    // Return the component to be rendered
    return (
        <div
            className="container-fluid bg-dark text-light footer wow fadeIn"
            data-wow-delay="0.1s"
        >
            <img className="logo-footer" src="/img/logo.png" />
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 footer-text">
                        <i class="fa fa-address-book text-primary font-1o5rem"></i>
                        &nbsp;&nbsp;
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Contact
                        </h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3"></i>
                            <NewWinLink href="https://www.google.com/maps/place/MASALA+NAMA/@26.4756056,74.6350998,20z/data=!4m6!3m5!1s0x396be74419a69ee5:0x2bd1c2f662bb4b04!4b1!8m2!3d26.4759272!4d74.6354645">
                                Shop #2, Ashok Nagar,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ana
                                Sagar Link Rd,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adjacent
                                to City Hospital,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mali
                                Mohalla, Ajmer,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rajasthan
                                - 305001
                            </NewWinLink>
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3"></i>
                            <a href="tel:+91-9829101401">+91-9829101401</a>
                        </p>
                        {/* <p className="mb-2">
                            <i className="fa fa-envelope me-3"></i>
                            <a href="mailto:info@example.com">
                                info@example.com
                            </a>
                        </p> */}
                        <p className="mb-2">
                            <i className="fab fa-facebook-f me-3"></i>{' '}
                            <NewWinLink
                                href="https://www.facebook.com/profile.php?id=100089047175484&mibextid=ZbWKwL"
                                className="text-uppercase"
                            >
                                masala-nama
                            </NewWinLink>
                        </p>
                        {/* <div className="d-flex pt-2">
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://instagram.com/masala_nama?igshid=ZDdkNTZiNTM="
                                target="_blank"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>{' '}
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.facebook.com/profile.php?id=100089047175484&mibextid=ZbWKwL"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-6 footer-text">
                        <i class="fa fa-clock text-primary font-1o5rem"></i>
                        &nbsp;&nbsp;
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Timings
                        </h4>
                        <h5 className="text-light fw-normal">
                            <i class="fa fa-calendar-week me-3 font-1rem"></i>
                            Monday - Friday
                        </h5>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01:00
                            PM - 11:00 PM
                        </p>
                        <h5 className="text-light fw-normal">
                            <i class="fa fa-calendar-day me-3 font-1rem"></i>
                            Saturday - Sunday
                        </h5>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12:30
                            PM - 11:30 PM
                        </p>
                        <p className="mb-2">
                            <i className="fab fa-instagram me-3"></i>
                            <NewWinLink
                                href="https://instagram.com/masala_nama?igshid=ZDdkNTZiNTM="
                                className="text-uppercase"
                            >
                                masala_nama
                            </NewWinLink>
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <i class="fa fa-map-marked-alt text-primary font-1o5rem"></i>
                        &nbsp;&nbsp;
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Location
                        </h4>
                        <div className="position-relative mx-auto">
                            {/* <Map /> */}
                            <a
                                target="_blank"
                                href="https://www.google.com/maps/place/MASALA+NAMA/@26.4756056,74.6350998,20z/data=!4m6!3m5!1s0x396be74419a69ee5:0x2bd1c2f662bb4b04!4b1!8m2!3d26.4759272!4d74.6354645"
                            >
                                <img
                                    className="img-fluid map-center"
                                    src="img/map.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            Designed & Maintained with 💛 by{' '}
                            <a
                                className="border-bottom"
                                href="http://polls.delabs.co.in"
                            >
                                DE Labs
                            </a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#hero">Home</a>
                                <a href="#offers">Offers</a>
                                <a href="#gallery">Gallery</a>
                                <a href="#menu">Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

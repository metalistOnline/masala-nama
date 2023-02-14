import '../styles/components/Header.scss';

// Export Header component as default
export default function Header() {
    // Return the component to be rendered
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <h1 className="text-primary m-0">
                    <i className="fa fa-utensils me-3"></i>Masala Nama
                </h1>
                {/* <img src="img/logo.png" alt="Logo">  */}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                    {/* <a href="/" className="nav-item nav-link active">
							Home
						</a>{' '}
						<a href="#" className="nav-item nav-link">
							Offers
						</a>{' '}
						<a href="#" className="nav-item nav-link">
							Menu
						</a>{' '}
						<a href="#" className="nav-item nav-link">
							Menu
						</a> */}
                    {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div> */}
                    {/* <a href="#" className="nav-item nav-link">
							Contact
						</a> */}
                    <a href="tel:+91-9829101401" className="nav-item nav-link">
                        Contact us at +91-9829101401
                    </a>
                </div>
                <a
                    href="/order"
                    className="btn btn-primary py-2 px-4 order-button"
                >
                    Order Online
                </a>
            </div>
        </nav>
    );
}

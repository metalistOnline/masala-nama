import '../styles/components/Header.scss';
import NewWinLink from './Utils/NewWinLink';

// Export Header component as default
export default function Header() {
    // Return the component to be rendered
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="#" className="navbar-brand p-0">
                <img src="img/logo-sml.png" alt="Logo" className="m-1" />
                <h1 className="text-primary m-0">
                    {/* <i className="fa fa-utensils me-3"></i> */}
                    Masala Nama
                </h1>
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
                {/* <a href="#" className="btn btn-primary py-2 px-4 order-button">
                    Order Online
                </a> */}
                {/* <NewWinLink
                    href="https://www.zomato.com/ajmer/masala-nama-ana-sagar-lake"
                    className="btn btn-primary py-2 px-4 order-button "
                >
                    <img
                        src="img/Zomato-Icon-1.jpg"
                        alt="Zomoto-Logo"
                        className="m-1 zomato-Logo"
                    />
                    Zomato
                </NewWinLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NewWinLink
                    href="https://www.swiggy.com/restaurants/masala-nama-sagar-link-road-north-ajmer-ajmer-659627"
                    className="btn btn-primary py-2 px-4 order-button "
                >
                    <img
                        src="img/Swiggy-Icon.png"
                        alt="Swiggy-Logo"
                        className="m-1 swiggy-Logo"
                    />
                    Swiggy
                </NewWinLink> */}
                <label className="nav-item nav-link">Order Online ->> </label>
                <NewWinLink href="https://www.zomato.com/ajmer/masala-nama-ana-sagar-lake">
                    <img
                        src="img/Zomato-Icon-2.jpg"
                        alt="Zomoto-Logo"
                        className="m-1 zomato-Logo"
                    />
                </NewWinLink>
                <NewWinLink href="https://www.swiggy.com/restaurants/masala-nama-sagar-link-road-north-ajmer-ajmer-659627">
                    <img
                        src="img/Swiggy-Icon-2.jpg"
                        alt="Swiggy-Logo"
                        className="m-1 swiggy-Logo btn-primary"
                    />
                </NewWinLink>
            </div>
        </nav>
    );
}

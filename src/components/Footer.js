// Export Footer component as default
export default function Footer() {
	// Return the component to be rendered
	return (
		<div
			className="container-fluid bg-dark text-light footer wow fadeIn"
			data-wow-delay="0.1s">
			<div className="container py-5">
				<div className="row g-5">
					<div className="col-lg-3 col-md-6">
						<h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
							Company
						</h4>
						<a className="btn btn-link" href="#">
							About Us
						</a>{' '}
						<a className="btn btn-link" href="#">
							Contact Us
						</a>{' '}
						<a className="btn btn-link" href="#">
							Reservation
						</a>{' '}
						<a className="btn btn-link" href="#">
							Privacy Policy
						</a>{' '}
						<a className="btn btn-link" href="#">
							Terms & Condition
						</a>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
							Contact
						</h4>
						<p className="mb-2">
							<i className="fa fa-map-marker-alt me-3"></i>SHOP# 2, Ashok Nagar,
							Ana Sagar Link Rd, adjacent to CITY HOSPITAL, Mali Mohalla, Ajmer,
							Rajasthan 305001
						</p>
						<p className="mb-2">
							<i className="fa fa-phone-alt me-3"></i>+012 345 67890
						</p>
						<p className="mb-2">
							<i className="fa fa-envelope me-3"></i>info@example.com
						</p>
						<div className="d-flex pt-2">
							<a
								className="btn btn-outline-light btn-social"
								href="https://instagram.com/masala_nama?igshid=ZDdkNTZiNTM="
								target="_blank">
								<i className="fab fa-instagram"></i>
							</a>{' '}
							<a
								className="btn btn-outline-light btn-social"
								href="https://www.facebook.com/profile.php?id=100089047175484&mibextid=ZbWKwL"
								target="_blank">
								<i className="fab fa-facebook-f"></i>
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
							Opening
						</h4>
						<h5 className="text-light fw-normal">Monday - Friday</h5>
						<p>01:00 PM - 11:00 PM</p>
						<h5 className="text-light fw-normal">Saturday - Sunday</h5>
						<p>12:30 PM - 11:30 PM</p>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
							Newsletter
						</h4>
						<div
							className="position-relative mx-auto"
							style={{ maxWidth: '400px' }}>
							<input
								className="form-control border-primary w-100 py-3 ps-4 pe-5"
								type="text"
								placeholder="Your email"
							/>
							<button
								type="button"
								className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
								SignUp
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="copyright">
					<div className="row">
						<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
							Designed & Maintained with 💛 by{' '}
							<a className="border-bottom" href="http://polls.delabs.co.in">
								DE Labs
							</a>
						</div>
						<div className="col-md-6 text-center text-md-end">
							<div className="footer-menu">
								<a href="/">Home</a> <a href="#">Cookies</a>{' '}
								<a href="#">Help</a>
								<a href="#">FAQs</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

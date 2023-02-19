import '../styles/components/Offers.scss';

export default function Offers() {
    return (
        <div
            id="offers"
            className="container-fluid position-relative p-0 offers-section bg-yellow"
        >
            <div className="container-fluid py-5 bg-yellow hero-center">
                <div className="container-fluid py-5">
                    <div className="row text-center mb-4 g-5">
                        <div className="mb-4">
                            <h1 class="section-title ff-secondary text-center offers-title fw-normal">
                                Offers
                            </h1>
                        </div>
                    </div>

                    <div className="row align-items-center g-5">
                        <div className="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-center">
                            <img
                                className="img-thumbnail offer-img mb-3"
                                src="/img/imgChickenLeg.jpg"
                                alt="Chicken Leg"
                                style={{ objectPosition: 'bottom' }}
                            />

                            <div className="offer-description">
                                <h3>15% off on all Walkin Orders upto 5000</h3>
                                {/* <h5>Nov 7, 2021 – Nov 30, 2021</h5> */}
                                <br />
                                <div>
                                    Walkin Directly and get flat 15% off on our
                                    entire range for a bill amount upto Rs.
                                    5000.
                                    <br />
                                    Get ordering now!
                                    <br />
                                    Use this code at the store:{' '}
                                    <strong>FLAT15</strong>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 text-center text-lg-center overflow-hidden">
                            <img
                                className="img-thumbnail offer-img mb-3"
                                src="/img/imgChicken2.jpg"
                                alt="Chicken"
                            />

                            <div className="offer-description">
                                <h3>20% off on all Walkin Orders above 5000</h3>
                                {/* <h5>Aug 3, 2021 – Aug 31, 2021</h5> */}
                                <br />
                                <div>
                                    Walkin Directly and get flat 20% off on our
                                    entire range for a bill greater than Rs.
                                    5000.
                                    <br />
                                    Get ordering now!
                                    <br />
                                    Use this code at the store:{' '}
                                    <strong>FLAT20</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

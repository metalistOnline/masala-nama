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
                                <h3>Flat 15% off through November</h3>
                                <h5>Nov 7, 2021 – Nov 30, 2021</h5>
                                <br />
                                <div>
                                    Order Direct from us on Thrive and get a
                                    flat 15% off through Entire November. Get
                                    ordering now!
                                    <br />
                                    Show this code at the store: REP
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
                                <h3>20% off on Thrive</h3>
                                <h5>Aug 3, 2021 – Aug 31, 2021</h5>
                                <br />
                                <div>
                                    Available only on Thrive
                                    <br />
                                    Show this code at the store: REP
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

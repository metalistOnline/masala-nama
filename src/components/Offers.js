import '../styles/components/Offers.scss';

export default function Offers() {
    return (
        <div class="container-fluid position-relative p-0 offers-section">
            <div class="container-fluid py-5 bg-dark  mb-5 hero-center">
                <div class="container-fluid my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-start">
                            <img
                                class="img-fluid1"
                                src="img/imgChickenLeg.jpg"
                                alt=""
                                height="400px"
                            />
                        </div>

                        <div class="col-xl-4 col-lg-6 text-center text-lg-end overflow-hidden">
                            <img
                                class="img-fluid1"
                                src="img/imgChicken2.jpg"
                                alt=""
                                height="400px"
                            />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>
                    <div class="row align-items-center g-5">
                        <div class="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-start">
                            <h3 class="offers-section-1">
                                Flat 15% off through November
                            </h3>
                            <br />
                            <h5 class="offers-section-1">
                                Nov 7, 2021 – Nov 30, 2021
                            </h5>
                            <br />
                            <div class="offers-section-1">
                                Order Direct from us on Thrive and get a flat
                                15% off through Entire November. Get ordering
                                now!
                                <br />
                                Show this code at the store: REP
                            </div>
                        </div>

                        {/* <div class="col-xl-4 col-lg-6 text-center text-lg-end overflow-hidden"> */}
                        <div class="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-start">
                            <h3 class="offers-section-1">20% off on Thrive</h3>
                            <br />
                            <h5 class="offers-section-1">
                                Aug 3, 2021 – Aug 31, 2021
                            </h5>
                            <br />
                            <div class="offers-section-1">
                                Available only on Thrive
                                <br />
                                Show this code at the store: REP
                            </div>
                        </div>
                        <div className="col-xl-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

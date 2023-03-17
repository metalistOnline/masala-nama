import '../styles/components/Hero.scss';

export default function Hero() {
    return (
        <div id="hero" className="container-fluid position-relative p-0">
            <div className="container-fluid py-5 bg-dark hero-header hero-center">
                <div className="container-xxl my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">
                                Every Flavour
                                <br />
                                Tells A Story
                            </h1>
                            <p className="text-white animated slideInLeft mb-2 pb-2 hero-subtext">
                                Fine Indian Cuisine.
                            </p>
                            {/* <a
                                href="#"
                                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft order-button"
                            >
                                Order Online
                            </a> */}
                        </div>

                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img
                                className="img-fluid"
                                src="img/biriyani-on-a-plate.png"
                                alt="Chicken biriyani on a roll"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

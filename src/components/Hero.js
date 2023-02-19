import '../styles/components/Hero.scss';

export default function Hero() {
    return (
        <div id="hero" class="container-fluid position-relative p-0">
            <div class="container-fluid py-5 bg-dark hero-header hero-center">
                <div class="container-fluid my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft">
                                Every Flavour
                                <br />
                                Tells A Story
                            </h1>
                            <p class="text-white animated slideInLeft mb-2 pb-2 hero-subtext">
                                Fine Indian Cuisine.
                            </p>
                            <a
                                href="/order"
                                class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft order-button"
                            >
                                Order Online
                            </a>
                        </div>

                        <div class="offset-xl-1 col-xl-4 col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src="img/hero.png" alt="" />
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import '../styles/components/Hero.scss';

export default function Hero() {
	return (
		<div class="container-fluid position-relative p-0">
			<div class="container-fluid py-5 bg-dark hero-header mb-5 hero-center">
				<div class="container-fluid my-5 py-5">
					<div class="row align-items-center g-5">
						<div class="offset-xl-1 col-xl-5 col-lg-6 text-center text-lg-start">
							<h1 class="display-3 text-white animated slideInLeft">
								Every Flavour
								<br />
								Tells A Story
							</h1>
							<p class="text-white animated slideInLeft mb-4 pb-2">
								Fine Indian Cuisine
							</p>
							<a
								href="#"
								class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">
								Order Online
							</a>
						</div>

						<div class="col-xl-4 col-lg-6 text-center text-lg-end overflow-hidden">
							<img class="img-fluid" src="img/hero.png" alt="" />
						</div>
						<div className="col-xl-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

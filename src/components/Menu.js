import '../styles/components/Menu.scss';

export default function Menu() {
    return (
        <div id="menu" className="container-fluid py-5 hero-center">
            <div className="container-xxl">
                <div
                    className="text-center wow fadeInUp pb-4"
                    data-wow-delay="0.1s"
                >
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal font-3rem">
                        Food Menu
                    </h5>
                    <h1 className="mb-5 font-1o5rem">(Most Popular Items)</h1>
                </div>
                <div
                    className="tab-class text-center wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a
                                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                                data-bs-toggle="pill"
                                href="#tab-1"
                            >
                                <i className="fa fa-carrot fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Veg Dishes</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex align-items-center text-start mx-3 pb-3"
                                data-bs-toggle="pill"
                                href="#tab-2"
                            >
                                <i className="fa fa-drumstick-bite fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">
                                        Non-Veg Dishes
                                    </h6>
                                </div>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a
                                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                                data-bs-toggle="pill"
                                href="#tab-3"
                            >
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                    <div className="tab-content">
                        <div
                            id="tab-1"
                            className="tab-pane fade show p-0 active"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-1.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Hara Bhara Stuff Kebab
                                                </span>
                                                <span className="text-primary">
                                                    ₹265
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-2.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Banjara Paneer Tikka
                                                </span>
                                                <span className="text-primary">
                                                    ₹295
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-3.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Malai Stuff Soya Chaap
                                                </span>
                                                <span className="text-primary">
                                                    ₹295
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-4.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Tandoori Pineapple (6 Pcs)
                                                </span>
                                                <span className="text-primary">
                                                    ₹210
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-1.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Bhatti Ka Paneer</span>
                                                <span className="text-primary">
                                                    ₹285
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-2.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Malai Stuff Soya Chaap
                                                </span>
                                                <span className="text-primary">
                                                    ₹295
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-3.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Soya Chaap Tawa Masala
                                                </span>
                                                <span className="text-primary">
                                                    ₹260
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/veg/item-4.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Tandoori Mushroom Tikka
                                                </span>
                                                <span className="text-primary">
                                                    ₹285
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-1.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Murgh Dum Biryani (4 Pcs)
                                                </span>
                                                <span className="text-primary">
                                                    ₹495
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-2.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Matki Egg Masala (4 Eggs)
                                                </span>
                                                <span className="text-primary">
                                                    ₹320
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-3.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Murgh Rara (4 Pcs)</span>
                                                <span className="text-primary">
                                                    ₹495
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-4.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Waza Seekh Kebab Mutton
                                                </span>
                                                <span className="text-primary">
                                                    ₹450
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-1.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Murgh Tikka Tandoori
                                                </span>
                                                <span className="text-primary">
                                                    ₹395
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-2.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Mutton Seekh Karara Roll
                                                </span>
                                                <span className="text-primary">
                                                    ₹260
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-3.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>
                                                    Murgh Stuff Tangdi (4 Pcs)
                                                </span>
                                                <span className="text-primary">
                                                    ₹450
                                                </span>
                                            </h5>
                                            <small>
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu/nonveg/item-4.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Murgh Chapli Kebab</span>
                                                <span className="text-primary">
                                                    ₹395
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                <b className="text-red">
                                                    Spice Quotient :{' '}
                                                </b>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-red"></i>
                                                <i className="fa fa-pepper-hot text-muted"></i>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-1.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-2.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-3.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-4.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-5.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-6.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-7.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 img-fluid rounded w-80px"
                                            src="img/menu-8.jpg"
                                            alt=""
                                        />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">
                                                    115
                                                </span>
                                            </h5>
                                            <small className="fst-italic">
                                                Ipsum ipsum clita erat amet
                                                dolor justo diam
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

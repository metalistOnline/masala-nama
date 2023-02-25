import '../styles/components/Gallery.scss';

export default function Gallery() {
    return (
        <div
            id="gallery"
            className="container-fluid position-relative p-0 gallery-section bg-red"
        >
            <div className="container-fluid section-start">
                <div className="container-xxl py-5">
                    <div className="row text-center mb-4 g-5 wow fadeInUp">
                        <div className="mb-4">
                            <h1 className="section-title ff-secondary text-center gallery-title fw-normal">
                                Gallery
                            </h1>
                        </div>
                    </div>

                    <div className="row full-size">
                        <div className="viewer">
                            <div className="lightbox">
                                <div className="row">
                                    <div className="col-lg-6 g-4">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                                            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                                            alt="Table Full of Spices"
                                            className="w-100 mb-4 shadow-1-strong rounded wow fadeInLeft"
                                        />
                                        <img
                                            src="img/menu/veg/item-3.jpg"
                                            alt="Coconut with Strawberries"
                                            className="w-100 shadow-1-strong rounded wow fadeInRight"
                                        />
                                        <div className="row">
                                            <img
                                                src="img/menu/nonveg/item-2.jpg"
                                                className="half-size square-size gy-4 wow fadeInLeft"
                                            />
                                            <img
                                                src="img/menu/veg/item-4.jpg"
                                                className="half-size square-size gy-4 wow fadeInUp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 g-4 wow fadeInUp">
                                        <img
                                            src="img/menu/nonveg/item-1.jpg"
                                            alt="Dark Roast Iced Coffee"
                                            className="w-100 shadow-1-strong rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

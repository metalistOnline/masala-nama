import '../styles/components/Gallery.scss';

export default function Gallery() {
    return (
        <div
            id="gallery"
            className="container-fluid position-relative p-0 gallery-section bg-red"
        >
            <div className="container-fluid py-5 section-start">
                <div className="container-fluid py-5">
                    <div className="row text-center mb-4 g-5">
                        <div className="mb-4">
                            <h1 class="section-title ff-secondary text-center gallery-title fw-normal">
                                Gallery
                            </h1>
                        </div>
                    </div>
                    <div className="row full-size">
                        <div className="viewer">
                            <div class="lightbox">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                                            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                                            alt="Table Full of Spices"
                                            class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
                                        />
                                        <img
                                            src="img/menu/veg/item-3.jpg"
                                            alt="Coconut with Strawberries"
                                            class="w-100 shadow-1-strong rounded"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <img
                                            src="img/menu/nonveg/item-1.jpg"
                                            alt="Dark Roast Iced Coffee"
                                            class="w-100 shadow-1-strong rounded"
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

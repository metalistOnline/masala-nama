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
                    <div className="row full-size"></div>
                </div>
            </div>
        </div>
    );
}

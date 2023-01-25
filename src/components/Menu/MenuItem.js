export default function MenuItem(props) {
    return (
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img
                    className="flex-shrink-0 img-fluid rounded w-80px"
                    src={props.imgPath}
                    alt=""
                />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{props.dish}</span>
                        <span className="text-primary">₹{props.price}</span>
                    </h5>
                    <small className="fst-italic">
                        Ipsum ipsum clita erat amet dolor justo diam
                    </small>
                </div>
            </div>
        </div>
    );
}

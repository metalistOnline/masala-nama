import { Loader } from 'google-maps';
import React from 'react';

export default function Map() {
	const loader = new Loader('AIzaSyDtWFHRwlqCDXeGGF0SpYy-bAkxvLtoMeA');

	React.useEffect(() => {
		loader.load().then(function (google) {
			new google.maps.Map(document.getElementById('map'), {
				center: { lat: 26.47594081171191, lng: 74.63546332609347 },
				zoom: 19,
			});
		});
	}, []);

	return (
		<div
			id="map"
			className="container-xxl"
			style={{ width: '100%', height: '400px' }}></div>
	);
}

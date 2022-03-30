import React from "react";
import PropTypes from "prop-types";
import "../styles/Beer.css";

const Beer = ({ beer }) => {
	return (
		<div className="beer-container">
			<div className="beer-header">
				<div className="vertical-align">
					<h3 className="beer-title">{beer.name}</h3>
				</div>
			</div>
			<br />
			<img src={beer.image_url} alt="" />
			<p>{beer.id}</p>
		</div>
	);
};

Beer.propTypes = {
	beer: PropTypes.object.isRequired,
};

export default Beer;

import React from "react";
import PropTypes from "prop-types";
import "../styles/Beer.css";

const Beer = ({ beer, findFood }) => {
	return (
		<div className="beer-container">
			<div className="dp">
				<br />
				{findFood ? (
					<p>
						<strong>Matching foods for this beer</strong>
					</p>
				) : (
					<p>
						<strong>Beer description</strong>
					</p>
				)}
				{!findFood ? (
					<p className="a-narrow">{beer.description}</p>
				) : (
					beer.food_pairing.map((food) => {
						return (
							<p className="a-narrow" key={food}>
								{food}
							</p>
						);
					})
				)}
			</div>
			<div className="beer-header">
				<div className="vertical-align">
					<p className="beer-title impact">{beer.name}</p>
				</div>
			</div>
			<br />
			<img src={beer.image_url} alt="" />
			<br />
			<br />
		</div>
	);
};

Beer.propTypes = {
	beer: PropTypes.object.isRequired,
};

export default Beer;

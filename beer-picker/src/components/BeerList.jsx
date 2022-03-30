import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";
import "../styles/Beer.css";

const BeerList = ({ beers }) => {
	return (
		<div className="beer-list">
			{beers.map((beer) => {
				return <Beer key={beer.id} beer={beer} />;
			})}
		</div>
	);
};

BeerList.propTypes = {
	beers: PropTypes.array.isRequired,
};

export default BeerList;

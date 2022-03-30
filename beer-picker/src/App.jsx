import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import "./styles/App.css";

function App() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		const getBeers = async () => {
			let fetchedBeers = [];

			for (var i = 1; i < 4; i++) {
				const newFetch = await fetchBeers(i);
				fetchedBeers = [...fetchedBeers, ...newFetch];
			}

			setBeers(fetchedBeers);
		};
		getBeers();
	}, []);

	const fetchBeers = async (page) => {
		const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=79`);
		const data = await res.json();
		return data;
	};

	return (
		<div>
			<h1>Pick Tonights Beer</h1>
			<p>{beers.length}</p>

			<BeerList beers={beers} />
		</div>
	);
}

export default App;

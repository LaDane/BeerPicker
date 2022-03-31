import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import "./styles/App.css";

function App() {
	const [beers, setBeers] = useState([]);
	const [search, setSearch] = useState("");
	const [findFood, setFindFood] = useState(false);

	useEffect(() => {
		const getBeers = async () => {
			let fetchedBeers = [];

			for (var i = 1; i < 4; i++) {
				const newFetch = await fetchBeers(i);
				fetchedBeers = [...fetchedBeers, ...newFetch];
			}

			const newBeers = [];
			fetchedBeers.forEach((beer) => {
				let pairedFoods = "";
				beer.food_pairing.forEach((food) => {
					pairedFoods += food + " ";
				});

				const newBeer = { ...beer, paired_foods: pairedFoods };
				newBeers.push(newBeer);
			});

			setBeers(newBeers);
		};

		getBeers();
	}, []); // [] is used to only call the API once -> If missing then API is called over and over

	const fetchBeers = async (page) => {
		const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=79`);
		const data = await res.json();

		return data;
	};

	const inputSearch = (event) => {
		const value = event.target.value.toLowerCase();
		setSearch(value);
	};

	const changedSearchToFood = (event) => {
		setFindFood(!findFood);
	};

	const changedSearchToName = (event) => {
		setFindFood(false);
	};

	const searchFood = beers.filter((el) => el.paired_foods.toLowerCase().includes(search));

	const searchName = beers.filter((el) => el.name.toLowerCase().includes(search));

	return (
		<div>
			<div className="title-box">
				<h1 className="center-text impact">Pick Tonights Beer</h1>
			</div>

			<div className="center-checkbox">
				<label className="custom-radio-button">
					<input type="radio" name="search-option" onChange={changedSearchToName} defaultChecked />
					<span className="helping-el"></span>
					<span className="label-text">Beer Name</span>
				</label>
				<label className="custom-radio-button">
					<input type="radio" name="search-option" onChange={changedSearchToFood} />
					<span className="helping-el"></span>
					<span className="label-text">Matching Food</span>
				</label>
			</div>

			<div className="center-search">
				<div class="input-block">
					<input type="text" name="input-text" id="input-text" required spellcheck="false" onChange={inputSearch} />
					<span class="placeholder">{findFood ? "Search by matching food" : "Search by beer name"}</span>
				</div>
			</div>

			<h1 className="center-text impact">Found {findFood ? searchFood.length : searchName.length} beers</h1>

			<BeerList beers={findFood ? searchFood : searchName} findFood={findFood} />
		</div>
	);
}

export default App;

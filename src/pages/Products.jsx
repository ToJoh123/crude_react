import React, { useState, useEffect } from 'react';
import {
	Grid,
	Select,
	MenuItem,
	FormControl,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormGroup,
	Checkbox,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TextField,
	Button,
	Container,
	Typography
} from '@mui/material';

import orderBy from 'lodash/orderBy';
import { Contain } from '../components/Contain';
import ItemRow from '../components/ItemRow';

export default function Products() {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		async function fetchProducts() {
			const response = await fetch('http://localhost:3001/products');
			const data = await response.json();
			setProducts(data);
		}
		fetchProducts();
	}, []);

	const [ colors, setColors ] = useState([]);
	useEffect(() => {
		async function fetchColors() {
			const response = await fetch('http://localhost:3001/colors');
			const data = await response.json();
			setColors(data);
			setIsLoading(false);
		}
		fetchColors();
	}, []);

	const [ sortKey, setSortKey ] = useState('name');
	const [ sortDirection, setSortDirection ] = useState('asc');
	const [ selectedColors, setSelectedColors ] = useState([ 'light', 'medium', 'dark' ]);
	const [ lightChecked, setLightChecked ] = useState(true);
	const [ mediumChecked, setMediumChecked ] = useState(true);
	const [ darkChecked, setDarkChecked ] = useState(true);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ name, setName ] = useState('');
	const [ style, setStyle ] = useState('');
	const [ abv, setAbv ] = useState('');
	const [ price, setPrice ] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newProduct = { name, style, abv, price };
		console.log(newProduct);
		const post = await fetch('http://localhost:3001/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newProduct)
		});
		if (post.ok) {
			console.log('Product added successfully');
			window.location.reload();
		} else {
			console.log('Product not added');
		}
	};

	const handleSortKeyChange = (event) => {
		setSortKey(event.target.value);
	};

	const handleSortDirectionChange = (event) => {
		setSortDirection(event.target.value);
	};

	const handleColorChange = (event) => {
		const elements = document.querySelectorAll('[name="colors"]');
		const newSelectedColors = Array.from(elements)
			.filter((element) => element.checked)
			.map((element) => element.value);
		setSelectedColors(newSelectedColors);
	};

	return (
		<div className="App">
			{isLoading ? (
				<Contain
					url={
						'https://cdn.discordapp.com/attachments/1020970322746421338/1058865325057253457/Tom_Johansson_cat_loading_webdesign_7e39efc6-87ab-471c-9b60-92dead63271e.png'
					}>
					<Typography variant="h2" sx={{ paddingTop: '10rem', color: 'whitesmoke' }}>
						Sorry i am loading...have you tried to sit on the keyboard?
					</Typography>
				</Contain>
			) : (
				<React.Fragment>
					<Container sx={{ paddingTop: '5rem' }}>
						<FormControl>
							<Grid container spacing={2}>
								<Grid item xs={4}>
									<RadioGroup value={sortDirection} onChange={handleSortDirectionChange}>
										<FormControlLabel value="asc" control={<Radio />} label="Ascending" />
										<FormControlLabel value="desc" control={<Radio />} label="Descending" />
									</RadioGroup>
								</Grid>
								<Grid item xs={4}>
									<FormLabel>Sort By</FormLabel>
									<Select value={sortKey} onChange={handleSortKeyChange}>
										<MenuItem value="name">Name</MenuItem>
										<MenuItem value="style">Style</MenuItem>
										<MenuItem value="abv">ABV</MenuItem>
										<MenuItem value="price">Price</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={1}>
									<FormGroup form="colors-form" onChange={handleColorChange}>
										<FormControlLabel
											value="light"
											control={
												<Checkbox
													name="colors"
													checked={lightChecked}
													onChange={() => setLightChecked(!lightChecked)}
												/>
											}
											label="Light"
										/>

										<FormControlLabel
											value="medium"
											control={
												<Checkbox
													name="colors"
													checked={mediumChecked}
													onChange={() => setMediumChecked(!mediumChecked)}
												/>
											}
											label="Medium"
										/>
										<FormControlLabel
											value="dark"
											control={
												<Checkbox
													name="colors"
													checked={darkChecked}
													onChange={() => setDarkChecked(!darkChecked)}
												/>
											}
											label="Dark"
										/>
									</FormGroup>
								</Grid>
							</Grid>
						</FormControl>
					</Container>
					<Container>
						<Grid container spacing={2} padding={4}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Link</TableCell>
										<TableCell>Product</TableCell>
										<TableCell>Style</TableCell>
										<TableCell>ABV</TableCell>
										<TableCell>Price</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{orderBy(
										products.filter((product) =>
											selectedColors.some((color) => colors[color].includes(product.style))
										),
										sortKey,
										sortDirection
									).map((product) => (
										//could create a new component for each row but would it be easier to read?
										//i will make a component for each row so i can use it for the single product page-
										<ItemRow key={product.id} product={product} />
									))}
								</TableBody>
							</Table>
						</Grid>
					</Container>
					<h2>Add another item</h2>
					<Container>
						<FormControl>
							<Grid container direction="row">
								<Grid item xs={2}>
									<FormLabel>Enter name</FormLabel>
									<TextField width="300px" onChange={(e) => setName(e.target.value)} />
								</Grid>
								<Grid item xs={2}>
									<FormLabel>Enter Style</FormLabel>
									<Select fullWidth value={sortKey} onChange={(e) => setStyle(e.target.value)}>
										{/* this items should be replaced by a map function */}
										<MenuItem value="weiss">weiss</MenuItem>
										<MenuItem value="blonde">blonde</MenuItem>
										<MenuItem value="saison">saison</MenuItem>
										<MenuItem value="pale ale">pale ale</MenuItem>
										<MenuItem value="amber">amber</MenuItem>
										<MenuItem value="bitter">bitter</MenuItem>
										<MenuItem value="brown ale">brown ale</MenuItem>
										<MenuItem value="stout">stout</MenuItem>
										<MenuItem value="porter">porter</MenuItem>
										<MenuItem value="barley wine">barley wine</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={2}>
									<FormLabel>Enter ABV</FormLabel>
									<TextField type="number" onChange={(e) => setAbv(e.target.value)} />
								</Grid>
								<Grid item xs={2}>
									<FormLabel>Enter Price</FormLabel>
									<TextField type="number" onChange={(e) => setPrice(e.target.value)} />
								</Grid>
							</Grid>
							<Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
								Submit
							</Button>
						</FormControl>
					</Container>
				</React.Fragment>
			)}
		</div>
	);
}

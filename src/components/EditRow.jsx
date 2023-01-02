import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, FormControl, FormLabel, Container, TextField, Button } from '@mui/material';

export default function EditRow({ product }) {
	const [ name, setName ] = useState(product.name);
	const [ style, setStyle ] = useState(product.style);
	const [ abv, setAbv ] = useState(product.abv);
	const [ price, setPrice ] = useState(product.price);
	const updatedProduct = { name, style, abv, price };

	const handleUpdate = async (event) => {
		const response = await fetch(`http://localhost:3001/products/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(updatedProduct),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.status >= 200 && response.status < 300) {
			console.log('Success!');
		} else {
			console.log('Error!');
		}
		console.log(updatedProduct);
	};

	const { id } = useParams();
	const handeDelete = async (event) => {
		const response = await fetch(`http://localhost:3001/products/${id}`, {
			method: 'DELETE'
		});
		if (response.status >= 200 && response.status < 300) {
			window.location.href = '/products/';
		} else {
			console.log('Error!');
		}
	};
	return (
		<div className="form">
			<Container>
				<FormControl>
					<Grid container>
						<Grid item xs={3}>
							<FormLabel>Name</FormLabel>
							<TextField value={name} onChange={(e) => setName(e.target.value)} />
						</Grid>
						<Grid item xs={2}>
							<FormLabel>Style</FormLabel>
							<TextField value={style} onChange={(e) => setStyle(e.target.value)} />
						</Grid>
						<Grid item xs={2}>
							<FormLabel>ABV</FormLabel>
							<TextField value={abv} onChange={(e) => setAbv(e.target.value)} />
						</Grid>
						<Grid item xs={2}>
							<FormLabel>Price</FormLabel>
							<TextField value={price} onChange={(e) => setPrice(e.target.value)} />
						</Grid>
					</Grid>
				</FormControl>

				<Grid item xs={12}>
					<Button variant="outlined" onClick={handeDelete}>
						Delete
					</Button>
					<Button variant="outlined" onClick={handleUpdate}>
						Save
					</Button>
					<Button variant="outlined">
						<Link to="/products/">Back to products</Link>
					</Button>
				</Grid>
			</Container>
		</div>
	);
}

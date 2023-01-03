import { useState } from 'react';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	Grid,
	TextField,
	Button,
	CardMedia,
	Card,
	InputAdornment,
	RadioGroup,
	FormControl,
	FormLabel,
	Radio,
	FormControlLabel
} from '@mui/material';

import { Box } from '@mui/system';

export default function EditRow({ product }) {
	const [ name, setName ] = useState(product.name);
	const [ style, setStyle ] = useState(product.style);
	const [ abv, setAbv ] = useState(product.abv);
	const [ price, setPrice ] = useState(product.price);
	const [ imageUrl, setImageUrl ] = useState(product.imageUrl);
	const [ btnColor, btnSetColor ] = useState('primary');
	const [ colorStyle, setColorStyle ] = useState();
	const [ colorType, setColorType ] = useState();
	const updatedProduct = { name, style, abv, price };
	const updatedColor = { colorStyle, colorType };

	const radioColor = async (event) => {
		console.log(event.target.value);
		if (event.target.value === 'primary') {
			setColorType('light');
		} else if (event.target.value === 'secondary') {
			setColorType('medium');
		} else if (event.target.value === 'success') {
			setColorType('dark');
		} else {
			setColorType('error');
		}
		btnSetColor(event.target.value);
	};
	const handleColorUpdate = async (event) => {
		const response = await fetch(`http://localhost:3001/colors`, {
			method: 'PATCH',
			body: JSON.stringify(updatedColor),
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
		<React.Fragment>
			<Box>
				<Card sx={{ display: 'block', width: '150px', marginLeft: 'auto', marginRight: 'auto' }}>
					<CardMedia component="img" height="100%" image={imageUrl} alt={name} />
				</Card>
			</Box>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' }
				}}
				noValidate
				autoComplete="off">
				<TextField label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} />
				<TextField label="Style" variant="filled" value={style} onChange={(e) => setStyle(e.target.value)} />
				<TextField label="ABV" variant="filled" value={abv} onChange={(e) => setAbv(e.target.value)} />
				<TextField
					InputProps={{
						endAdornment: <InputAdornment position="end">Kr</InputAdornment>
					}}
					label="Price"
					variant="filled"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<TextField
					label="URL"
					variant="filled"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
				/>
			</Box>
			<Grid container my={2}>
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
			</Grid>
			<FormControl>
				<FormLabel id="demo-row-radio-buttons-group-label">Choose a color type</FormLabel>
				<RadioGroup row onChange={radioColor} value={btnColor}>
					<FormControlLabel variant="filled" value="primary" control={<Radio />} label="Light" />
					<FormControlLabel variant="filled" value="secondary" control={<Radio />} label="Medium" />
					<FormControlLabel variant="filled" value="success" control={<Radio />} label="Dark" />
				</RadioGroup>
			</FormControl>
			<Grid container my={2}>
				<Grid item xs={12}>
					<TextField
						placeholder="lager?"
						label="What style is it?"
						color={btnColor}
						focused
						onChange={(e) => setColorStyle(e.target.value)}
					/>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12}>
					<Button variant="contained" onClick={handleColorUpdate}>
						add
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

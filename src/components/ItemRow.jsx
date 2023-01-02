/*
									<TableRow key={product.name.toString()} value={product.id}>
										<TableCell>{product.name}</TableCell>
										<TableCell>{product.style}</TableCell>
										<TableCell>{product.abv}</TableCell>
										<TableCell>{product.price}</TableCell>
									</TableRow>
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tab, TableCell, TableRow } from '@mui/material';
import DataArrayIcon from '@mui/icons-material/DataArray';
export default function ItemRow({ product }) {
	return (
		<TableRow key={product.name.toString()} value={product.id}>
			<TableCell>
				<Link to={`/products/${product.id}`}>
					<Button variant="contained" color="primary">
						<DataArrayIcon />
					</Button>
				</Link>
			</TableCell>
			<TableCell>{product.name}</TableCell>
			<TableCell>{product.style}</TableCell>
			<TableCell>{product.abv}</TableCell>
			<TableCell>{product.price}</TableCell>
		</TableRow>
	);
}

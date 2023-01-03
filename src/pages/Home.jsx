import React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import picture from '../img/2000px-React-icon.png';
import crude from '../img/crude.png';

// import imageUrl from 'https://picsum.photos/200/300';
const Item = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	border: '1px solid',
	borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
	padding: theme.spacing(1),
	borderRadius: '4px',
	textAlign: 'center'
}));

export default function Home() {
	return (
		<div>
			<Typography sx={{ paddingTop: '5rem' }} variant="h1">
				Home
			</Typography>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h5">Welcome this project site</Typography>
				</Grid>
			</Grid>
			<Item>
				<Typography variant="body2">
					This site is a product catalog that allows users to view a list of products, sort the list by
					various criteria, and filter the list by product color. It also includes a form for adding new
					products to the catalog and a function for handling the submission of the form. The products are
					retrieved from a server via a fetch request, and the colors are retrieved in a similar manner. The
					site uses the React JavaScript library and various components from the Material-UI library.
				</Typography>
			</Item>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Card>
						<Typography gutterBottom variant="h5">
							Mock server
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Storing data using json-server, a mock server that uses a REST API to store and retrieve
						</Typography>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card>
						<Typography gutterBottom variant="h5">
							Material UI components
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Using Material UI components to create a responsive layout, for example the meny bar and the
							grid
						</Typography>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<Card sx={{ height: '400px' }}>
							<CardMedia
								component="img"
								image={crude}
								alt="flowchart"
								sx={{ width: '200px', height: '200px' }}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									CRUD
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Able to create a new product, read a list of products, update a product, and delete
									a product.
								</Typography>
							</CardContent>
							<CardActions>
								<Button href="https://diagramify.agiliq.com/" size="small">
									Share
								</Button>
								<Button
									href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"
									size="small">
									{' '}
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<Card sx={{ height: '400px' }}>
							<CardMedia
								className="App-logo"
								component="img"
								image={picture}
								alt="react image"
								sx={{ width: '200px', height: '200px' }}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									React
								</Typography>
								<Typography variant="body2" color="text.secondary">
									React is a JavaScript library for building user interfaces. Fancy that!
								</Typography>
							</CardContent>
							<CardActions>
								<Button disabled={true} size="small">
									{' '}
									Share
								</Button>
								<Button href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" size="small">
									{' '}
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}

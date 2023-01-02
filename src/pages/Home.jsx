import { Card, CardContent, Typography } from '@mui/material';
import picture from '../logo.svg';
export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Card sx={{ width: '20rem' }}>
				<CardContent>
					<Typography variant="h5">Welcome this project site</Typography>
					<Typography variant="body2">
						This site appears to be a product catalog that allows users to view a list of products, sort the
						list by various criteria, and filter the list by product color. It also includes a form for
						adding new products to the catalog and a function for handling the submission of the form. The
						products are retrieved from a server via a fetch request, and the colors are retrieved in a
						similar manner. The site uses the React JavaScript library and various components from the
						Material-UI library.
					</Typography>
				</CardContent>
			</Card>
			<img className="App-logo" src={picture} alt="react" />
		</div>
	);
}

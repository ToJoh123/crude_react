import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
const PAGES = [ 'Home', 'Products' ];
const Header = () => {
	const [ value, setValue ] = useState(0);
	const theme = useTheme();
	// console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	// console.log(isMatch);
	return (
		<React.Fragment>
			<AppBar sx={{ background: '#570670' }}>
				<Toolbar>
					<SportsBarIcon />
					{isMatch ? (
						<React.Fragment>
							<Typography sx={{ fontSize: '1.5rem' }}>Stuffs</Typography>
							<DrawerComp />
						</React.Fragment>
					) : (
						<React.Fragment>
							<Typography sx={{ fontSize: '1.5rem' }}>Stuffs</Typography>
							<Tabs
								textColor="inherit"
								indicatorColor="secondary"
								value={value}
								onChange={(event, value) => setValue(value)}>
								{PAGES.map((page, index) => (
									<Tab key={index} label={page} component={Link} to={`/${page.toLowerCase()}`} />
								))}
							</Tabs>
							<Button
								style={{ marginLeft: 'auto' }}
								variant="contained"
								color="secondary"
								component={Link}
								to={'/login'}
								disabled={true}>
								Login
							</Button>
							<Button
								style={{ marginLeft: '10px' }}
								variant="contained"
								color="secondary"
								component={Link}
								to={'/register'}
								disabled={true}>
								Register
							</Button>
						</React.Fragment>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};
export default Header;

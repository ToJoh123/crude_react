import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const PAGES = [ 'Home', 'Products' ];

function DrawerComp() {
	const [ openDrawer, setOpenDrawer ] = useState(false);

	return (
		<React.Fragment>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					{PAGES.map((page, index) => (
						<ListItemButton key={index} component={Link} to={`/${page.toLowerCase()}`}>
							<ListItemIcon>
								<ArrowCircleRightIcon />
							</ListItemIcon>
							<ListItemText>{page}</ListItemText>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton sx={{ color: 'white' }} marginLeft="auto" onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</React.Fragment>
	);
}

export default DrawerComp;

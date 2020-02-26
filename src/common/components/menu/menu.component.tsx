import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import { linkRoutes } from "core";

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	}
});

export const NavMenu = (props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	type DrawerSide = "top" | "left" | "bottom" | "right";
	const toggleDrawer = (side: DrawerSide, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = (side: DrawerSide) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{["Login"].map((text, index) => (
					<ListItem
						button
						key={text}
						component={RouterLink}
						to={linkRoutes.login}
					>
						<ListItemIcon>
							{index % 2 === 0 ? <LockOpenIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["Hotel Collection"].map((text, index) => (
					<ListItem
						button
						key={text}
						component={RouterLink}
						to={linkRoutes.hotelCollection}
					>
						<ListItemIcon>
							{index % 2 === 0 ? <LibraryBooksIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	// const fullList = (side: DrawerSide) => (
	//   <div
	//     className={classes.fullList}
	//     role="presentation"
	//     onClick={toggleDrawer(side, false)}
	//     onKeyDown={toggleDrawer(side, false)}
	//   >
	//     <List>
	//       {['Login'].map((text, index) => (
	//         <ListItem button key={text}>
	//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
	//           <ListItemText primary={text} />
	//         </ListItem>
	//       ))}
	//     </List>
	//     <Divider />
	//     <List>
	//       {['All mail', 'Trash', 'Spam'].map((text, index) => (
	//         <ListItem button key={text}>
	//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
	//           <ListItemText primary={text} />
	//         </ListItem>
	//       ))}
	//     </List>
	//   </div>
	// );

	return (
		<div style={props.style}>
			<Button onClick={toggleDrawer("left", true)} style={props.style}>
				<MenuIcon fontSize="large" />
			</Button>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				{sideList("left")}
			</Drawer>
		</div>
	);
};

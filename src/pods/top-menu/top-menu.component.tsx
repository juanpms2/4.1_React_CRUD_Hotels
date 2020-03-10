import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { NavMenu } from "common";
import { SessionContext } from "core";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		alignItems: "space-between"
	}
}));

export const TopMenu = (props) => {
	const { login, updateLogin } = React.useContext(SessionContext);
	const classes = useStyles(props);
	updateLogin(sessionStorage.getItem("user"));

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Toolbar variant="dense">
							<IconButton color="inherit" aria-label="Menu">
								<AccountCircle />
							</IconButton>
							<Typography variant="h6" color="inherit">
								{login}
							</Typography>
						</Toolbar>
					</Grid>
					<Grid item xs={6}>
						<NavMenu style={{ color: "white", textAlign: "right" }} />
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		background: "red"
	}
}));

export const FooterAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<Paper className={classes.paper} elevation={0}>
						&copy; Juan Pablo Martínez
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

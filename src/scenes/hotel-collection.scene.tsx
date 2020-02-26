import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppLayout } from "layouts";
import { HotelCollectionContainer } from "pods";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginLeft: theme.spacing(2)
		}
	}
}));

export const HotelCollectionScene = () => {
	const classes = useStyles();

	return (
		<AppLayout>
			<Typography className={classes.root}>
				<h2>Hotel Collection</h2>
			</Typography>
			<HotelCollectionContainer />
		</AppLayout>
	);
};

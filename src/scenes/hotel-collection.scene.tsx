import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { AppLayout } from "layouts";
import { HotelCollectionContainer } from "pods";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "15px 8px",

		"& > * + *": {
			marginLeft: theme.spacing(2)
		}
	}
}));

export const HotelCollectionScene = () => {
	const classes = useStyles();

	return (
		<AppLayout>
			<Typography className={classes.root} variant="h5">
				Hotel Collection
			</Typography>
			<HotelCollectionContainer />
		</AppLayout>
	);
};

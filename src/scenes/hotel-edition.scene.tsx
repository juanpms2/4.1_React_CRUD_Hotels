import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppLayout } from "layouts";
import { HotelEditionContainer } from "pods";
import { HotelCardContext } from "common";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%"
	},
	title: {
		margin: "15px 0",

		"& > * + *": {
			marginLeft: theme.spacing(2)
		}
	}
}));

export const HotelEditionScene = () => {
	const hotelCardContext = React.useContext(HotelCardContext);
	const classes = useStyles();

	return (
		<AppLayout>
			<Typography className={classes.title} variant="h5">
				Hotel Edition
			</Typography>
			<div className={classes.root}>
				<HotelEditionContainer key={hotelCardContext.id} />
			</div>
		</AppLayout>
	);
};

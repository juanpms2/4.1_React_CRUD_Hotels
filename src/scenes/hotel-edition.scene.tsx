import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppLayout } from "layouts";
import { HotelEditionContainer } from "pods";
import { HotelCardContext } from "common";

const useStyles = makeStyles((theme) => ({
	root: {
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
			<Typography className={classes.root}>
				<h2>Hotel Edition</h2>
			</Typography>

			<HotelEditionContainer key={hotelCardContext.id} />
		</AppLayout>
	);
};

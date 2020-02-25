import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { linkRoutes } from "core";
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
			<h2>Hello from Hotel Edition Scene</h2>
			<Typography className={classes.root}>
				<Button color="primary" component={RouterLink} to={linkRoutes.login}>
					Login
				</Button>
				<Button
					color="primary"
					component={RouterLink}
					to={linkRoutes.hotelCollection}
				>
					Hotel Collection
				</Button>
			</Typography>

			<HotelEditionContainer key={hotelCardContext.id} />
		</AppLayout>
	);
};

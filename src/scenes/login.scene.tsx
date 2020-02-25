import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CenteredLayout } from "layouts";
import { linkRoutes } from "core";
import { LoginContainer } from "pods";
import { SnackbarProvider } from "common";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginLeft: theme.spacing(2)
		}
	}
}));

export const LoginScene = () => {
	const classes = useStyles();

	return (
		<CenteredLayout>
			<h2>Hello from Login Scene</h2>
			<Typography className={classes.root}>
				<Button
					color="primary"
					component={RouterLink}
					to={linkRoutes.hotelCollection}
				>
					Hotel Collection
				</Button>
			</Typography>
			<SnackbarProvider>
				<LoginContainer />
			</SnackbarProvider>
		</CenteredLayout>
	);
};

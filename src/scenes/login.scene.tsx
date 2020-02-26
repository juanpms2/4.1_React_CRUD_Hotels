import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CenteredLayout } from "layouts";
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
			<Typography className={classes.root}></Typography>
			<SnackbarProvider>
				<LoginContainer />
			</SnackbarProvider>
		</CenteredLayout>
	);
};

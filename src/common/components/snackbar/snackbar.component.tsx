import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SnackbarContext } from "./snackbar.context";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	}
}));

interface Props {}

export const CustomizedSnackbars = () => {
	const classes = useStyles();
	const snackbarContext = React.useContext(SnackbarContext);

	const close = () => {
		snackbarContext.handleClose(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar open={snackbarContext.open}>
				<Alert onClose={close} severity="error">
					Invalid credentials, use admin/test
				</Alert>
			</Snackbar>
		</div>
	);
};

import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff"
	}
}));

export const Spinner = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const { promiseInProgress } = usePromiseTracker();

	const handleClose = () => {
		setOpen(false);
	};

	return (
		promiseInProgress && (
			<div>
				<Backdrop
					className={classes.backdrop}
					open={open}
					onClick={handleClose}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
		)
	);
};

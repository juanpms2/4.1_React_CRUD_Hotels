import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		marginTop: theme.spacing(8),
		overflow: "hidden",
		maxWidth: "100%"
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: "auto",
		backgroundColor:
			theme.palette.type === "dark"
				? theme.palette.grey[800]
				: theme.palette.grey[200]
	}
}));

export const FooterAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Typography variant="body1">CRUD de Hoteles con React.</Typography>
					<Typography variant="body2" color="textSecondary">
						{"Copyright © "}
						<Link color="inherit" href="https://github.com/juanpms2">
							Juan Pablo Martínez
						</Link>{" "}
						{new Date().getFullYear()}
						{"."}
					</Typography>
				</Container>
			</footer>
		</div>
	);
};

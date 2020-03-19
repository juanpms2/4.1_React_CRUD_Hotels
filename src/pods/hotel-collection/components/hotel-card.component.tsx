import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { HotelEntityVm } from "../hotel-collection.vm";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

interface Props {
	hotel: HotelEntityVm;
	navigateToHotel: () => void;
	handleClickOpen: () => void;
	handleClose: () => void;
	deleteHotel: (event: any, hotel: HotelEntityVm) => void;
	open: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		width: "500px", // rather be rem?
		marginTop: theme.spacing(2)
	},
	cardcontentContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}
}));

// Todo there are some harcoded styles move them to class styles
export const HotelCardComponent: React.FunctionComponent<Props> = (props) => {
	const {
		hotel,
		navigateToHotel,
		handleClickOpen,
		handleClose,
		deleteHotel,
		open
	} = props;
	const classes = useStyles(props);

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={<Avatar aria-label="Hotel">{hotel.rating}</Avatar>}
				action={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
				title={hotel.name}
				subheader={hotel.address}
			/>
			<CardContent>
				<div className={classes.cardcontentContainer}>
					<CardMedia
						image={hotel.thumbNailUrl}
						title={hotel.name}
						style={{ height: 0, paddingTop: "56.25%" }}
					/>
					<Typography variant="subtitle1" gutterBottom>
						{hotel.description}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				<IconButton aria-label="Edit" type="button" onClick={navigateToHotel}>
					<EditIcon />
				</IconButton>
				<IconButton aria-label="Delete" type="button" onClick={handleClickOpen}>
					<DeleteIcon />
				</IconButton>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="draggable-dialog-title"
				>
					<DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
						Alert
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Acepta para borrar el hotel o cancela si todo fue un error.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button
							onClick={(event) => deleteHotel(event, hotel)}
							color="primary"
						>
							Acept
						</Button>
					</DialogActions>
				</Dialog>
			</CardActions>
		</Card>
	);
};

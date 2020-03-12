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
import {
	CardContent,
	CardMedia,
	Typography,
	CardActions
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { linkRoutes } from "core";
import { HotelCardContext, deleteHotel } from "common";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

interface Props {
	hotel: HotelEntityVm;
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
export const HotelCard: React.FunctionComponent<Props> = (props) => {
	const { hotel } = props;
	const hotelCardContext = React.useContext(HotelCardContext);
	const history = useHistory();
	const classes = useStyles(props);
	const [open, setOpen] = React.useState(false);

	const navigateToHotel = () => {
		hotelCardContext.loadId(hotel.id);
		history.push(linkRoutes.hotelEdit(hotel.id));
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	//Esta función está bien es el servidor de pruebas el que tiene el problema, por eso se borran todos los items.
	const deleteHotels = (event, hotel) => {
		event.preventDefault();
		handleClose();
		deleteHotel(event, hotel);
	};

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
					// PaperComponent={PaperComponent}
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
							onClick={(event) => deleteHotels(event, hotel)}
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

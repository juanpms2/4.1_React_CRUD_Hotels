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
	CardActions,
	Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { linkRoutes } from "core";
import { HotelCardContext } from "common";

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

	const navigateToHotel = () => {
		hotelCardContext.loadId(hotel.id);
		history.push(linkRoutes.hotelEdit(hotel.id));
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
						image={hotel.picture}
						title={hotel.name}
						style={{ height: 0, paddingTop: "56.25%" }}
					/>
					<Typography variant="subtitle1" gutterBottom>
						{hotel.description}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="Add to favorites"
					type="button"
					onClick={navigateToHotel}
				>
					<EditIcon />
				</IconButton>
				<IconButton aria-label="Share">
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

import * as React from "react";
import { HotelCardComponent } from "./hotel-card.component";
import { HotelEntityVm } from "../hotel-collection.vm";
import { useHistory } from "react-router-dom";
import { linkRoutes } from "core";
import { HotelCardContext, deleteHotel } from "common";

interface Props {
	hotel: HotelEntityVm;
}

export const HotelCardContainer: React.FunctionComponent<Props> = (props) => {
	const { hotel } = props;
	const hotelCardContext = React.useContext(HotelCardContext);
	const history = useHistory();
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

	//Esta función está bien, es el servidor de pruebas el que tiene el problema, por eso se borran todos los items.
	const removeHotel = (event, hotel) => {
		event.preventDefault();
		handleClose();
		deleteHotel(event, hotel);
	};
	return (
		<HotelCardComponent
			hotel={hotel}
			navigateToHotel={navigateToHotel}
			handleClickOpen={handleClickOpen}
			handleClose={handleClose}
			deleteHotel={removeHotel}
			open={open}
		/>
	);
};

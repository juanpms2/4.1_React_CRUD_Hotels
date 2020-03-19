import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCardContainer } from "./components/hotel-card.container"; // on next step we will create this component

interface Props {
	hotelCollection: HotelEntityVm[];
}

const useStyles = makeStyles({
	listLayout: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	}
});

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
	props
) => {
	const { hotelCollection } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.listLayout}>
			{hotelCollection.map((hotel) => (
				<HotelCardContainer key={hotel.id} hotel={hotel} />
			))}
		</div>
	);
};

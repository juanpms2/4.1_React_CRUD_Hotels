import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HotelEntityVm } from "./hotel-edition.vm";
import { HotelCard } from "./components/hotel-edition-card.component"; // on next step we will create this component

interface Props {
	hotelEdition: HotelEntityVm;
}

const useStyles = makeStyles({
	listLayout: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between"
	}
});

export const HotelEditionComponent: React.FunctionComponent<Props> = (
	props
) => {
	const { hotelEdition } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.listLayout}>
			<HotelCard hotelEdition={hotelEdition} />
		</div>
	);
};

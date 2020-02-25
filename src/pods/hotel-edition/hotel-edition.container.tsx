import * as React from "react";
import { HotelEditionComponent } from "./hotel-edition.component";
import { HotelEntityVm, createDefaultHotelEntity } from "./hotel-edition.vm";
import { getHotelEdit, HotelEntityApi } from "common";
import { mapFromApiToVm } from "./hotel-edition.mapper";
import { mapToCollection } from "common";
import { trackPromise } from "react-promise-tracker";
import { HotelCardContext } from "common";

interface Props {}

const useHotelEdition = () => {
	const [hotelEdition, setHotelEdition] = React.useState(
		createDefaultHotelEntity()
	);
	const hotelCardContext = React.useContext(HotelCardContext);

	const loadHotelEdition = () => {
		trackPromise(
			getHotelEdit(hotelCardContext.id).then((result) =>
				setHotelEdition(mapFromApiToVm(result))
			)
		);
	};

	return { hotelEdition, loadHotelEdition };
};

export const HotelEditionContainer = () => {
	const { hotelEdition, loadHotelEdition } = useHotelEdition();

	React.useEffect(() => {
		loadHotelEdition();
	}, []);

	return <HotelEditionComponent hotelEdition={hotelEdition} />;
};

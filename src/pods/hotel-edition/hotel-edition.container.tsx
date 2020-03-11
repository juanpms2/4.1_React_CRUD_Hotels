import * as React from "react";
import { HotelEditionComponent } from "./hotel-edition.component";
import { HotelEntityVm, createDefaultHotelEntity } from "./hotel-edition.vm";
import { getHotelEdit, HotelEdit } from "common";
import { mapFromApiToVm } from "./hotel-edition.mapper";
import { mapToCollection } from "common";
import { trackPromise } from "react-promise-tracker";
import { useParams } from "react-router-dom";

interface Props {}

const useHotelEdition = () => {
	const [hotelEdition, setHotelEdition] = React.useState(
		createDefaultHotelEntity()
	);
	const { id } = useParams();

	const loadHotelEdition = () => {
		id
			? trackPromise(
					getHotelEdit(id).then((result) =>
						setHotelEdition(mapFromApiToVm(result))
					)
			  )
			: setHotelEdition(createDefaultHotelEntity());
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

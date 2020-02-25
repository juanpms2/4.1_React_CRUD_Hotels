import * as React from "react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from "common";
import { mapFromApiToVm } from "./hotel-collection.mapper";
import { mapToCollection } from "common/mappers";
import { trackPromise } from "react-promise-tracker";

const useHotelCollection = () => {
	const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
		[]
	);

	const loadHotelCollection = () => {
		trackPromise(
			getHotelCollection().then((result) =>
				setHotelCollection(mapToCollection(result, mapFromApiToVm))
			)
		);
	};

	return { hotelCollection, loadHotelCollection };
};

export const HotelCollectionContainer = () => {
	const { hotelCollection, loadHotelCollection } = useHotelCollection();

	React.useEffect(() => {
		loadHotelCollection();
	}, []);

	return <HotelCollectionComponent hotelCollection={hotelCollection} />;
};

import { basePicturesUrl } from "core";
import * as apiModel from "common";
import * as viewModel from "./hotel-collection.vm";

export const mapFromApiToVm = (
	hotel: apiModel.HotelEntityApi
): viewModel.HotelEntityVm => ({
	id: hotel.id,
	thumbNailUrl: hotel.thumbNailUrl.includes("/thumbnails/")
		? `${basePicturesUrl}${hotel.thumbNailUrl}`
		: hotel.thumbNailUrl,
	name: hotel.name,
	description: hotel.shortDescription,
	rating: hotel.hotelRating,
	address: hotel.address1
});

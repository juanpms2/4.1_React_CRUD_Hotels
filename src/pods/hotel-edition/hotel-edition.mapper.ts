import { basePicturesUrl } from "core";
import * as apiModel from "common";
import * as viewModel from "./hotel-edition.vm";

export const mapFromApiToVm = (
	hotel: apiModel.HotelEntityApi
): viewModel.HotelEntityVm => ({
	id: hotel.id,
	picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
	name: hotel.name,
	description: hotel.shortDescription,
	rating: hotel.hotelRating,
	address: hotel.address1,
	city: hotel.city
});

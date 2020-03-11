import { basePicturesUrl } from "core";
import * as apiModel from "common";
import * as viewModel from "./hotel-edition.vm";

export const mapFromApiToVm = (
	hotel: apiModel.HotelEdit
): viewModel.HotelEntityVm => ({
	id: hotel.id,
	thumbNailUrl: hotel.thumbNailUrl.includes("/thumbnails/")
		? `${basePicturesUrl}${hotel.thumbNailUrl}`
		: hotel.thumbNailUrl,
	name: hotel.name,
	description: hotel.shortDescription,
	rating: hotel.hotelRating,
	city: hotel.city
});

export const mapFromVmToApi = (
	hotel: viewModel.HotelEntityVm
): apiModel.HotelEdit => ({
	id: hotel.id,
	thumbNailUrl: hotel.thumbNailUrl.includes("/thumbnails/")
		? `${basePicturesUrl}${hotel.thumbNailUrl}`
		: hotel.thumbNailUrl,
	name: hotel.name,
	hotelRating: hotel.rating,
	shortDescription: hotel.description,
	city: hotel.city
});

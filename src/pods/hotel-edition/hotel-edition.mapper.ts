import { basePicturesUrl } from "core";
import * as apiModel from "common";
import * as viewModel from "./hotel-edition.vm";

export const mapFromApiToVm = (
	hotel: apiModel.HotelEdit
): viewModel.HotelEntityVm => ({
	id: hotel.id,
	picture: hotel.thumbNailUrl,
	name: hotel.name,
	description: hotel.shortDescription,
	rating: hotel.hotelRating,
	address: hotel.address1,
	city: hotel.city,
	urlBase64: hotel.urlBase64
});

export const mapFromVmToApi = (
	hotel: viewModel.HotelEntityVm
): apiModel.HotelEdit => ({
	address1: hotel.address,
	id: hotel.id,
	thumbNailUrl: hotel.picture,
	name: hotel.name,
	hotelRating: hotel.rating,
	shortDescription: hotel.description,
	city: hotel.city,
	urlBase64: hotel.urlBase64
});

import * as React from "react";
import Axios from "axios";
import { baseApiUrl, basePicturesUrl } from "core";
import { mapFromVmToApi } from "pods/hotel-edition/hotel-edition.mapper";
import { linkRoutes } from "core";

export interface HotelEntityApi {
	id: string;
	type: string;
	name: string;
	created: Date;
	modified: Date;
	address1: string;
	airportCode: string;
	amenityMask: number;
	city: string;
	confidenceRating: number;
	countryCode: string;
	deepLink: string;
	highRate: number;
	hotelId: number;
	hotelInDestination: boolean;
	hotelRating: number;
	location: {
		latitude: number;
		longitude: number;
	};
	locationDescription: string;
	lowRate: number;
	metadata: {
		path: string;
	};
	postalCode: number;
	propertyCategory: number;
	proximityDistance: number;
	proximityUnit: string;
	rateCurrencyCode: string;
	shortDescription: string;
	stateProvinceCode: string;
	thumbNailUrl: string;
	tripAdvisorRating: number;
	tripAdvisorRatingUrl: string;
	urlBase64: string;
}

export interface HotelEdit {
	id: string;
	thumbNailUrl: string;
	shortDescription: string;
	name: string;
	hotelRating: number;
	address1: string;
	city: string;
	urlBase64: string;
}

const getHotelsUrl = `${baseApiUrl}/api/hotels`;
const uploadFiles = `${basePicturesUrl}/thumbnails`;

// TODO: Just only managing the "happy path" adding error handling here or upper level
// would be a good idea
export const getHotelCollection = (): Promise<HotelEntityApi[]> =>
	Axios.get<HotelEntityApi[]>(getHotelsUrl).then(({ data }) => data);

export const getHotelEdit = (id: string): Promise<HotelEntityApi> => {
	const urlHotel = `${getHotelsUrl}/${id}`;
	return Axios.get<HotelEntityApi>(urlHotel).then(({ data }) => data);
};

export const putHotelEdit = (id: string, data, history) => {
	const urlHotel = `${getHotelsUrl}/${id}`;
	const hotel = mapFromVmToApi(data);

	Axios.put(urlHotel, { ...hotel })
		.then(({ data }) => {
			console.log(data);
			alert("Hotel modificado correctamente");
			history.push(linkRoutes.hotelCollection);
			return data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};

export const postHotelEdit = (data) => {
	const hotel: HotelEdit = mapFromVmToApi(data);
	Axios.post("alskdkek", { ...hotel })
		.then(({ data }) => {
			data;
			console.log("post");
		})
		.catch((err) => {
			console.log(err);
		});
};

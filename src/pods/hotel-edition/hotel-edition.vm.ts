export interface HotelEntityVm {
	id: string;
	picture: string;
	name: string;
	description: string;
	rating: number;
	address: string;
	city: string;
}

export const createDefaultHotelEntity = (): HotelEntityVm => ({
	id: "",
	address: "",
	description: "",
	name: "",
	picture: "",
	rating: 0,
	city: ""
});

export interface HotelEntityVm {
	id: string;
	thumbNailUrl: string;
	name: string;
	description: string;
	rating: number;
	city: string;
}

export const createDefaultHotelEntity = (): HotelEntityVm => ({
	id: "",
	description: "",
	name: "",
	thumbNailUrl: "",
	rating: 0,
	city: ""
});

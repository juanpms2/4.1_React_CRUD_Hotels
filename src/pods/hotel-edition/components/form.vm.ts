export interface FormEntityVm {
	name: string;
	picture: string;
	description: string;
	rating: number;
	city: string;
}

export const createDefaultFomEntity = (): FormEntityVm => ({
	name: "",
	picture: "",
	description: "",
	rating: 0,
	city: ""
});

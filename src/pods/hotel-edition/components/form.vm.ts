export interface FormEntityVm {
	id: string;
	name: string;
	picture: string;
	description: string;
	rating: number;
	city: string;
	urlBase64: string;
}

export const createDefaultFormEntity = (): FormEntityVm => ({
	id: "",
	name: "",
	picture: "",
	description: "",
	rating: 0,
	city: "",
	urlBase64: ""
});

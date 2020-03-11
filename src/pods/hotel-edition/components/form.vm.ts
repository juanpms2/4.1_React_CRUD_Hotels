export interface FormEntityVm {
	id: string;
	name: string;
	thumbNailUrl: string;
	description: string;
	rating: number;
	city: string;
}

export const createDefaultFormEntity = (): FormEntityVm => ({
	id: "",
	name: "",
	thumbNailUrl: "",
	description: "",
	rating: 0,
	city: ""
});

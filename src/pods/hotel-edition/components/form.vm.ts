export interface FormEntityVm {
	name: string;
}

export const createDefaultFomEntity = (): FormEntityVm => ({
	name: ""
});

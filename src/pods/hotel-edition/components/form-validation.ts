import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";
import { rangeNumber } from "@lemoncode/fonk-range-number-validator";

const validationSchema: ValidationSchema = {
	field: {
		name: [
			Validators.required,
			{
				validator: Validators.minLength,
				customArgs: { length: 2 },
				message: "Campo obligatorio, el nombre debe ser mayor de dos caracteres"
			}
		],
		picture: [
			Validators.required,
			{
				validator: Validators.required,
				message: "Campo obligatorio, debe seleccionar una imagen"
			}
		],
		rating: [
			Validators.required,

			{
				validator: rangeNumber.validator,
				customArgs: {
					strictTypes: false,
					min: {
						value: 2,
						inclusive: true
					},
					max: {
						value: 5,
						inclusive: true
					}
				},
				message: "La valoración debe estar entre 2 y 4 estrellas"
			}
		],
		city: [
			Validators.required,
			{
				validator: Validators.required,
				message: "Campo obligatorio"
			}
		],
		description: [
			Validators.required,
			{
				validator: Validators.minLength,
				customArgs: { length: 10 },
				message: "Campo obligatorio, mínimo 10 caracteres"
			}
		]
	}
};

export const formValidation = createFinalFormValidation(validationSchema);

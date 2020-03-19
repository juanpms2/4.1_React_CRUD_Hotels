import * as React from "react";
import { HotelEditionFormComponent } from "./hotel-edition-form.component";
import { FormEntityVm } from "./form.vm";

interface Props {
	formHotelEdition: FormEntityVm;
}

export const HotelEditionFormContainer: React.FunctionComponent<Props> = (
	props
) => {
	const { formHotelEdition } = props;

	return <HotelEditionFormComponent formHotelEdition={formHotelEdition} />;
};

import { generatePath } from "react-router";

interface SwitchRoutes {
	root: string;
	login: string;
	hotelCollection: string;
	hotelEdit: string;
	newHotel: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	login: "/login",
	hotelCollection: "/hotel-collection",
	hotelEdit: "/hotel-edit/:id",
	newHotel: "/hotel-edit/new"
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "hotelEdit"> {
	hotelEdit: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
	...switchRoutes,
	hotelEdit: (id) => generatePath(switchRoutes.hotelEdit, { id })
};

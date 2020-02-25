import * as React from "react";

interface Props {}

interface Context {
	id: string;
	loadId: (id: string) => void;
}

export const HotelCardContext = React.createContext<Context>(null);

export const HotelCardProvider = (props) => {
	const [id, setId] = React.useState<string>("");

	const loadId = (id: string) => {
		setId(id);
	};

	return (
		<HotelCardContext.Provider value={{ id, loadId }}>
			{props.children}
		</HotelCardContext.Provider>
	);
};

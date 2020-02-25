import * as React from "react";

interface Context {
	open: boolean;
	handleClose: (value: boolean) => void;
}

export const SnackbarContext = React.createContext<Context>(null);

export const SnackbarProvider = (props) => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleClose = (value) => {
		setOpen(value);
	};

	return (
		<SnackbarContext.Provider value={{ open, handleClose }}>
			{props.children}
		</SnackbarContext.Provider>
	);
};

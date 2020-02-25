import * as React from "react";
import { useHistory } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { linkRoutes, SessionContext } from "core";
import { LoginEntityVm, createEmptyLogin } from "./login.vm";
import { validateCredentials } from "./login.api";
import { SnackbarContext } from "common";

interface Props {}

export const LoginContainer = () => {
	const history = useHistory();
	const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
	const { updateLogin } = React.useContext(SessionContext);
	const snackbarContext = React.useContext(SnackbarContext);

	const handleLogin = (loginInfo: LoginEntityVm) => {
		validateCredentials(loginInfo.login, loginInfo.password).then(
			(areValidCredentials) => {
				areValidCredentials
					? navigateToHotel(loginInfo)
					: snackbarContext.handleClose(true);
			}
		);
	};

	const navigateToHotel = (loginInfo: LoginEntityVm) => {
		updateLogin(loginInfo.login);
		history.push(linkRoutes.hotelCollection);
	};

	return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} />;
};

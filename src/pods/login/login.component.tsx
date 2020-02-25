import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { LoginEntityVm } from "./login.vm";
import { LoginForm } from "common";
import { CustomizedSnackbars } from "common";

interface Props {
	onLogin: (loginInfo: LoginEntityVm) => void;
	initialLogin: LoginEntityVm;
}

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
	const { onLogin } = props;

	return (
		<Card>
			<CardHeader title="Login" />
			<CardContent>
				<LoginForm onLogin={onLogin} />
			</CardContent>
			<CustomizedSnackbars />
		</Card>
	);
};

import * as React from "react";
import { LoginEntityVm } from "pods";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextField } from "./text-field";
import Button from "@material-ui/core/Button";
import { Form, Field } from "react-final-form";
import { formValidation } from "./login.validation";

const useStyles = makeStyles({
	formContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		minWidth: "200px",
		overflow: "hidden"
	},

	myForm: {
		"& > *": {
			margin: "8px auto"
		}
	}
});

interface Props {
	onLogin: (loginInfo: LoginEntityVm) => void;
	initialLogin: LoginEntityVm;
}

export const LoginForm = (props) => {
	const classes = useStyles(props);
	const { onLogin, initialLogin } = props;

	return (
		<div className={classes.formContainer}>
			<Form
				onSubmit={(values) => onLogin(values)}
				initialValues={initialLogin}
				validate={formValidation.validateForm}
				render={({ handleSubmit, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit} className={classes.myForm} noValidate>
						<Field
							fullWidth
							name="login"
							component={TextField}
							type="text"
							label="Name"
						/>
						<Field
							fullWidth
							name="password"
							component={TextField}
							type="password"
							label="Password"
						/>
						<Button type="submit" variant="contained" color="primary">
							Login
						</Button>
						{/* <pre>{JSON.stringify(values, undefined, 2)}</pre>
						<Field name="login">
							{(props) => <pre>{JSON.stringify(props, undefined, 2)}</pre>}
						</Field> */}
					</form>
				)}
			/>
		</div>
	);
};

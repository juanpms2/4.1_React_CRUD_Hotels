import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export const NativeSelects = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		city: ""
	});

	const handleChange = (name) => (event) => {
		setState({
			...state,
			[name]: event.target.value
		});
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel shrink htmlFor="city-native-label-placeholder">
					City
				</InputLabel>
				<NativeSelect
					value={state.city}
					onChange={handleChange("city")}
					inputProps={{
						name: "City",
						id: "city-native-label-placeholder"
					}}
				>
					<option value="">Seattle</option>
					<option value={10}>New york</option>
					<option value={20}>California</option>
					<option value={30}>Chicago</option>
				</NativeSelect>
				<FormHelperText>Select city</FormHelperText>
			</FormControl>
		</div>
	);
};

import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import { TextField } from "./text-field";
import { formValidation } from "./form-validation";
import { createDefaultFomEntity, FormEntityVm } from "./form.vm";
import { MyDropzone, NativeSelects } from "common";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { CardContent, CardMedia, CardActions } from "@material-ui/core";

import { getHotelEdit } from "common";
import { trackPromise } from "react-promise-tracker";
import { mapToCollection } from "common/mappers";
import { mapFromApiToVm } from "../hotel-edition.mapper";
import { useHistory } from "react-router-dom";
import { linkRoutes, SessionContext } from "core";
import { HotelCardContext } from "common";
import { HotelEntityVm } from "../hotel-edition.vm";

interface Props {
	hotelEdition;
}

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		width: "500px", // rather be rem?
		marginTop: theme.spacing(2)
	},
	cardcontentContainer: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: theme.spacing(2)
	},
	saveButton: {
		display: "flex",
		justifyContent: "center",
		padding: "0 12%",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),

		"& > *": {
			width: "100%"
		}
	}
}));

// Todo there are some harcoded styles move them to class styles
export const HotelCard: React.FunctionComponent<Props> = (props) => {
	const { hotelEdition } = props;
	const classes = useStyles(props);
	const [value, setValue] = React.useState<number | null>(2);

	return (
		<div className={classes.card}>
			<Form
				onSubmit={(values) => console.log(values)}
				initialValues={createDefaultFomEntity()}
				validate={formValidation.validateForm}
				render={({ handleSubmit, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit} noValidate>
						<div className={classes.cardcontentContainer}>
							<Typography component="legend">
								<label>Name</label>
							</Typography>
							<Field
								fullWidth
								name="name"
								component={TextField}
								type="text"
								placeholder={hotelEdition.name}
							/>
						</div>
						<div className={classes.cardcontentContainer}>
							<img
								src={hotelEdition.picture}
								alt={hotelEdition.name}
								style={{ height: 0, paddingTop: "56.25%" }}
							/>
						</div>
						<div>
							<Typography component="legend">
								<label>Select Image</label>
							</Typography>
							<MyDropzone />
						</div>

						<div className={classes.cardcontentContainer}>
							<Box component="fieldset" mb={3} borderColor="transparent">
								<Typography component="legend">Controlled</Typography>
								<Rating
									name="simple-controlled"
									value={value}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
								/>
							</Box>
							<NativeSelects />
						</div>
						<div className={classes.cardcontentContainer}>
							<Typography component="legend">
								<label>Description</label>
							</Typography>
							<TextareaAutosize
								aria-label="minimum height"
								rowsMin={8}
								placeholder="Add description"
							/>
						</div>
						<div className={classes.saveButton}>
							<Button type="submit" variant="contained" color="primary">
								Save
							</Button>
						</div>
					</form>
				)}
			/>
		</div>
		// <Card className={classes.card}>
		// 	<CardHeader
		// 		avatar={<Avatar aria-label="Hotel">{hotelEdition.rating}</Avatar>}
		// 		action={
		// 			<IconButton>
		// 				<MoreVertIcon />
		// 			</IconButton>
		// 		}
		// 		title={hotelEdition.name}
		// 		subheader={hotelEdition.address}
		// 	/>
		// 	<CardContent>
		// 		<div className={classes.cardcontentContainer}>
		// 			<CardMedia
		// 				image={hotelEdition.picture}
		// 				title={hotelEdition.name}
		// 				style={{ height: 0, paddingTop: "56.25%" }}
		// 			/>
		// 			<Typography variant="subtitle1" gutterBottom>
		// 				{hotelEdition.description}
		// 			</Typography>
		// 		</div>
		// 	</CardContent>
		// 	<CardActions>
		// 		<IconButton aria-label="Add to favorites">
		// 			<EditIcon />
		// 		</IconButton>
		// 		<IconButton aria-label="Share">
		// 			<DeleteIcon />
		// 		</IconButton>
		// 	</CardActions>
		// </Card>
	);
};

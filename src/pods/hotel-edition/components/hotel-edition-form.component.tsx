import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import { TextField } from "./text-field";
import { formValidation } from "./form-validation";
import { HotelEntityVm, createDefaultHotelEntity } from "../hotel-edition.vm";
import { MyDropzoneContainer, NativeSelects } from "common";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

interface Props {
	hotelEdition: HotelEntityVm;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		boxShadow: "none",

		"& > *": {
			width: "100%",
			height: "auto"
		}
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	}
}));

// Todo there are some harcoded styles move them to class styles
export const HotelCard: React.FunctionComponent<Props> = (props) => {
	const { hotelEdition } = props;
	const classes = useStyles(props);

	return (
		<Form
			onSubmit={(values) => console.log(values)}
			initialValues={{
				rating: hotelEdition.rating,
				city: hotelEdition.city,
				description: hotelEdition.description
			}}
			validate={formValidation.validateForm}
			render={({ handleSubmit, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit} noValidate>
					<div className={classes.root}>
						<Grid container spacing={10}>
							<Grid item xs={2}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Name</label>
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={10}>
								<Paper className={classes.paper}>
									<Field
										fullWidth
										name="name"
										component={TextField}
										type="text"
										placeholder={hotelEdition.name}
									/>
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Card className={classes.root}>
										<CardMedia
											className={classes.media}
											image={hotelEdition.picture}
											title={hotelEdition.name}
										/>
									</Card>
								</Paper>
							</Grid>
						</Grid>
					</div>

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Select Image</label>
									</Typography>
									<Field name="picture" component={MyDropzoneContainer} />

									{/* <MyDropzoneContainer /> */}
								</Paper>
							</Grid>
						</Grid>
					</div>

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Rating</label>
									</Typography>
									<Field name="rating" type="rating">
										{({ input: { name, onChange, value } }) => (
											<div>
												<Box
													component="fieldset"
													mb={3}
													borderColor="transparent"
												>
													<Rating
														name={name}
														value={parseInt(value)}
														onChange={onChange}
													/>
												</Box>
											</div>
										)}
									</Field>
								</Paper>
							</Grid>
							<Grid item xs={6}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>City</label>
									</Typography>
									<NativeSelects />
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div className={classes.root}>
						<Grid container spacing={10}>
							<Grid item xs={2}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Description</label>
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={10}>
								<Paper className={classes.paper}>
									<Field name="description">
										{(props) => (
											<TextareaAutosize
												aria-label="minimum height"
												rowsMin={8}
												placeholder="Add description"
												name={props.input.name}
												value={props.input.value}
												onChange={props.input.onChange}
											/>
										)}
									</Field>
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Button type="submit" variant="contained" color="primary">
										Save
									</Button>
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div style={{ maxWidth: "200px" }}>
						<pre>{JSON.stringify(values, undefined, 2)}</pre>
						<Field name="data">
							{(props) => <pre>{JSON.stringify(props, undefined, 2)}</pre>}
						</Field>
					</div>
				</form>
			)}
		/>
	);
};

import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import { TextField } from "./text-field";
import { formValidation } from "./form-validation";
import { FormEntityVm, createDefaultFormEntity } from "./form.vm";
import { MyDropzoneContainer } from "common";
import { NativeSelects } from "common";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Alert from "@material-ui/lab/Alert";
import { putHotelEdit, postHotelEdit } from "common";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface Props {
	formHotelEdition: FormEntityVm;
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
		background: "none",

		"& > *": {
			width: "100%",
			height: "auto"
		}
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	padding0: {
		paddingBottom: 0
	}
}));

// Todo there are some harcoded styles move them to class styles
export const HotelCard: React.FunctionComponent<Props> = (props) => {
	const { id } = useParams();
	const { formHotelEdition } = props;
	const classes = useStyles(props);
	const history = useHistory();

	return (
		<Form
			onSubmit={(values) =>
				id === ""
					? putHotelEdit(formHotelEdition.id, values, history)
					: postHotelEdit(values, history)
			}
			initialValues={formHotelEdition}
			validate={(values) => formValidation.validateForm(values)}
			render={({
				handleSubmit,
				form,
				submitting,
				pristine,
				values,
				errors
			}) => (
				<form onSubmit={handleSubmit}>
					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Grid item xs={2}>
									<Paper className={classes.paper}>
										<Typography component="legend">
											<label>Name</label>
										</Typography>
									</Paper>
								</Grid>
								<Paper className={classes.paper}>
									<Field
										fullWidth
										name="name"
										component={TextField}
										type="text"
										placeholder={formHotelEdition.name}
									/>
								</Paper>
							</Grid>
						</Grid>
					</div>
					{formHotelEdition.thumbNailUrl && (
						<div className={classes.root}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										<Card className={classes.root}>
											<CardMedia
												className={classes.media}
												image={formHotelEdition.thumbNailUrl}
												title={formHotelEdition.name}
											/>
										</Card>
									</Paper>
								</Grid>
							</Grid>
						</div>
					)}

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Select Picture</label>
									</Typography>
									<MyDropzoneContainer />
								</Paper>
							</Grid>
						</Grid>
					</div>

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<Paper className={classes.paper}>
									<Typography component="legend">
										<label>Rating</label>
									</Typography>
									<Field name="rating" type="rating">
										{({ input: { name, onChange, value }, meta }) => (
											<FormControl>
												<div>
													<Box
														component="fieldset"
														mb={3}
														borderColor="transparent"
													>
														<Rating
															name={name}
															value={Number(value)}
															onChange={onChange}
														/>
													</Box>
												</div>
												<FormHelperText>
													{meta.error && meta.touched && (
														<Alert severity="error">{meta.error}</Alert>
													)}
												</FormHelperText>
											</FormControl>
										)}
									</Field>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={6}>
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
							<Grid item xs={12}>
								<Grid item xs={12} sm={2}>
									<Paper className={classes.paper}>
										<Typography component="legend">
											<label>Description</label>
										</Typography>
									</Paper>
								</Grid>
								<Paper className={classes.paper}>
									<Field name="description">
										{({ input, meta }) => (
											<FormControl>
												<TextareaAutosize
													aria-label="minimum height"
													rowsMin={8}
													placeholder="Add description"
													{...input}
												/>
												<FormHelperText>
													{meta.error && meta.touched && (
														<Alert severity="error">{meta.error}</Alert>
													)}
												</FormHelperText>
											</FormControl>
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
					{/* <div style={{ maxWidth: "200px" }}>
						<pre>{JSON.stringify(values, undefined, 2)}</pre>
						<Field name="data">
							{(props) => <pre>{JSON.stringify(props, undefined, 2)}</pre>}
						</Field>
					</div> */}
				</form>
			)}
		/>
	);
};

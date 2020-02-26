import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

interface Props {
	hotelEdition;
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
	const [value, setValue] = React.useState<number | null>(hotelEdition.rating);

	React.useEffect(() => {
		setValue(hotelEdition.rating);
	}, [hotelEdition.rating]);

	return (
		<Form
			onSubmit={(values) => console.log(values)}
			initialValues={createDefaultFomEntity()}
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
									<MyDropzone />
								</Paper>
							</Grid>
						</Grid>
					</div>

					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Paper className={classes.paper}>
									<Box component="fieldset" mb={3} borderColor="transparent">
										<Typography component="legend">Rating</Typography>
										<Rating
											name="rating"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/>
									</Box>
								</Paper>
							</Grid>
							<Grid item xs={6}>
								<Paper className={classes.paper}>
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
									<TextareaAutosize
										aria-label="minimum height"
										rowsMin={8}
										placeholder="Add description"
									/>
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
				</form>
			)}
		/>
	);
};

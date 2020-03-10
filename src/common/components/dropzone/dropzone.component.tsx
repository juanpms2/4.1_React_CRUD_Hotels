import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Field } from "react-final-form";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";
import { TextField } from "./text-field";

interface Props {
	getRootProps;
	getInputProps;
	acceptedFilesd;
	rejectedFiles;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		border: "2px dashed #0087F7",
		borderRadius: "5px",
		background: "#F4F4F4",
		minHeight: "75px",
		padding: "10px 40px",
		boxSizing: "border-box",
		"& > *": {
			cursor: "pointer",
			fontFamily: "arial",
			fontSize: "18px",
			fontWeight: "400",
			textAlign: "center",
			margin: "2em 0",
			color: "#646C7F"
		}
	},
	thumbsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 16
	},
	thumb: {
		display: "inline-flex",
		borderRadius: 2,
		border: "1px solid #eaeaea",
		marginBottom: 8,
		marginRight: 8,
		width: 100,
		height: 100,
		padding: 4,
		boxSizing: "border-box"
	},
	thumbInner: {
		display: "flex",
		minWidth: 0,
		overflow: "hidden"
	},
	img: {
		display: "block",
		width: "auto",
		height: "100%"
	}
}));

export const MyDropzoneComponent = (props) => {
	const classes = useStyles(props);
	const [urlBase64, setUrlBase64] = React.useState();
	const { acceptedFiles, rejectedFiles, getRootProps, getInputProps } = props;

	const generateBase64Url = React.useCallback((file) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			file = {
				...file,
				preview: fileReader.result
			};
			setUrlBase64(file.preview);
			// console.log(urlBase64);
		};
		fileReader.readAsDataURL(file);
	}, []);

	// React.useEffect(() => {}, [urlBase64]);

	const thumbs = acceptedFiles.map((file) => {
		generateBase64Url(file);
		return (
			<Grid item xs={3} key="ñalskjdfñlkjdñkajsd">
				<div className={classes.thumb} key={file.name}>
					<div className={classes.thumbInner}>
						<img src={urlBase64} className={classes.img} />
					</div>
				</div>
				<p>
					{file.name} - {file.size} bytes
				</p>
			</Grid>
		);
	});

	const rejected = rejectedFiles.map((file) => (
		<Alert severity="error">
			{file.name} no es un archivo válido. Sólo jpeg, jpg o png de tamaño
			inferior a 100000 Kb{" "}
		</Alert>
	));

	return (
		<section className="container">
			<Field
				name="urlBase64"
				type="hidden"
				component={TextField}
				defaultValue={urlBase64}
			/>
			<Field
				name="picture"
				type="text"
				onChange={(event) => {
					generateBase64Url(event.target.value);
					event.target.value = urlBase64;
					console.log(event.target.value);
				}}
			>
				{({ input: { name, onChange, value }, meta }) => (
					<div
						{...getRootProps({
							className: "dropzone",
							value: value,
							name: name,
							onChange: onChange
						})}
						className={classes.root}
					>
						<FormControl>
							<input {...getInputProps()} type="file" />
						</FormControl>

						<p>Drag 'n' drop some files here, or click to select files</p>
						{meta.error && meta.touched && (
							<Alert severity="error">{meta.error}</Alert>
						)}
					</div>
				)}
			</Field>
			<aside className={classes.thumbsContainer}>
				<Grid container spacing={3}>
					{thumbs}
				</Grid>

				{rejected}
			</aside>
		</section>
	);
};

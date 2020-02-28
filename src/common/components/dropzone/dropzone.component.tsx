import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Field } from "react-final-form";

interface Props {
	getRootProps: () => void;
	getInputProps: () => void;
	files: () => void;
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
	const { getInputProps, getRootProps, files } = props;
	const classes = useStyles(props);

	const thumbs = files.map((file) => (
		<div className={classes.thumb} key={file.name}>
			<div className={classes.thumbInner}>
				<img src={file.preview} className={classes.img} />
			</div>
		</div>
	));
	const fileName = files.map((file) => (
		<p key={file.name}>
			{file.name} - {file.size} bytes
		</p>
	));

	return (
		<Field name="picture">
			{(props) => (
				<section className="container">
					<div
						{...getRootProps({ className: "dropzone" })}
						className={classes.root}
					>
						{/* Pasamos la propiedades input de Field a la función getInputProps de dropzone  */}
						<input {...getInputProps(props.input)} />
						<p>Drag 'n' drop some files here, or click to select files</p>
					</div>
					<aside className={classes.thumbsContainer}>
						{thumbs}
						{fileName}
					</aside>
				</section>
			)}
		</Field>
	);
};

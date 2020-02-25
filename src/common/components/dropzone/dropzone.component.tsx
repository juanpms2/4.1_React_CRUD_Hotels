import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		border: "2px dashed #0087F7",
		borderRadius: "5px",
		background: "#F4F4F4",
		minHeight: "150px",
		padding: "54px",
		boxSizing: "border-box",
		"& > *": {
			cursor: "pointer",
			fontFamily: "arial",
			fontSize: "24px",
			fontWeight: "400",
			textAlign: "center",
			margin: "2em 0",
			color: "#646C7F"
		}
	}
}));

export const MyDropzone = () => {
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	const classes = useStyles();

	return (
		<div className={classes.root} {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

export const MyDropzone = (props) => {
	const [files, setFiles] = useState([]);
	const classes = useStyles(props);
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file)
					})
				)
			);
		}
	});

	const thumbs = files.map((file) => (
		<div className={classes.thumb} key={file.name}>
			<div className={classes.thumbInner}>
				<img src={file.preview} className={classes.img} />
			</div>
		</div>
	));

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<section className="container">
			<div
				{...getRootProps({ className: "dropzone" })}
				className={classes.root}
			>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside className={classes.thumbsContainer}>{thumbs}</aside>
		</section>
	);
};

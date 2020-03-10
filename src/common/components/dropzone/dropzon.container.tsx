import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MyDropzoneComponent } from "./dropzone.component";

export const MyDropzoneContainer = (props) => {
	const [files, setFiles] = useState([]);

	const {
		acceptedFiles,
		rejectedFiles,
		getRootProps,
		getInputProps
	} = useDropzone({
		accept: "image/jpeg, image/png, image/jpg",
		maxSize: 1000000,
		multiple: true,
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

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<MyDropzoneComponent
			getRootProps={getRootProps}
			getInputProps={getInputProps}
			acceptedFiles={files}
			rejectedFiles={rejectedFiles}
		/>
	);
};

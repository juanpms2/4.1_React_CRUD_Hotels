import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MyDropzoneComponent } from "./dropzone.component";

export const MyDropzoneContainer = (props) => {
	const [file, setFile] = useState({});

	const {
		acceptedFiles,
		rejectedFiles,
		getRootProps,
		getInputProps
	} = useDropzone({
		accept: "image/jpeg, image/png, image/jpg",
		maxSize: 1000000,
		multiple: false,
		onDrop: (acceptedFiles) => {
			let file = acceptedFiles[0];
			const fileReader = new FileReader();
			fileReader.onload = () => {
				file = {
					...file,
					preview: fileReader.result
				};
				setFile(file);
			};
			fileReader.readAsDataURL(file);
		}
	});

	return (
		<MyDropzoneComponent
			getRootProps={getRootProps}
			getInputProps={getInputProps}
			acceptedFile={file}
			rejectedFiles={rejectedFiles}
		/>
	);
};

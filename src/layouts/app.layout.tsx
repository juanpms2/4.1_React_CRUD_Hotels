import * as React from "react";
import { TopMenu } from "pods";

export const AppLayout: React.FunctionComponent = (props) => {
	const { children } = props;

	return (
		<>
			<TopMenu />
			{children}
		</>
	);
};

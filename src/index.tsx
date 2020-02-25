import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginScene, HotelCollectionScene, HotelEditionScene } from "scenes";
import { switchRoutes, SessionProvider } from "core";
import { FooterAppBar } from "pods";
import { Spinner, HotelCardProvider } from "common";

ReactDOM.render(
	<SessionProvider>
		<HotelCardProvider>
			<Spinner />
			<HashRouter>
				<Switch>
					<Route
						exact={true}
						path={[switchRoutes.root, switchRoutes.login]}
						component={LoginScene}
					/>
					<Route
						path={switchRoutes.hotelCollection}
						component={HotelCollectionScene}
					/>
					<Route path={switchRoutes.hotelEdit} component={HotelEditionScene} />
				</Switch>
			</HashRouter>
			<FooterAppBar />
		</HotelCardProvider>
	</SessionProvider>,
	document.getElementById("root")
);

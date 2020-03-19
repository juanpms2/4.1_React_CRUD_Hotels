import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import {
	LoginScene,
	HotelCollectionScene,
	HotelEditionScene,
	NewHotelScene
} from "scenes";
import { switchRoutes, SessionProvider } from "core";
import { FooterAppBar } from "pods";
import { Spinner, HotelCardProvider } from "common";

export const App: React.FunctionComponent = () => {
	return (
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
						<Route
							path={switchRoutes.hotelEdit}
							component={HotelEditionScene}
						/>
						<Route path={switchRoutes.newHotel} component={NewHotelScene} />
					</Switch>
				</HashRouter>
				<FooterAppBar />
			</HotelCardProvider>
		</SessionProvider>
	);
};

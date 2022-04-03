import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../router/RequireAuth";
import Event from "../pages/Event";
import Login from "../pages/Login";
const AppRouter: FC = () => {
	return (
		<Routes>
			<Route
				path="/event"
				element={
					<RequireAuth redirectTo="/">
						<Event />
					</RequireAuth>
				}
			/>

			<Route path="/" element={<Login />} />
		</Routes>
	);
};

export default AppRouter;

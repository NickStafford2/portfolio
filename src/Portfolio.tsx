import App from "./App.tsx";
import { StrictMode } from "react";
import Header from "@/Header/Header.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";
import WarpingOrbScene from "./three/MyLoop/threeWithShaders.tsx";

export function Portfolio() {
	// add this back If I want a sidebar.

	return (
		<StrictMode>
			<ThemeProvider>
				<Header></Header>
				<App />
				<WarpingOrbScene></WarpingOrbScene>
			</ThemeProvider>
		</StrictMode>
	);
}

// biome-ignore assist/source/organizeImports: false
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { resolve } from "node:path";
import { nitro } from "nitro/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsConfigPaths(),
		tanstackStart(),
		tailwindcss(),
		nitro(),
		viteReact(),
	],

	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});

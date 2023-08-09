import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@base': path.resolve(__dirname, 'src/components/base-components'),
			'@icons': path.resolve(__dirname, 'src/components/icons'),
			'@themes': path.resolve(__dirname, 'src/styles/themes'),
			'@story': path.resolve(__dirname, 'src/stories'),
			'@modular': path.resolve(__dirname, 'src/components/modular'),
			//"@base-style": path.resolve(__dirname, "src/components/base-styles"),
			'@base-functions': path.resolve(__dirname, 'src/components/base-functions'),
			'@typography': path.resolve(__dirname, 'src/components/base-components/BaseTypography'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'hst-ui',
			fileName: (format) => `hst-ui.${format}.js`,
			formats: ['umd', 'es'],
		},
		//target: 'es2015',
		sourcemap: false,
		rollupOptions: {
			external: ['react', 'react-dom', 'styled-components'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'styled-components': 'styled',
				},
			},
		},
	},
	server: { port: 3000, open: '/' },
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
})

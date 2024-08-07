import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'aynaui',
			fileName: (format) => `aynaui.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
})

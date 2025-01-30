import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/state.ts', // Entry point
  output: [
    {
      file: 'dist/state.js', // Output for ESModules
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies (like React)
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS to ESModules
    typescript({ tsconfig: './tsconfig.json' }), // Handles TypeScript
  ],
  external: ['react', 'react-dom'], // Do not bundle React and ReactDOM
};

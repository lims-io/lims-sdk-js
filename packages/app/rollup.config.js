import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const plugins = [
    resolve(),
    commonjs()
];

// List of module IDs to exclude
const external = Object.keys(
    Object.assign({}, pkg.dependencies)
);

export default {
    input: 'index',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' }
    ],
    plugins,
    external
};
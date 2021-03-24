module.exports = function (name) {
  const template = `
{
  "compilerOptions": {
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "es6" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "jsx": "preserve" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "sourceMap": true /* Generates corresponding '.map' file. */,
    "strict": true /* Enable all strict type-checking options. */,
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "baseUrl": "./" /* Base directory to resolve non-absolute module names. */,
    "paths": {
      "@/*": ["src/*"],
      "@config/*": ["config/*"]
    } /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */,
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "include": ["./typings", "./src", "./config"]
}
  `;
  return { template, dir: "", name: "tsconfig.json" };
};

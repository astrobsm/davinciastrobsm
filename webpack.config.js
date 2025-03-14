// webpack.config.js (backend)
// webpack.config.js (ES Module)
import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './server.js', // Adjust as needed
  target: 'node',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^(bson-ext|kerberos|@mongodb-js\/zstd|snappy|aws4|mongodb-client-encryption)$/
    })
  ]
  // Other configuration settings...
};
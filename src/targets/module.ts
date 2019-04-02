import { Input } from '../types';
import compile from '../utils/compile';
import * as logger from '../utils/logger';

type Options = Input & {
  options?: { flow?: boolean };
};

export default async function build({
  root,
  source,
  output,
  options,
}: Options) {
  logger.info('building files for module target');

  await compile({
    root,
    source,
    output,
    options: {
      presets: [
        [
          require.resolve('metro-react-native-babel-preset'),
          { disableImportExportTransform: true },
        ],
      ],
    },
    flow: options && options.flow ? true : false,
  });
}

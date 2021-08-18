import devConfigs from './dev';
import prodConfigs from './prod';

const config =
  process.env.REACT_APP_ENV === 'development' ? devConfigs : prodConfigs;

export default config;

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bytequest.gcsecs',
  appName: 'Byte Quest GCSE CS',
  webDir: 'dist',
  android: {
    backgroundColor: '#F7F5FA',
  },
  plugins: {
    SplashScreen: {
      backgroundColor: '#055B5C',
      showSpinner: false,
    },
  },
};

export default config;

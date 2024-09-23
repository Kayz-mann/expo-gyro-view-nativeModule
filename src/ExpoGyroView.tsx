import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoGyroViewProps } from './ExpoGyroView.types';

const NativeView: React.ComponentType<ExpoGyroViewProps> =
  requireNativeViewManager('ExpoGyroView');

export default function ExpoGyroView(props: ExpoGyroViewProps) {
  return <NativeView {...props} />;
}

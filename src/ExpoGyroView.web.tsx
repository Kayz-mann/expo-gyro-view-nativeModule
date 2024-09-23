import * as React from 'react';

import { ExpoGyroViewProps } from './ExpoGyroView.types';

export default function ExpoGyroView(props: ExpoGyroViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

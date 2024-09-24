import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoGyroViewProps } from "./ExpoGyroView.types";
import { ViewProps, ViewStyle } from "react-native";

export type OnGyroEvent = {
  y: number;
};

export type Props = {
  placeholderText?: string;
  style?: ViewStyle;
  track: boolean;
  onGyroEvent?: (event: { nativeEvent: OnGyroEvent }) => void;
} & ViewProps;

const NativeView: React.ComponentType<ExpoGyroViewProps> =
  requireNativeViewManager("ExpoGyroView");

export default function ExpoGyroView(props: ExpoGyroViewProps) {
  return <NativeView {...props} />;
}

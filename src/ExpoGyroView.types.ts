import { ViewStyle } from "react-native";

import { OnGyroEvent } from "./ExpoGyroView";

export type ChangeEventPayload = {
  value: string;
};

export type ExpoGyroViewProps = {
  placeholderText?: string;
  style?: ViewStyle;
  track: boolean;
  onGyroEvent?: (event: { nativeEvent: OnGyroEvent }) => void;
};

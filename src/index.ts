export {
  default as GyroView,
  Props as ExpoGyroViewProps,
} from "./ExpoGyroView";

// import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// // Import the native module. On web, it will be resolved to ExpoGyroView.web.ts
// // and on native platforms to ExpoGyroView.ts
// import ExpoGyroViewModule from './ExpoGyroViewModule';
// import ExpoGyroView from './ExpoGyroView';
// import { ChangeEventPayload, ExpoGyroViewProps } from './ExpoGyroView.types';

// // Get the native constant value.
// export const PI = ExpoGyroViewModule.PI;

// export function hello(): string {
//   return ExpoGyroViewModule.hello();
// }

// export async function setValueAsync(value: string) {
//   return await ExpoGyroViewModule.setValueAsync(value);
// }

// const emitter = new EventEmitter(ExpoGyroViewModule ?? NativeModulesProxy.ExpoGyroView);

// export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
//   return emitter.addListener<ChangeEventPayload>('onChange', listener);
// }

// export { ExpoGyroView, ExpoGyroViewProps, ChangeEventPayload };

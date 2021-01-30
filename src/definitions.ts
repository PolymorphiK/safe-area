import { ListenerCallback, PluginListenerHandle } from "@capacitor/core";

declare module '@capacitor/core' {
  interface PluginRegistry {
    SafeArea: SafeAreaPlugin;
  }
}

export interface SafeAreaPlugin {
  init(): Promise<void>;
  getInsets(): Promise<ISafeAreaInset>;
  onInsetsChanged(listener: ListenerCallback): PluginListenerHandle;
}

export interface ISafeAreaInset {
	top: number;
	bottom: number;
	left: number;
	right: number;
};
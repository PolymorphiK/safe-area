import { ListenerCallback, PluginListenerHandle, WebPlugin } from '@capacitor/core';
import { ISafeAreaInset, SafeAreaPlugin } from './definitions';

export class SafeAreaWeb extends WebPlugin implements SafeAreaPlugin {
	constructor() {
		super({
		name: 'SafeArea',
		platforms: ['web'],
		});
	}

	async init(): Promise<void> { }

	async getInsets(): Promise<ISafeAreaInset> {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}
	}

	onInsetsChanged(listener: ListenerCallback) : PluginListenerHandle {
		return this.addListener("onInsetsChanged", listener);
	}
}

const SafeArea = new SafeAreaWeb();

export { SafeArea };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SafeArea);

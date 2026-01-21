import { App, PluginSettingTab, Setting } from "obsidian";
import R2SyncPlugin from "./main";

export interface R2SyncSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: R2SyncSettings = {
	mySetting: 'default'
}

export class R2SyncSettingTab extends PluginSettingTab {
	plugin: R2SyncPlugin;

	constructor(app: App, plugin: R2SyncPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}

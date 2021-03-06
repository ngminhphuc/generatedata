/**
 * This file is autogenerated. Do not edit!
 * ----------------------------------------
 **/

import { GDLocale } from '~types/general';
import { ExportTypeFolder } from './_plugins';

export type AppType = 'login'| 'open' | 'closed';

export type EnvSettings = {
	version: string;
	appType: AppType; 
	defaultNumRows: number;
	maxDemoModeRows: number;
	maxDataSetHistorySize: number;
	defaultLocale: GDLocale;
	defaultExportType: ExportTypeFolder;
	apiEnabled: boolean;
	availableLocales: GDLocale[];
};

const envSettings: EnvSettings = {
	"version": "4.0.0-alpha-20201111",
	"appType": "login",
	"defaultNumRows": 100,
	"maxDemoModeRows": 1000,
	"maxDataSetHistorySize": 200,
	"defaultLocale": "en",
	"defaultExportType": "JSON",
	"apiEnabled": false,
	"availableLocales": [
		"ar",
		"de",
		"en",
		"es",
		"fr",
		"ja",
		"nl",
		"ta",
		"zh"
	]
};

export default envSettings;

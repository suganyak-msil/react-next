import enINData from './jsons/en-IN.json';
import taINData from './jsons/ta-IN.json';


type AllLanguagesType = {
    readonly [key: string]: any,
}

// -------------------------------------------

export enum LanguageCode {
    enIN = "en-IN",
    taIN = "ta-IN",
}

export const AllLanguages: AllLanguagesType = {
    "en-IN": enINData,
    "ta-IN": taINData,
}

export const i18nList = [
    { id: LanguageCode.enIN, name: 'English (India)', nativename: 'English (India)' },
    { id: LanguageCode.taIN, name: 'Tamil', nativename: 'தமிழ்' }
] as const;


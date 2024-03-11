import { LanguageCode } from "./AllLanguages";

export interface ILanguageData { 
    data: {
        general : {
            greet : string;
        }
    },
    code: LanguageCode,
}


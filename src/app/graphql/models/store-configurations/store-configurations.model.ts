import { MenuModel } from "../menu/menu.model";

export interface ConfigurationStore {
    StoreName: string;
    MeasurementUnitsDecimalSeparator: string;
    MeasurementUnitsDecimalPlaces: string;
    CurrencyDecimalSeparator: string;
    LengthUnitsDecimalSeparator: string;
    LengthUnitsDecimalPlaces: string;
    CurrencyDecimalPlaces: string;
    StoreImage: string;
    LanguageTemplate: string;
    VolumenIdentifier: string;
    MesuIdentifier: string;
    languageIdentifier: string;
    DateFormatIdentifier: string;
    CurrenceIdentifier: string;
    VolumeUnitsName: string;
  }
  
  export interface StyleType {
    StyleTypeName: string;
    StyleValue: string;
    StyleTypeDescription: string;
  }

  export interface StoreConfigurationsResponse {
    data: {
      ConfigurationStore: ConfigurationStore;
      Menu: MenuModel[];
      StyleType: StyleType[];
    };
  }
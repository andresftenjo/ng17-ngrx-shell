export interface Language {
    code: string;
    name: string;
  }
  
  export interface Currency {
    code: string;
    name: string;
  }
  
  export interface MeasurementUnits {
    length: string[];
    weight: string[];
    volume: string[];
  }
  
  export interface configurationsModel {
    languages?: Language[];
    selectedLanguage?: string;
    currencies?: Currency[];
    selectedCurrency?: string;
    selectedLengthUnit: string,
    selectedWeighthUnit: string,
    selectedVolumeUnit: string,
    measurement_units?: MeasurementUnits;
    storeColors?: any;
    storeMenu?: any[],
    openSelectAccount?: boolean;
  }

  export function setConfigurations(configurationStore: any): configurationsModel {
    return {
      storeColors: {
        primary: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'OneColor')[0].StyleValue,
        secondary: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'TwoColor')[0].StyleValue,
        titles: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'ThreeColor')[0].StyleValue,
        alerts: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'FourColor')[0].StyleValue,
        bodyFont: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'FontColor')[0].StyleValue,
        buttonsFont: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'FontButtonColor')[0].StyleValue,
        highlightColor: configurationStore.StyleType.filter((style: any) => style.StyleTypeName === 'OneColor')[0].StyleValue
      },
      languages: [
        { code: "en", name: "English" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "de", name: "German" },
        { code: "zh", name: "Chinese" }
      ],
      selectedLanguage: 'es',
      currencies: [
        { code: "USD", name: "United States Dollar" },
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "British Pound Sterling" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "CNY", name: "Chinese Yuan" }
      ],
      selectedCurrency: configurationStore.ConfigurationStore[0].CurrenceIdentifier,
      selectedLengthUnit: configurationStore.ConfigurationStore[0].CurrenceIdentifier,
      selectedWeighthUnit: configurationStore.ConfigurationStore[0].MesuIdentifier,
      selectedVolumeUnit: configurationStore.ConfigurationStore[0].VolumenIdentifier,
      measurement_units: {
        length: [
          "meter",
          "centimeter",
          "inch",
          "foot",
          "kilometer"
        ],
        weight: [
          "gram",
          "kilogram",
          "pound",
          "ounce"
        ],
        volume: [
          "liter",
          "milliliter",
          "gallon",
          "fluid ounce"
        ]
      },
      storeMenu: [
        {
          label: "inicio",
          iconClass: "home-icon-menu",
          routerLink: "/external/home",
          showInCenterMenu: true,
          centerMenuImageUrl: "url-2",
          centerMenuAdditionalText: null,
          default: true
        },
        {
          label: "Toma de pedido",
          iconClass: "cart-icon-menu",
          routerLink: "/external/placeorder",
          showInCenterMenu: true,
          centerMenuImageUrl: "url-1",
          centerMenuAdditionalText: "additional-text-1",
          featuredOption: true
        },
        {
          label: "Consulta de pedido",
          iconClass: "orders-icon-menu",
          routerLink: "/external/yourorder",
          showInCenterMenu: true,
          centerMenuImageUrl: "url-1",
          centerMenuAdditionalText: "additional-text-1",
          featuredOption: true
        },
        {
          label: "Mi perfil",
          iconClass: "myprofile-icon-menu",
          routerLink: "/external/myprofile",
          showInCenterMenu: true,
          centerMenuImageUrl: "url-2",
          centerMenuAdditionalText: null,
        },
        {
          label: "Contacto",
          iconClass: "contactus-icon-menu",
          routerLink: "/external/contactus",
          showInCenterMenu: true,
          centerMenuImageUrl: "url-2",
          centerMenuAdditionalText: null,
        }
      ],
      openSelectAccount: false
    };
  }
  
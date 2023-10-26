import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
import TRANSLATIONS_EN from "./en/en-translation.json";
import TRANSLATIONS_ID from "./id/id-translation.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      id: {
        translation: TRANSLATIONS_ID,
      },
    },
  });
i18n.init({
  interpolation: {
    format: function (value, format, lng) {
      if (value instanceof Date) return moment(value).format(format);
      if (typeof value === "number")
        return new Intl.NumberFormat().format(value);
      return value;
    },
  },
});
export { i18n };

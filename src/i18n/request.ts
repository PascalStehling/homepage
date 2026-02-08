import { getRequestConfig } from "next-intl/server";
import en from "../../messages/en.json";
import de from "../../messages/de.json";

const messages: Record<string, any> = { en, de };

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && messages[locale] ? locale : "en";
  return {
    locale: validLocale,
    messages: messages[validLocale],
  };
});

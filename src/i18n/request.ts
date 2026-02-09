import { getRequestConfig } from "next-intl/server";
import { enMessages } from "../../messages/en";
import { deMessages } from "../../messages/de";

const messages = { en: enMessages, de: deMessages } as const;

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && messages[locale as keyof typeof messages]
    ? (locale as keyof typeof messages)
    : "en";
  return {
    locale: validLocale,
    messages: messages[validLocale],
  };
});

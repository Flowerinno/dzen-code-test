import { useState, useLayoutEffect } from "react";
import { getLanguage } from "./languageHandlers";

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState({ date: "", time: "" });
  let language = getLanguage();
  useLayoutEffect(() => {
    let languageCode = "";

    if (language === "ru") {
      languageCode = "en-US";
    } else {
      languageCode = "ru-RU";
    }

    const currentTimestamp = new Date();

    const currentDate = new Date(currentTimestamp);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    const formatter = new Intl.DateTimeFormat(languageCode, options);

    const minutes = String(currentTimestamp.getMinutes()).padStart(2, "0");
    const currentTime = `${currentTimestamp.getHours()}:${minutes}`;

    const formattedDate = {
      date: formatter.format(currentDate),
      time: currentTime,
    };

    setFormattedDate(formattedDate);
  }, [language]);

  return formattedDate;
};

export default useFormattedDate;

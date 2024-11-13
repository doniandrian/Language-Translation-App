import Select from "react-select";
import Language from "../data/language.json";
import { useEffect, useMemo, useState } from "react";
import ArrowIcon from "../assets/arrow-right.svg";
import { fetchData } from "../api.ts";

// Helper function to decode HTML entities
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decodeHtmlEntities(text: any) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

function Text() {
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const optionsLanguage = useMemo(() => {
    return Language.languages.map((item) => ({
      label: item.language,
      value: item.code,
    }));
  }, []);

  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState({
    label: "Indonesian",
    value: "id",
  });

  const [selectedLanguageTo, setSelectedLanguageTo] = useState({
    label: "English",
    value: "en",
  });

  const handleChangeOriginalText = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setOriginalText(e.target.value);
  };

  useEffect(() => {
    const translateText = async () => {
      try {
        if (originalText.trim()) {
          const translated = await fetchData(
            originalText,
            selectedLanguageFrom.value,
            selectedLanguageTo.value
          );

          if (translated) {
            setTranslatedText(decodeHtmlEntities(translated));
          } else {
            console.error("Translation API returned null or undefined.");
            setTranslatedText("Translation failed.");
          }
        }
      } catch (error) {
        console.error("Error fetching translation:", error);
        setTranslatedText("Translation error.");
      }
    };

    translateText();
  }, [originalText, selectedLanguageFrom, selectedLanguageTo]);

  return (
    <>
      <div className="flex flex-row w-full justify-evenly pt-24 pb-5 items-center z-20">
        <div className="w-1/3">
          <Select
            className="border-none placeholder-white"
            options={optionsLanguage}
            required
            onChange={(newValue) => {
              if (newValue) setSelectedLanguageFrom(newValue);
            }}
            value={selectedLanguageFrom}
          />
        </div>
        <div>
          <img src={ArrowIcon} width={30} height={30} alt="arrow-icon" />
        </div>
        <div className="w-1/3">
          <Select
            options={optionsLanguage}
            required
            onChange={(newValue) => {
              if (newValue) setSelectedLanguageTo(newValue);
            }}
            value={selectedLanguageTo}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center w-full grid-flow-row gap-2 px-6 mt-5 z-10">
        <div className="w-full">
          <textarea
            className="w-full h-48 resize-none text-slate-500 border rounded-xl text-2xl p-4"
            placeholder="Text to translate"
            value={originalText}
            onChange={handleChangeOriginalText}
          />
        </div>
        <div className="w-full">
          <textarea
            className="w-full h-48 resize-none text-slate-500 border rounded-xl text-2xl p-4"
            placeholder="Translated text"
            value={translatedText}
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default Text;
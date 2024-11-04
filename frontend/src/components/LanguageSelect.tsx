import Select from "react-select";
import Language from "../data/language.json";
import { useMemo, useState } from "react";
import ArrowIcon from "../assets/arrow-right.svg";

function LanguageSelect({
  langFrom,
  langTo,
}: {
  langFrom: string;
  langTo: string;
}) {
  const optionsLanguage = useMemo(() => {
    return Language.languages.map((item) => {
      return {
        label: item.name,
        value: item.code,
      };
    });
  }, [Language]);

  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState<{
    label: string;
    value: string;
  }>({
    label: langFrom,
    value: "id",
  });

  const [selectedLanguageTo, setSelectedLanguageTo] = useState<{
    label: string;
    value: string;
  }>({
    label: langTo,
    value: "en",
  });

  return (
    <div className="flex flex-row w-full justify-evenly pt-24  pb-5 items-center z-20">
      <div className="w-1/3">
        <Select
          className="border-none placeholder-white"
          options={optionsLanguage}
          required
          onChange={(newValue) => {
            if (newValue !== null) {
              setSelectedLanguageFrom(newValue);
            }
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
            if (newValue !== null) {
              setSelectedLanguageTo(newValue);
            }
          }}
          value={selectedLanguageTo}
        />
      </div>
    </div>
  );
}

export default LanguageSelect;

import { useState } from "react";

function Text({
  text,
  translatedtext,
}: {
  text: string;
  translatedtext: string;
}) {
  const [textLength, setTextLength] = useState(0);

  const handleTextLength = (e: {
    target: { value: string | any[]; innerText: string | any[] };
  }) => {
    setTextLength(e.target.value.length);
    if (textLength > 5000) {
      e.target.innerText = e.target.innerText.slice(0, 5000);
    }
  };
  return (
    <div className="grid grid-cols-2 justify-center w-full grid-flow-row gap-2 px-6 mt-5 z-10">
      <div className="w-full">
        <textarea
          className={`w-full h-48 resize-none text-slate-500 border rounded-t-xl text-2xl p-4`}
          placeholder={"Text to translate"}
          value={text}
        />
        <span className="w-full border h-14 shadow-xl bottom-0 rounded-b-xl bg-white inline-flex text-slate-500 text-sm flex-row-reverse items-center p-4 -mt-2">{`${textLength}/5000`}</span>
      </div>
      <div className="w-full">
        <textarea
          className={`w-full h-48 resize-none text-slate-500 border rounded-xl text-2xl p-4`}
          placeholder={"Translated text"}
          value={translatedtext}
        ></textarea>
      </div>
    </div>
  );
}

export default Text;

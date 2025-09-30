import FMGofer, { Option } from "fm-gofer";

// Type definitions
interface FMParameter {
  [key: string]: any;
}

interface WebViewerData {
  titel?: string;
}

// Extend window object for global functions
declare global {
  interface Window {
    initialisiereWebViewer: (parameter: string) => void;
    datenAnFMSenden: () => void;
    datenVonFMHolen: () => Promise<void>;
  }
}

export const initWebViewer = (): void => {
  const scriptName = "ext_daten_von_fm";
  const param: FMParameter = {};

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};

export const datenAnFMSenden = (): void => {
  const inputElement = document.getElementById("inputData") as HTMLInputElement;
  const inputValue = inputElement ? inputElement.value : "";

  const scriptName = "ext_daten_an_fm_senden";
  const param: FMParameter = { eingabe: inputValue };

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};

export const initialisiereWebViewer = (parameter: string): void => {
  const p: WebViewerData = JSON.parse(parameter);

  const titel = p.titel ? p.titel : "Keine Daten von FM geladen!";
  // Hole das h1 Element
  const h1Element = document.querySelector("h1");
  // Aktualisiere das Element mit dem neuen Titel
  if (h1Element) {
    h1Element.textContent = titel;
  }
};

export const datenVonFMHolen = async (): Promise<void> => {
  const scriptName = "ext_daten_von_fm";
  const param: FMParameter = {};

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};
// Funktionen im globalen Kontext definieren
window.initialisiereWebViewer = initialisiereWebViewer;
window.datenAnFMSenden = datenAnFMSenden;
window.datenVonFMHolen = datenVonFMHolen;
import type { GlossaryItem, Module } from "@/lib/types";
import { m01Alerts, m01Glossary, m01Module } from "./module-content/m01";
import { m02Alerts, m02Glossary, m02Module } from "./module-content/m02";
import { m03Alerts, m03Glossary, m03Module } from "./module-content/m03";
import { m04Alerts, m04Glossary, m04Module } from "./module-content/m04";
import { m05Alerts, m05Glossary, m05Module } from "./module-content/m05";
import { m06Alerts, m06Glossary, m06Module } from "./module-content/m06";
import { m07Alerts, m07Glossary, m07Module } from "./module-content/m07";
import { m08Alerts, m08Glossary, m08Module } from "./module-content/m08";
import { m09Alerts, m09Glossary, m09Module } from "./module-content/m09";
import { m10Alerts, m10Glossary, m10Module } from "./module-content/m10";
import { m11Alerts, m11Glossary, m11Module } from "./module-content/m11";
import { m12Alerts, m12Glossary, m12Module } from "./module-content/m12";
import { m13Alerts, m13Glossary, m13Module } from "./module-content/m13";
import { m14Alerts, m14Glossary, m14Module } from "./module-content/m14";
import { m15Alerts, m15Glossary, m15Module } from "./module-content/m15";
import { m16Alerts, m16Glossary, m16Module } from "./module-content/m16";
import { m17Alerts, m17Glossary, m17Module } from "./module-content/m17";
import { m18Alerts, m18Glossary, m18Module } from "./module-content/m18";
import { m19Alerts, m19Glossary, m19Module } from "./module-content/m19";

export const modules: Module[] = [
  { ...m01Module, normativeAlerts: m01Alerts },
  { ...m02Module, normativeAlerts: m02Alerts },
  { ...m03Module, normativeAlerts: m03Alerts },
  { ...m04Module, normativeAlerts: m04Alerts },
  { ...m05Module, normativeAlerts: m05Alerts },
  { ...m06Module, normativeAlerts: m06Alerts },
  { ...m07Module, normativeAlerts: m07Alerts },
  { ...m08Module, normativeAlerts: m08Alerts },
  { ...m09Module, normativeAlerts: m09Alerts },
  { ...m10Module, normativeAlerts: m10Alerts },
  { ...m11Module, normativeAlerts: m11Alerts },
  { ...m12Module, normativeAlerts: m12Alerts },
  { ...m13Module, normativeAlerts: m13Alerts },
  { ...m14Module, normativeAlerts: m14Alerts },
  { ...m15Module, normativeAlerts: m15Alerts },
  { ...m16Module, normativeAlerts: m16Alerts },
  { ...m17Module, normativeAlerts: m17Alerts },
  { ...m18Module, normativeAlerts: m18Alerts },
  { ...m19Module, normativeAlerts: m19Alerts }
];

export const glossary: GlossaryItem[] = [
  ...m01Glossary,
  ...m02Glossary,
  ...m03Glossary,
  ...m04Glossary,
  ...m05Glossary,
  ...m06Glossary,
  ...m07Glossary,
  ...m08Glossary,
  ...m09Glossary,
  ...m10Glossary,
  ...m11Glossary,
  ...m12Glossary,
  ...m13Glossary,
  ...m14Glossary,
  ...m15Glossary,
  ...m16Glossary,
  ...m17Glossary,
  ...m18Glossary,
  ...m19Glossary
].sort((a, b) => a.term.localeCompare(b.term, "es"));

export const allQuestions = modules.flatMap((module) => module.quizQuestions);
export const allExercises = modules.flatMap((module) => module.exercises);

export const contentWarnings = [
  ...m01Alerts,
  ...m02Alerts,
  ...m03Alerts,
  ...m04Alerts,
  ...m05Alerts,
  ...m06Alerts,
  ...m07Alerts,
  ...m08Alerts,
  ...m09Alerts,
  ...m10Alerts,
  ...m11Alerts,
  ...m12Alerts,
  ...m13Alerts,
  ...m14Alerts,
  ...m15Alerts,
  ...m16Alerts,
  ...m17Alerts,
  ...m18Alerts,
  ...m19Alerts
];

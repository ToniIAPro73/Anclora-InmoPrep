import { addDays, formatISO } from "date-fns";
import type { Module, ModuleStatus, UserProgress } from "@/lib/types";

export function calculateMasteryScore(args: {
  lessonPercentage: number;
  quizBestScore: number;
  exercisePercentage: number;
}) {
  const score =
    args.lessonPercentage * 0.3 +
    args.quizBestScore * 0.5 +
    args.exercisePercentage * 0.2;

  return Math.round(Math.max(0, Math.min(100, score)));
}

export function getMasteryLabel(score: number) {
  if (score < 40) return "Débil";
  if (score < 70) return "En progreso";
  if (score < 85) return "Correcto";
  return "Dominado";
}

export function getMasteryTone(score: number) {
  if (score < 40) return "text-red-700 bg-red-50 border-red-200";
  if (score < 70) return "text-amber-700 bg-amber-50 border-amber-200";
  if (score < 85) return "text-blue-700 bg-blue-50 border-blue-200";
  return "text-emerald-700 bg-emerald-50 border-emerald-200";
}

export function scheduleNextReview(score: number, from = new Date()) {
  if (score < 70) return formatISO(addDays(from, 1));
  if (score < 85) return formatISO(addDays(from, 3));
  return formatISO(addDays(from, 7));
}

export function statusFromProgress(module: Module, progress?: UserProgress): ModuleStatus {
  if (!progress) return module.status;
  if (progress.masteryScore >= 85) return "mastered";
  if (progress.quizBestScore > 0) return "evaluated";
  if (progress.completedLessonIds.length > 0) return "practice_pending";
  return "not_started";
}

export function lessonCompletion(module: Module, progress?: UserProgress) {
  if (!progress || module.lessons.length === 0) return 0;
  return Math.round((progress.completedLessonIds.length / module.lessons.length) * 100);
}

export function moduleScore(module: Module, progress?: UserProgress) {
  return progress?.quizBestScore ?? module.score ?? 0;
}

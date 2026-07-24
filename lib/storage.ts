"use client";

import { formatISO, isSameDay, isYesterday, parseISO } from "date-fns";
import { create } from "zustand";
import { modules } from "@/data/modules";
import { calculateMasteryScore, scheduleNextReview } from "@/lib/mastery";
import type { StudyState, UserProgress } from "@/lib/types";

const STORAGE_KEY = "anclora-inmoprep-progress-v1";

function initialProgress(): UserProgress[] {
  const now = formatISO(new Date());
  return modules.map((module) => ({
    moduleId: module.id,
    completedLessonIds: [],
    quizBestScore: 0,
    masteryScore: 0,
    lastStudiedAt: now,
    nextReviewAt: scheduleNextReview(0),
    failedQuestionIds: []
  }));
}

export const initialStudyState: StudyState = {
  progress: initialProgress(),
  completedExerciseIds: [],
  totalStudyMinutes: 0,
  streakDays: 0,
  lastStudyDate: null,
  answeredQuestionIds: [],
  scoreHistory: []
};

function safeLoad(): StudyState {
  if (typeof window === "undefined") return initialStudyState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialStudyState;
    return { ...initialStudyState, ...JSON.parse(raw) } as StudyState;
  } catch {
    return initialStudyState;
  }
}

function safeSave(state: StudyState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function touchStudy(state: StudyState): Pick<StudyState, "lastStudyDate" | "streakDays"> {
  const today = new Date();
  if (!state.lastStudyDate) {
    return { lastStudyDate: formatISO(today), streakDays: 1 };
  }
  const last = parseISO(state.lastStudyDate);
  if (isSameDay(last, today)) {
    return { lastStudyDate: state.lastStudyDate, streakDays: state.streakDays || 1 };
  }
  return {
    lastStudyDate: formatISO(today),
    streakDays: isYesterday(last) ? state.streakDays + 1 : 1
  };
}

function recalculateProgress(
  progress: UserProgress,
  completedExerciseIds: string[]
): UserProgress {
  const courseModule = modules.find((item) => item.id === progress.moduleId);
  if (!courseModule) return progress;
  const lessonPercentage =
    courseModule.lessons.length === 0
      ? 0
      : (progress.completedLessonIds.length / courseModule.lessons.length) * 100;
  const exerciseCount = courseModule.exercises.filter((exercise) =>
    completedExerciseIds.includes(exercise.id)
  ).length;
  const exercisePercentage =
    courseModule.exercises.length === 0
      ? 0
      : (exerciseCount / courseModule.exercises.length) * 100;

  return {
    ...progress,
    masteryScore: calculateMasteryScore({
      lessonPercentage,
      quizBestScore: progress.quizBestScore,
      exercisePercentage
    })
  };
}

interface StudyStore extends StudyState {
  hydrate: () => void;
  markLesson: (moduleId: string, lessonId: string) => void;
  completeExercise: (exerciseId: string) => void;
  submitQuiz: (moduleId: string, score: number, failedQuestionIds: string[]) => void;
  addStudyMinutes: (minutes: number) => void;
  resetProgress: () => void;
}

export const useStudyStore = create<StudyStore>((set) => ({
  ...initialStudyState,
  hydrate: () => set(safeLoad()),
  markLesson: (moduleId, lessonId) =>
    set((state) => {
      const touched = touchStudy(state);
      const progress = state.progress.map((item) => {
        if (item.moduleId !== moduleId) return item;
        const completedLessonIds = Array.from(new Set([...item.completedLessonIds, lessonId]));
        return recalculateProgress(
          { ...item, completedLessonIds, lastStudiedAt: formatISO(new Date()) },
          state.completedExerciseIds
        );
      });
      const next = { ...state, ...touched, progress };
      safeSave(next);
      return next;
    }),
  completeExercise: (exerciseId) =>
    set((state) => {
      const touched = touchStudy(state);
      const completedExerciseIds = Array.from(
        new Set([...state.completedExerciseIds, exerciseId])
      );
      const progress = state.progress.map((item) =>
        recalculateProgress(item, completedExerciseIds)
      );
      const next = { ...state, ...touched, completedExerciseIds, progress };
      safeSave(next);
      return next;
    }),
  submitQuiz: (moduleId, score, failedQuestionIds) =>
    set((state) => {
      const touched = touchStudy(state);
      const progress = state.progress.map((item) => {
        if (item.moduleId !== moduleId) return item;
        const nextScore = Math.max(item.quizBestScore, score);
        return recalculateProgress(
          {
            ...item,
            quizBestScore: nextScore,
            lastStudiedAt: formatISO(new Date()),
            nextReviewAt: scheduleNextReview(score),
            failedQuestionIds
          },
          state.completedExerciseIds
        );
      });
      const answeredQuestionIds = Array.from(
        new Set([...state.answeredQuestionIds, ...failedQuestionIds])
      );
      const next = {
        ...state,
        ...touched,
        progress,
        answeredQuestionIds,
        scoreHistory: [
          ...state.scoreHistory,
          { date: formatISO(new Date()), moduleId, score }
        ]
      };
      safeSave(next);
      return next;
    }),
  addStudyMinutes: (minutes) =>
    set((state) => {
      const next = { ...state, totalStudyMinutes: state.totalStudyMinutes + minutes };
      safeSave(next);
      return next;
    }),
  resetProgress: () => {
    safeSave(initialStudyState);
    set(initialStudyState);
  }
}));

export function readProgressSnapshot() {
  return useStudyStore.getState().progress;
}

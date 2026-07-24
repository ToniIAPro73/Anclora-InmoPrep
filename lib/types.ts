export type ModuleStatus =
  | "not_started"
  | "in_progress"
  | "practice_pending"
  | "evaluated"
  | "mastered"
  | "review";

export type DifficultyLevel = "basic" | "medium" | "advanced";

export type ExerciseType =
  | "comprehension"
  | "case"
  | "decision"
  | "calculation"
  | "balear_scenario";

export interface Example {
  id: string;
  title: string;
  scenario: string;
  application: string;
  isBalearContext: boolean;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  summary: string;
  content: string;
  easyExplanation: string;
  balearExample: string;
  keyConcepts: string[];
  frequentErrors: string[];
  examples: Example[];
  completed: boolean;
}

export interface Exercise {
  id: string;
  moduleId: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  expectedAnswer: string;
  explanation: string;
  difficulty: DifficultyLevel;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  sourceModuleId: string;
  legalReference?: string;
  difficulty: DifficultyLevel;
}

export interface Module {
  id: string;
  code: string;
  title: string;
  order: number;
  description: string;
  estimatedMinutes: number;
  difficulty: DifficultyLevel;
  status: ModuleStatus;
  progressPercentage: number;
  score: number | null;
  lessons: Lesson[];
  exercises: Exercise[];
  quizQuestions: Question[];
  normativeAlerts?: string[];
}

export interface UserProgress {
  moduleId: string;
  completedLessonIds: string[];
  quizBestScore: number;
  masteryScore: number;
  lastStudiedAt: string;
  nextReviewAt: string;
  failedQuestionIds: string[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
  easyDefinition: string;
  relatedModuleId: string;
  balearContext?: string;
}

export interface StudyState {
  progress: UserProgress[];
  completedExerciseIds: string[];
  totalStudyMinutes: number;
  streakDays: number;
  lastStudyDate: string | null;
  answeredQuestionIds: string[];
  scoreHistory: Array<{
    date: string;
    moduleId: string;
    score: number;
  }>;
}

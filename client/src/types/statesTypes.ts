export type User = {
  id: number;
  username: string;
  email: string;
  score: number;
};

export type Themes = {
  id: number;
  topic: string,
  createdAt: Date;
  updatedAt: Date;
};

export type Questions = {
  id: number;
  question: string,
  answer: string,
  themeId: number,
  scoreQ: number;
  createdAt: Date;
  updatedAt: Date;
};

export type UsersQuestions = {
  id: number,
  userId: number,
  questionId: number,
  createdAt: Date;
  updatedAt: Date;
}


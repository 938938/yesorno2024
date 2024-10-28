import { AnswerData } from '@/type';
import { create } from 'zustand';

const useQuestionStore = create((set) => ({
  question: '',
  answer: {},
  setQuestion: (text: string) => set({ bears: text }),
  setAnswer: (data: AnswerData) => set({ answer: data }),
}));

export default useQuestionStore;

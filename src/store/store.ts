import { AnswerData } from '@/type';
import { create } from 'zustand';

type QuestionState = {
  question: string;
  setQuestion: (text: string) => void;
  answer: AnswerData;
  setAnswer: (data: AnswerData) => void;
  loading: boolean;
  setLoading: (type: boolean) => void;
};

const useQuestionStore = create<QuestionState>((set) => ({
  question: '',
  answer: {
    answer: '',
    image: '',
  },
  loading: true,
  setQuestion: (text: string) => set({ question: text }),
  setAnswer: (data: AnswerData) => set({ answer: data }),
  setLoading: (type: boolean) => set({ loading: type }),
}));

export default useQuestionStore;

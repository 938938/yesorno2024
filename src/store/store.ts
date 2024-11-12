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

const YES = [
  '응!',
  '좋아!',
  '해!',
  'YESSSS!!',
  'OK!!',
  '좋아요',
  '하세요',
  '응',
  'yes',
  '좋습니다',
  '좋은 생각이야!',
  '맞아요',
];
const NO = [
  '안돼!',
  '하지마!',
  'Nooooo!!!!',
  'Nope',
  '하지마세요',
  '아니오',
  '안됩니다',
  '아닙니다',
  '틀렸습니다',
  'NO',
  '가만히 계세요',
  '하지마',
  '안돼',
  '아냐!',
];

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

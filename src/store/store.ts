import { MINT, ORANGE } from '@/global/globalColor';
import { AnswerData } from '@/type';
import { create } from 'zustand';

type QuestionState = {
  question: string;
  setQuestion: (text: string) => void;
  answer: AnswerData;
  setAnswer: (data: AnswerData) => void;
  loading: boolean;
  setLoading: (type: boolean) => void;
  paperColor: string;
};

const NG = [
  'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif',
];

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
  paperColor: '',
  loading: true,
  setQuestion: (text: string) => set({ question: text }),
  setAnswer: (data: AnswerData) => {
    if (NG.includes(data.image)) {
      const imageId =
        data.answer === 'yes'
          ? '10-271c872c91cd72c1e38e72d2f8eda676'
          : '26-34b31d1f0777f70c61488f67a36576a9';
      data.image = `https://yesno.wtf/assets/${data.answer}/${imageId}.gif`;
    }
    if (data.answer === 'yes') {
      data.answer = YES[Math.floor(Math.random() * YES.length)];
      set({ paperColor: MINT });
    }
    if (data.answer === 'no') {
      data.answer = NO[Math.floor(Math.random() * NO.length)];
      set({ paperColor: ORANGE });
    }
    set({ answer: data });
  },
  setLoading: (type: boolean) => set({ loading: type }),
}));

export default useQuestionStore;

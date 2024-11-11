'use client';
import useQuestionStore from '@/store/store';
import { useRef } from 'react';

const QuestionInput = () => {
  const setQuestion = useQuestionStore((state) => state.setQuestion);
  const setAnswer = useQuestionStore((state) => state.setAnswer);
  const setLoading = useQuestionStore((state) => state.setLoading);
  const inputRef = useRef<HTMLInputElement>(null);

  const getAnswer = async () => {
    try {
      const res = await fetch(`https://yesno.wtf/api`);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const answer = await res.json();
      if (
        answer.image ===
        'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif'
      ) {
        answer.image =
          'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif';
      }
      setAnswer(answer);
    } catch (error) {
      console.error('Failed to fetch answer:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleAnswerForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const question = formData.get('question')!.toString();
    setLoading(true);
    setQuestion(question);
    setAnswer({ answer: '', image: '' });
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    await getAnswer();
  };
  return (
    <form onSubmit={handleAnswerForm}>
      <input name='question' ref={inputRef} />
      <button type='submit'>클릭</button>
    </form>
  );
};

export default QuestionInput;

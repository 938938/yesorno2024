'use client';

import { AnswerData } from '@/type';
import Image from 'next/image';
import { useState } from 'react';
import style from './QuestionForm.module.css';

const QuestionForm = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<AnswerData>({
    answer: '',
    image: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
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
    await getAnswer();
  };

  return (
    <div>
      <form onSubmit={handleAnswerForm}>
        <input name='question' />
        <button type='submit'>클릭</button>
      </form>
      <div>
        <p>{question}</p>
        <p>{answer.answer}</p>
        {loading ? (
          <div className={style.loader} />
        ) : (
          <Image
            src={answer.image}
            alt='결과 이미지'
            height={300}
            width={400}
            unoptimized={true}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionForm;

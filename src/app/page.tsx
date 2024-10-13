'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { AnswerData } from '@/type';
import Image from 'next/image';

export default function Home() {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<AnswerData>({
    answer: '',
    image: '',
  });
  const answerForm = async (formData: FormData) => {
    const question = formData.get('question')!.toString();
    const res = await fetch(`https://yesno.wtf/api`);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const answer = await res.json();
    console.log(answer);
    setQuestion(question);
    setAnswer(answer);
  };

  return (
    <div>
      <form action={answerForm}>
        <input name='question' />
        <button type='submit'>클릭</button>
      </form>
      <div>
        <p>{question}</p>
        <p>{answer.answer}</p>
        {/* <img src={answer.image} /> */}
        <Image src={answer.image} alt='결과 이미지' height={300} width={400} />
      </div>
    </div>
  );
}

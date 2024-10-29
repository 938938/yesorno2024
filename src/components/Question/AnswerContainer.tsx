'use client';

import useQuestionStore from '@/store/store';
import Image from 'next/image';
import style from './AnswerContainer.module.css';

const AnswerContainer = () => {
  const question = useQuestionStore((state) => state.question);
  const answer = useQuestionStore((state) => state.answer);
  const loading = useQuestionStore((state) => state.loading);
  return (
    <div>
      <p>{question}</p>
      <p>{answer.answer}</p>
      <div>
        <div>
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
    </div>
  );
};

export default AnswerContainer;

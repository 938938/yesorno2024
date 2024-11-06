'use client';

import useQuestionStore from '@/store/store';
import Image from 'next/image';
import Loading from '../common/Loading';
import styled from 'styled-components';
import { DARK, WHITE } from '@/global/globalColor';

const AnswerContainer = () => {
  const question = useQuestionStore((state) => state.question);
  const answer = useQuestionStore((state) => state.answer);
  const loading = useQuestionStore((state) => state.loading);
  return (
    <div>
      <AnswerBox>
        <p>Q : {question}</p>
        <p>A : {answer.answer}</p>
      </AnswerBox>
      <BackPaper>
        <FrontPaper>
          {loading ? (
            <Loading />
          ) : (
            <Image
              src={answer.image}
              alt='결과 이미지'
              height={300}
              width={400}
              unoptimized={true}
            />
          )}
        </FrontPaper>
      </BackPaper>
    </div>
  );
};

export default AnswerContainer;

const AnswerBox = styled.div`
  font-family: 'Nanum Brush Script', cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
`;

const BackPaper = styled.div`
  position: relative;
  width: 400px;
  max-width: 600px;
  height: 400px;
  max-height: 700px;
  padding: 20px;
  border: 2px solid ${DARK};
  transform: rotate(-2deg);
  transition: all 1s;
  margin-top: 30px;
`;

const FrontPaper = styled(BackPaper)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${WHITE};
  margin-top: 0;
  transform: rotate(2deg);
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

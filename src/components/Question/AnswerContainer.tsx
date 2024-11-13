'use client';

import useQuestionStore from '@/store/store';
import Image from 'next/image';
import Loading from '../common/Loading';
import styled from 'styled-components';
import { BRIGHT, SHADOW, WHITE } from '@/global/globalColor';
import TypingText from './TypingText';

const AnswerContainer = () => {
  const question = useQuestionStore((state) => state.question);
  const answer = useQuestionStore((state) => state.answer);
  const loading = useQuestionStore((state) => state.loading);
  const paperColor = useQuestionStore((state) => state.paperColor);

  return (
    <div>
      <AnswerBox>
        {question && (
          <>
            <p>
              Q : <TypingText text={question || ''} />
            </p>
            <p>
              A : <TypingText text={answer?.answer || ''} />
            </p>
          </>
        )}
      </AnswerBox>
      <BackPaper color={paperColor}>
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

const BackPaper = styled.div<{ color?: string }>`
  position: relative;
  width: 400px;
  max-width: 600px;
  height: 400px;
  max-height: 700px;
  padding: 20px;
  box-shadow: ${SHADOW} 0px 5px 5px 0px;
  transform: rotate(-2deg);
  transition: all 1s;
  margin-top: 30px;
  background-color: ${(props) => (props.color ? props.color : `${BRIGHT}`)};
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
  background-color: ${WHITE};
`;

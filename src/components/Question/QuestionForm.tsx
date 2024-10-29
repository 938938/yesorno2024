import style from './QuestionForm.module.css';
import QuestionInput from './QuestionInput';
import AnswerContainer from './AnswerContainer';

const QuestionForm = () => {
  return (
    <div className={style.container}>
      <QuestionInput />
      <AnswerContainer />
    </div>
  );
};

export default QuestionForm;

import style from './QuestionForm.module.css';
import QuestionInput from './QuestionInput';
import AnswerContainer from './AnswerContainer';

const QuestionForm = () => {
  return (
    <div className={style.container}>
      <h1>예, 혹은 아니오!</h1>
      <QuestionInput />
      <AnswerContainer />
    </div>
  );
};

export default QuestionForm;
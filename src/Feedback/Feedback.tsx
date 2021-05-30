import {useState} from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
import 'modern-normalize/modern-normalize.css';


type Option = string;
// interface Props{
//   option: string
// }

export default function Feedback() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = ['good', 'neutral', 'bad'];

   const onLeaveFeedback = (option:Option) => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default: return;
      }
  }


    const totalQuantityOfFeedbacks = () => good + neutral + bad;
        
      ;

     const countPositiveFeedbackPercentage = () => {
        const total = totalQuantityOfFeedbacks();
        if (total) {
            return `${Math.round((good / total) * 100)}%`;
          }
          return '0%';
      }
    
 {
       
       
        const total = totalQuantityOfFeedbacks();
        const positiveFeedback = countPositiveFeedbackPercentage();

        return (
        <>
        <Controls options={options} onLeaveFeedback={onLeaveFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad}
            total={total} positiveFeedback={positiveFeedback}/>
            </>)
    }
}

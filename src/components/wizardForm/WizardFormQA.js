import React from 'react';
import Button from '../../components/buttons/Button';

function WizardFormQA({ step, handleAnswer, handlePrev, handleNext, questionContent, options, selected }) {
  return (
    <div>
      <div>{questionContent}</div>
      {options.map((option, i) => {
        const id = `${option}${i}`;
        return (
          <div key={i}>
            <input checked={selected === i} type="radio" id={id} onChange={handleAnswer(i)} />
            <label htmlFor={id}>{option}</label>
          </div>
        );
      })}
      {step > 1 && <Button clickEvent={handlePrev} buttonStyle="" buttonText="Prev" />}
      {step < 5 && <Button clickEvent={handleNext} buttonStyle="" buttonText={selected !== null ? 'Next' : 'Skip'} />}
    </div>
  );
}

export default WizardFormQA;

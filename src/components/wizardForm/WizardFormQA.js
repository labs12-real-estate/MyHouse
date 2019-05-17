import React from 'react';
import Button from '../../components/buttons/Button';

function WizardFormQA({ step, handleAnswer, handlePrev, handleNext, questionContent, options, selected }) {
  return (
    <div className="wizard_form_QA_container">
      <div className="QA_question">{questionContent}</div>
      <div className="QA_cards_container">
        {options.map((option, i) => {
          const id = `${option}${i}`;
          return (
            <div className="QA_card" select={(selected === i).toString()} key={i} onClick={handleAnswer(i)}>
              <input checked={selected === i} type="radio" id={id} onChange={handleAnswer(i)} />
              <label htmlFor={id}>{option}</label>
            </div>
          );
        })}
      </div>
      <div className="button_container">
        {step > 1 && <Button clickEvent={handlePrev} buttonStyle="prev_button" buttonText="Prev" />}
        {step < 5 && (
          <Button
            clickEvent={handleNext}
            buttonStyle={selected !== null ? 'next_button' : 'next_button skip_button'}
            buttonText={selected !== null ? 'Next' : 'Skip'}
          />
        )}
      </div>
      <div className="shadow" />
    </div>
  );
}

export default WizardFormQA;

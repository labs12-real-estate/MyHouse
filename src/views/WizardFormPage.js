import React, { useState, useEffect } from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import WizardFormQA from '../components/wizardForm/WizardFormQA';
import WizardFormConfirmation from '../components/wizardForm/WizardFormConfirmation';
import WizardFormProgress from '../components/wizardForm/WizardFormProgress';
import WizardFormInitialData from '../components/wizardForm/WizardFormInitialData';
import _questions from './wizardFormQuestions.json';
import toHouseInput from '../helper-functions/toHouseInput';

function WizardFormPage() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState(_questions);

  const handleAnswer = questionIx => optionIx => _e => {
    setQuestions(
      questions.map((q, ix) =>
        ix === questionIx
          ? {
              ...q,
              selected: optionIx
            }
          : q
      )
    );
  };

  useEffect(() => {
    // Attempt to read from local storage on componentDidMount
    // If nothing stored, use default values from above
    const formState = JSON.parse(localStorage.getItem('wizardForm'));

    if (formState) {
      setQuestions(formState.questions);
      setStep(formState.step);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage({ questions, step });
  }, [questions, step]);

  const saveToLocalStorage = ({ questions, step }) => {
    localStorage.setItem('wizardForm', JSON.stringify({ questions, step }));
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const getHouseInput = () => {
    // This will format the questions array into an object
    // that matches the shape specified in the GraphQL schema
    const serialized = questions.reduce(
      (obj, { key, selected, options }) => ({
        ...obj,
        [key]: selected ? options[selected] : null
      }),
      {}
    );
    const { data } = JSON.parse(localStorage.getItem('initialData'));
    return toHouseInput(data, serialized);
  };

  return (
    <div className="wizard_page_container">
      <DashboardTopBar />
      <div className="wizard_form_container">
        {step > 0 && <WizardFormProgress step={step} />}
        <WizardFormInitialData step={step} handleNext={handleNext} />
        {step < 5 ? (
          questions.map(
            ({ questionContent, options, selected }, i) =>
              step === i + 1 && (
                <WizardFormQA
                  key={i}
                  step={step}
                  questionContent={questionContent}
                  options={options}
                  selected={selected}
                  handleAnswer={handleAnswer(i)}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )
          )
        ) : (
          <WizardFormConfirmation questions={questions} handleAnswer={handleAnswer} getHouseInput={getHouseInput} />
        )}
      </div>
    </div>
  );
}

export default WizardFormPage;

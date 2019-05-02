import React, { Fragment } from 'react';
import Button from '../../components/buttons/Button';

const NULL = 'NULL';

function WizardFormConfirmation({ questions, handleAnswer, handleSubmit }) {
  const handleChange = qIx => e => {
    const oIx = e.target.value === NULL ? null : +e.target.value;
    handleAnswer(qIx)(oIx)(e);
  };
  return (
    <div>
      <h2>WizardFormConfirmation</h2>
      <p>Please review your answers before submitting</p>
      {questions.map(({ title, options, selected }, qIx) => (
        <Fragment key={qIx}>
          <label htmlFor={title}>{title}</label>
          <select onChange={handleChange(qIx)} value={selected === null ? NULL : selected} id={title}>
            <option value={NULL}>Not applicable</option>
            {options.map((opt, oIx) => (
              <option key={oIx} value={oIx}>
                {opt}
              </option>
            ))}
          </select>
        </Fragment>
      ))}
      <Button clickEvent={handleSubmit} buttonStyle="" buttonText="Submit" />
    </div>
  );
}

export default WizardFormConfirmation;

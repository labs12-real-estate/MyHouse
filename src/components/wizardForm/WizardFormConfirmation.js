import React, { Fragment } from 'react';
import Button from '../../components/buttons/Button';
import RegisterInput from '../../components/inputs/RegisterInput';

// This is necessary because we are representing "no selection" as `null`
// but `null` is not valid as a value for a `select` element.
const NULL = 'NULL';

function WizardFormConfirmation({ getHouseInput, questions, handleAnswer }) {
  const handleChange = qIx => e => {
    const oIx = e.target.value === NULL ? null : +e.target.value;
    handleAnswer(qIx)(oIx)(e);
  };
  return (
    <>
      <div>
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
      </div>
      <RegisterInput houseInput={getHouseInput()} />
    </>
  );
}

export default WizardFormConfirmation;

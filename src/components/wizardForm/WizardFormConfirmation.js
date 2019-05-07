import React, { Fragment } from 'react';
import RegisterInput from '../../components/inputs/RegisterInput';
import Button from '../../components/buttons/Button';

// This is necessary because we are representing "no selection" as `null`
// but `null` is not valid as a value for a `select` element.
const NULL = 'NULL';

function WizardFormConfirmation({ getHouseInput, questions, handleAnswer, handlePrev }) {
  const handleChange = qIx => e => {
    const oIx = e.target.value === NULL ? null : +e.target.value;
    handleAnswer(qIx)(oIx)(e);
  };
  return (
    <div className="confirmation_container">
      <div className="review_container">
        {questions.map(({ title, options, selected }, qIx) => (
          <div className="selection">
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
          </div>
        ))}
      </div>
      <div className="left-panel">
        <RegisterInput handlePrev={handlePrev} houseInput={getHouseInput()} />
      </div>
    </div>
  );
}

export default WizardFormConfirmation;

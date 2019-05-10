import React from 'react';
import questions from '../../../dummy-data-structures/wizardFormQuestions';
import { saveHouseInfo } from '../../../actions/houseActions';
import { connect } from 'react-redux';

const NULL = 'NULL';

function HouseProfileFinishes(props) {
  const handleChange = qIx => e => {
    const currentQuestion = questions[qIx];
    const value = e.target.value === NULL ? null : currentQuestion.options[+e.target.value];
    const changes = {
      [currentQuestion.key]: value
    };
    props.saveHouseInfo({ changes, id: props.id });
  };

  return (
    <div className="house_profile_form width">
      <div className="house_profile_form_title">
        <h2>Finishes</h2>
      </div>
      {questions.map(({ title, options, key }, qIx) => {
        const selected = options.findIndex(o => o === props[key]);
        return (
          <div className="house_finishes_selector_container" key={qIx}>
            <label className ='house_finishes_title'htmlFor={title}>{title}</label>
            <select className='house_finishes_selector' onChange={handleChange(qIx)} value={selected === null ? NULL : selected} id={title}>
              <option value={NULL}>Not applicable</option>
              {options.map((opt, oIx) => (
                <option key={oIx} value={oIx}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id: state.houseReducer.house.id
  };
};

export default connect(
  mapStateToProps,
  { saveHouseInfo }
)(HouseProfileFinishes);

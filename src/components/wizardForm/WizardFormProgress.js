import React from 'react';

function WizardFormProgress({ step, max = 4 }) {
  return (
    <div className="wizard_form_progress">
      <div>
        {Math.min(step, max)} of {max}
      </div>
      <progress max={max} value={step - 1} />
      <p>For a more precise estimate, please answer the following</p>
    </div>
  );
}
export default WizardFormProgress;

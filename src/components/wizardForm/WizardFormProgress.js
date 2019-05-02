import React from 'react';

function WizardFormProgress({ step, max = 4 }) {
  return (
    <div>
      <div>
        {Math.min(step, max)} of {max}
      </div>
      <progress max={max} value={step - 1} />
    </div>
  );
}
export default WizardFormProgress;

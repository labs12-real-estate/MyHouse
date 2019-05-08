import React from 'react';
import Button from '../../buttons/Button';

const searchTerms = ['Bedroom', 'Bathroom', 'Kitchen', 'Dining Room', 'Living Room', 'Office'];

function SearchButtons() {
  return (
    <div className="design_studio_btn_container">
      <h1>DesignStudioContent</h1>
      {searchTerms.map(search => (
        <Button buttonText={search} buttonStyle="design_studio_btn" clickEvent={() => {}} />
      ))}
    </div>
  );
}

export default SearchButtons;

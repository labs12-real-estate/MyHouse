import React from 'react';
import SearchButtons from './SearchButtons';
import ImageGallery from './ImageGallery';

function DesignStudioContent() {
  return (
    <div className="dashboard_content_container">
      <div className="design_studio_container">
        <h1>Design Studio</h1>
        <SearchButtons />
        <ImageGallery />
      </div>
    </div>
  );
}

export default DesignStudioContent;

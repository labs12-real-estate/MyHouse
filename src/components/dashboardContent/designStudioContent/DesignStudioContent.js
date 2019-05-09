import React from 'react';
import SearchButtons from './SearchButtons';
import ImageGallery from './ImageGallery';

function DesignStudioContent() {
  return (
    <div className="dashboard_content_container">
      <h1 className="dashboard_content_title">Design Studio</h1>
      <div className="design_studio_container">
        <SearchButtons />
        <ImageGallery />
      </div>
    </div>
  );
}

export default DesignStudioContent;

import React from 'react';
import SearchButtons from './SearchButtons';
import ImageGallery from './ImageGallery';

function DesignStudioContent() {
  return (
    <div className="dashboard_content_container" style={{ background: 'white', minHeight: '100vh' }}>
      <h1 className="dashboard_content_title">Design Studio</h1>
      <div className="design_studio_container">
        <p>Looking for inspiration? Click a one of these options to view examples.</p>
        <SearchButtons />
        <ImageGallery />
      </div>
    </div>
  );
}

export default DesignStudioContent;

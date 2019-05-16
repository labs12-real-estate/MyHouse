import React from 'react';
import { connect } from 'react-redux';
import { UserInfo, AttributesForm, NewPasswordForm } from './sections';

function SettingsPageContent({ user }) {
  return (
    <div className="dashboard_content_container">
      <h1 className="dashboard_content_title">Settings</h1>
      <div className="settings_container">
        <div className="settings_content">
          <h2>Profile</h2>
          <UserInfo />
          {user.username && <AttributesForm />}
          <h2>Security</h2>
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default connect(({ authReducer }) => ({
  user: authReducer.user
}))(SettingsPageContent);

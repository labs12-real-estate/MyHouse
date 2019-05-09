import React from 'react';
import { teamInfo } from '../../dummy-data-structures/team-info';

export default function TeamMembers() {
  return (
    <div className="members_container">
      {teamInfo.map(member => (
        <div className="member_card">
          <div className="left-panel">
            <img src={member.url.picture} alt="" />
          </div>
          <div className="right-panel">
            <h1>{member.name}</h1>
            <h3>{member.team}</h3>
            <p>{member.intro}</p>
            <div className="social" />
          </div>
        </div>
      ))}
    </div>
  );
}

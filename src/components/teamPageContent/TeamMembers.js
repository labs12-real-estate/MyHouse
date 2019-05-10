import React from 'react';
import { teamInfo } from '../../dummy-data-structures/team-info';

export default function TeamMembers() {
  return (
    <div className="members_container">
      {teamInfo.map(member => (
        <div className="member_card" key={member.name}>
          <div className="left-panel">
            <img src={member.url.picture} alt="" />
          </div>
          <div className="right-panel">
            <h1>{member.name}</h1>
            <h3>{member.team}</h3>
            <p>{member.intro}</p>
            <div className="social">
              <a href={member.url.twitter} target="blank">
                <i className="fab fa-twitter" />
              </a>
              <a href={member.url.instagram} target="blank">
                <i className="fab fa-instagram" />
              </a>

              <a href={member.url.github} target="blank">
                <i className="fab fa-github" />
              </a>
              <a href={member.url.facebook} target="blank">
                <i className="fab fa-facebook" />
              </a>
              <a href={member.url.linkedin} target="blank">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

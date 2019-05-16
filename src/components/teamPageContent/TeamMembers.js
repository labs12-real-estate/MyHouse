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
              <a
                href={
                  !member.url.twitter
                    ? '' // disable social icon if no link is provided
                    : member.url.twitter
                }
                onClick={
                  !member.url.twitter
                    ? e => {
                        e.preventDefault();
                      }
                    : null
                }
                target="blank"
              >
                <i
                  className={
                    !member.url.twitter
                      ? 'fab fa-twitter disabled' // turn icon gray if url is empty string
                      : 'fab fa-twitter'
                  }
                />
              </a>
              <a
                href={!member.url.instagram ? '' : member.url.instagram}
                onClick={
                  !member.url.instagram
                    ? e => {
                        e.preventDefault();
                      }
                    : null
                }
                target="blank"
              >
                <i className={!member.url.instagram ? 'fab fa-instagram disabled' : 'fab fa-instagram'} />
              </a>

              <a
                href={!member.url.github ? '' : member.url.github}
                onClick={
                  !member.url.github
                    ? e => {
                        e.preventDefault();
                      }
                    : null
                }
                target="blank"
              >
                <i className={!member.url.github ? 'fab fa-github disabled' : 'fab fa-github'} />
              </a>
              <a
                href={!member.url.facebook ? '' : member.url.facebook}
                onClick={
                  !member.url.facebook
                    ? e => {
                        e.preventDefault();
                      }
                    : null
                }
                target="blank"
              >
                <i className={!member.url.facebook ? 'fab fa-facebook disabled' : 'fab fa-facebook'} />
              </a>
              <a
                href={!member.url.linkedin ? '' : member.url.linkedin}
                onClick={
                  !member.url.linkedin
                    ? e => {
                        e.preventDefault();
                      }
                    : null
                }
                target="blank"
              >
                <i className={!member.url.linkedin ? 'fab fa-linkedin disabled' : 'fab fa-linkedin'} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

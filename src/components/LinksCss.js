//@ flow

import React from 'react';

import './Credits.css';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import CardHeader from 'material-ui/Card/CardHeader';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, hashHistory } from 'react-router-dom';

export type Profile = {
  name: string,
  role: string,
  desc: string,
  image: string,
  links: { [string]: string }
};

const LinksCss = ({ profiles }: { profiles: Profile[] }) => {
  return (
    <div className="about">
      {profiles.map((profile: Profile) => {
        const haveLinks = Object.keys(profile.links).length > 0;

        return (
          /**onClick={()=> window.open(profile.links[name], "_blank")}**/

          /**<ButtonBase
          href={profile.links[name]}
          >**/

          //<Link to={profile.links[name]}>
          //<Link to={profile.links[name]} target="_blank">
          <Card
            className="about-card"
            key={profile.name}
            onClick={() => window.open(profile.links['Link'], '_blank')}
          >
            <CardHeader
              className={profile.desc ? '' : 'about-header-no-body'}
              avatar={
                <Avatar
                  className="about-avatar"
                  src={
                    profile.image &&
                    require('../assets/avatars/' + profile.image)
                  }
                >
                  {!profile.image && profile.name.replace(/[^A-Z]/g, '')}
                </Avatar>
              }
              title={profile.name}
              subheader={profile.role}
            />
            <CardContent
              className={
                'about-content ' +
                (profile.desc || !haveLinks ? '' : 'about-content-no-body')
              }
            >
              {profile.desc && <Typography>{profile.desc}</Typography>}
            </CardContent>
            {haveLinks && (
              <CardActions>
                {Object.keys(profile.links).map((name: string) => {})}
              </CardActions>
            )}
          </Card>
          //</Link>
          /**</ButtonBase>**/
        );
      })}
    </div>
  );
};

export default LinksCss;

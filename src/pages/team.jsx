import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import constants from '../constants';

const Team = () => (
  <Layout page={constants.TEAM_SLUG}>
    <div className="flex flex-col gap-10 sm:flex-row p-10">
      <Profile
        image={(
          <StaticImage
            alt="Alessandro Defendenti"
            className="rounded"
            layout="fullWidth"
            src="../assets/images/aledefe.jpg"
          />
        )}
        subtitle="Frontend developer Radicalbit"
        title="Alessandro Defendenti"
      />

      <Profile
        image={(
          <StaticImage
            alt="Luca Tagliabue"
            className="rounded"
            layout="fullWidth"
            src="../assets/images/lucataglia.jpg"
          />
        )}
        subtitle="Frontend tech lead Radicalbit"
        title="Luca Tagliabue"
      />
    </div>
  </Layout>
);

const Profile = ({ image, title, subtitle }) => (
  <div className="h-full w-full sm:w-1/2 flex flex-col gap-5">
    {image}

    <div className="font-bold text-gray-900">
      {title}
    </div>

    <div className="text-indigo-600">
      {subtitle}
    </div>
  </div>
);

export default Team;

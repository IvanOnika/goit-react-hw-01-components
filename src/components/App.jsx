import { Profile } from 'components/profile/Profile';
import user from '../components/profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import stats from '../components/statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />
    </>
  );
};

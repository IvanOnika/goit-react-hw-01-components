import { Profile } from 'components/profile/Profile';
import user from '../components/profile/user.json';

export const App = () => {
  return (
    <Profile

        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  );
};

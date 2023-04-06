import { Profile } from "./profile/Profile";
import user from '../components/profile/user.json';


export const App = () => {
  return <div>
    <Profile userProfile= { user } />
  </div>;
};

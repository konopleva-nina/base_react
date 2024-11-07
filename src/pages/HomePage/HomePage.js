import { defaultBannerURL } from 'shared/assets/url';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */

export const HomePage = () => {
  return (
    <div>
      <img src={defaultBannerURL}/>
    </div>
  );
};

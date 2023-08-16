import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import MegaSearch from 'app/components/MegaSearch/MegaSearch';
import background from './assets/kenya.jpeg';
import styled from 'styled-components';

const HeroText = styled.p`
  font-family: 'Rubik', sans-serif; ;
`;
export function Landing() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="Landing" />
      </Helmet>
      <NavBar />
      <div
        className="flex items-center justify-center h-96 "
        style={backgroundImageStyle}
      >
        <div className="w-full ">
          <div className="m-auto p-8 w-full text-6xl text-center text-white">
            <HeroText>Plan your trip easily</HeroText>
          </div>
          <MegaSearch />
        </div>
      </div>
    </div>
  );
}

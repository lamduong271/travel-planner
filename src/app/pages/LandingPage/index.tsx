import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';

export function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="Landing" />
      </Helmet>
      <NavBar />
    </div>
  );
}

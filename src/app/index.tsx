/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { LandingPage } from './pages/LandingPage/LandingPage';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Travel Planner"
        defaultTitle="Travel Planner"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="something" />
      </Helmet>

      <Routes>
        <Route path="/settings" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

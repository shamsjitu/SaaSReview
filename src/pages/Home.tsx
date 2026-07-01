/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import LatestArticles from '../components/LatestArticles';
import AboutAuthor from '../components/AboutAuthor';

export default function Home() {
  return (
    <>
      <Hero />
      <LatestArticles />
      <AboutAuthor />
    </>
  );
}

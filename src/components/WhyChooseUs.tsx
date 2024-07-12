import React from 'react';
import musicSchoolContent from '../data/music_school_content';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs

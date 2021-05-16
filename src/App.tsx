import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './App.css';
import logo26 from './customers/acta.png';
import logo14 from './customers/agicap.png';
import logo10 from './customers/cegid.jpg';
import logo19 from './customers/DENTRESSANGLE-LOGO.jpg';
import logo15 from './customers/hpe-logo.jpg';
import logo12 from './customers/ideta-logo-2.png';
import logo1 from './customers/invox-logo.jpg';
import logo17 from './customers/isispharma.jpg';
import logo9 from './customers/le-wagon.png';
import logo23 from './customers/logo recom.jpg';
import logo11 from './customers/logo-adequation.jpg';
import logo6 from './customers/logo-entreprise-du-futur.jpg';
import logo7 from './customers/Logo-ICKO-HD.jpg';
import logo16 from './customers/logo-MINIWORLD-DEF2.jpg';
import logo20 from './customers/logo-PS-PT.png';
import logo4 from './customers/Logo-RocketSchool-Original-HD.png';
import logo18 from './customers/logo-santevet.jpg';
import logo24 from './customers/logo-tahiti-tourisme.jpg';
import logo13 from './customers/logo-tea.jpg';
import logo21 from './customers/logo-UnPoilCourt.jpg';
import logo3 from './customers/LOGO-VERTICAL.png';
import logo22 from './customers/Logo_SNCF.jpg';
import logo5 from './customers/M6-tv-logo.jpg';
import logo2 from './customers/mygoldennetwork.jpg';
import logo25 from './customers/vilebrequin-logo.jpg';
import logo8 from './customers/wixar-logo.png';

const handleDragStart = (e: any) => e.preventDefault();

const logos: string[] = [
  logo26,
  logo14,
  logo10,
  logo19,
  logo15,
  logo12,
  logo1,
  logo17,
  logo9,
  logo23,
  logo11,
  logo6,
  logo7,
  logo16,
  logo20,
  logo4,
  logo18,
  logo24,
  logo13,
  logo21,
  logo3,
  logo22,
  logo5,
  logo2,
  logo25,
  logo8,
];

const App = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 5 },
    1024: { items: 12 },
  };

  const carouselItems = logos.map((logo: string) => {
    return (
      <div
        className={'logo-wrapper'}
      >
        <img
          src={logo}
          onDragStart={handleDragStart}
          style={{
            maxHeight: '86px',
            maxWidth: '100px',
            margin: 'auto',
            position: 'relative',
          }}
        />
      </div>
    );
  });

  return (
    <div
      className="webflow-carousel carousel-customers"
    >
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        responsive={responsive}
        // autoPlay={true}
        infinite={true}
        autoPlayInterval={1000}
        disableButtonsControls={true}
        disableDotsControls={true}
      />
    </div>
  );
};

export default App;

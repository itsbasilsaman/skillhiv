import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ColorImageSection3: React.FC = () => (
    
  <div className="section light color-image-section">
    <div className="main-container w-container">
      <div className="w-layout-grid grid-halves home-image-grid">
        <div id="w-node-_6c11fe8d-765c-e360-7049-6c34bfd8b4da-c24fd956" data-w-id="6c11fe8d-765c-e360-7049-6c34bfd8b4da" className="title-wrap-home-image-section">
          <h2>Our amazing teachers will guide you every step of the way.</h2>
          <div className="space-16"></div>
          <p className="text-medium">We are incredibly fortunate to have a team of dedicated and passionate teachers who are committed to helping our students succeed. Whether you are just starting out on your educational journey or are working towards a specific goal, our teachers will be there to guide you every step of the way.</p>
          <div className="space-40"></div>
          <Link href="/teachers" className="cta-link">Meet our teachers</Link>
        </div>
        <div id="w-node-_6c11fe8d-765c-e360-7049-6c34bfd8b4f5-c24fd956" className="colored-block">
          <div id="w-node-_6c11fe8d-765c-e360-7049-6c34bfd8b4f6-c24fd956" className="home-image-wrap">
            <Image src="/63bc1e3983475d58fd4fd957/63be8a9d48f0a973fd7aec58_coloredimage3.webp" width={500} height={400} loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 85vw, (max-width: 1439px) 84vw, 1144px"
              alt="Colored Image 3" className="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ColorImageSection3; 
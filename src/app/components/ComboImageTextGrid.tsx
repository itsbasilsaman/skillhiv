import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ComboImageTextGrid: React.FC = () => (
    
  <div className="section">
    <div className="main-container w-container">
      <div className="w-layout-grid grid-halves combo-image-text-grid">
        <div id="w-node-a5056e7c-2fb0-aa07-2c45-10c0374ebcd2-c24fd956" data-w-id="a5056e7c-2fb0-aa07-2c45-10c0374ebcd2" className="feature-image-wrap">
          <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d61634fd9b5_Home%201.webp" width={500} height={400} loading="lazy" alt="Home 1" className="image" />
        </div>
        <div id="w-node-cde3fd44-c547-559d-fc74-d495f05c8821-c24fd956" data-w-id="cde3fd44-c547-559d-fc74-d495f05c8821" className="block transition-home">
          <h2>Everything you need  to make your 9-5 transition seamless.</h2>
          <div className="space-08"></div>
          <p className="text-medium">We use the latest technologies and tools to ensure that our solutions are scalable, efficient, and secure. Our team follows agile methodologies.</p>
          <div className="list-wrap">
            <div className="list-item">
              <div className="list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d9aca4fd9b6_Video%20Upload.svg" width={32} height={32} loading="lazy" alt="Video Upload" className="image" unoptimized /></div>
              <p>400+ hours of video content</p>
            </div>
            <div className="list-item">
              <div className="list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d7c554fd9b7_Picture%20in%20Picture.svg" width={32} height={32} loading="lazy" alt="Picture in Picture" className="image" unoptimized /></div>
              <p>1-on-1 weekly calls</p>
            </div>
            <div className="list-item">
              <div className="check-list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d1f854fd9b0_Group%20Icon.svg" width={32} height={32} loading="lazy" alt="Group Icon" unoptimized /></div>
              <p>Access to our community</p>
            </div>
            <div className="list-item">
              <div className="check-list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475dbc9a4fd974_question-answer-line.svg" width={32} height={32} loading="lazy" alt="Question Answer" className="image" unoptimized /></div>
              <p>Downloadable content</p>
            </div>
          </div>
          <div className="cta-wrap-highlighted-blog">
            <Link href="#" className="cta secondary w-button">Join today</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ComboImageTextGrid; 
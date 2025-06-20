import React from 'react';
import Image from 'next/image';

const BrandsPlatformsSection: React.FC = () => (
    
  <div className="section brand">
    <div className="main-container w-container">
      <div data-w-id="64d79edd-2fc5-4771-1194-c8a4af0a6431" className="title-wrap-center">
        <h2>Platforms we cover</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="space-56"></div>
      <div data-w-id="64d79edd-2fc5-4771-1194-c8a4af0a6437" className="brand-wrap">
        <Image src="/63bc1e3983475d58fd4fd957/655d59f7f43d700fac801fa8_logo-43-dark.svg" width={120} height={40} loading="lazy" alt="Brand 1" className="brand-logo" unoptimized />
        <Image src="/63bc1e3983475d58fd4fd957/655d59f7da16f9cfd9fac1bc_logo-76-dark.svg" width={120} height={40} loading="lazy" alt="Brand 2" className="brand-logo" unoptimized />
        <Image src="/63bc1e3983475d58fd4fd957/655d59f77e70d440e446c479_logo-9.svg" width={120} height={40} loading="lazy" alt="Brand 3" className="brand-logo" unoptimized />
        <Image src="/63bc1e3983475d58fd4fd957/655d59f7f14b1d825feac974_logo-53-dark.svg" width={120} height={40} loading="lazy" alt="Brand 4" className="brand-logo" unoptimized />
      </div>
    </div>
  </div>
);

export default BrandsPlatformsSection; 
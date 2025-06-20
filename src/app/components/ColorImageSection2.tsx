import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ColorImageSection2: React.FC = () => (
    
  <div className="section light color-image-section">
    <div className="main-container w-container">
      <div className="w-layout-grid grid-halves home-image-grid">
        <div id="w-node-a1ce15bf-4f97-9abf-c40d-7a58ec6f18ab-c24fd956" className="colored-block">
          <div id="w-node-a1ce15bf-4f97-9abf-c40d-7a58ec6f18ac-c24fd956" className="home-image-wrap">
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d182a4fd9b1_Home%20Feature%202.webp" width={500} height={400} loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 85vw, (max-width: 1439px) 84vw, 1144px"
              alt="Home Feature 2" className="image" />
          </div>
          <div className="card-wrap _02">
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d0e1f4fd9f5_Card%207.svg" width={60} height={80} alt="" className="card-7" unoptimized />
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d76b84fd9ee_Card%206.svg" width={60} height={80} alt="" className="card-6" unoptimized />
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d290a4fd9ef_Card%205.svg" width={60} height={80} alt="" className="card-5" unoptimized />
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475df0ab4fd9f0_Card%204.svg" width={60} height={80} alt="" className="card-4" unoptimized />
          </div>
        </div>
        <div id="w-node-a1ce15bf-4f97-9abf-c40d-7a58ec6f1890-c24fd956" data-w-id="a1ce15bf-4f97-9abf-c40d-7a58ec6f1890" className="title-wrap-home-image-section">
          <h2>Imagine your life financially independent and full of freedom.</h2>
          <div className="space-16"></div>
          <p className="text-medium">You wake up in the morning without the stress of worrying about how you will pay your bills, or whether you have enough money to cover your expenses. Instead, you have the peace of mind that comes with knowing that your financial future is secure. You have the freedom to pursue your passions and interests, whether that's traveling the world, starting your own business, or simply enjoying more time with your loved ones.</p>
          <div className="space-40"></div>
          <Link href="/blog" className="cta-link">Read success stories</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ColorImageSection2; 
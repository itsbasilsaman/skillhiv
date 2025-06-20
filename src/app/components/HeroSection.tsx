import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => (
    
  <div className="section hero-home">
    <div className="main-container hero w-container">
      <div data-w-id="f6203dbe-ac49-b209-2164-35b8a0ab0a71" className="hero-block">
        <div data-w-id="1c0e6120-388c-98b2-af9c-fd3989b75d06" className="limit-790">
          <h1 className="mega-h1">Join our 12 weeks<br />transformation course to get <span className="span-italic">financially</span> independent.</h1>
          <div className="space-24"></div>
          <p className="paragraph-big home-subittle">Escape Financial Struggle and Take Control of Your Future in our 12 Week Transformation Course</p>
          <div data-w-id="3c447af4-9d1e-2c5a-93fa-a91a3d589946" className="student-button-wrap">
            <Link href="/category/marketing" className="cta w-button">Join today</Link>
            <div className="student-wrap">
              <div className="student-group-wrap">
                <div className="student-avatar first-avatar"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475dad4c4fd9ad_Student%201.png" width={29} height={29} loading="lazy" alt="Student 1" /></div>
                <div className="student-avatar"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d08494fd9f6_Student%202.png" width={29} height={29} loading="lazy" alt="Student 2" className="student-image" /></div>
                <div className="student-avatar"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d2f934fd9ac_Student%203.png" width={29} height={29} loading="lazy" alt="Student 3" className="student-image" /></div>
                <div className="student-avatar"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d46934fd9ae_Student%204.png" width={29} height={29} loading="lazy" alt="Student 4" className="student-image" /></div>
              </div>
              <p className="paragraph-small">Trusted by over 10.000 students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection; 
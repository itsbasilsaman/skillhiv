import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeachersSection: React.FC = () => (
    
  <div className="section teacher">
    <div className="main-container w-container">
      <div data-w-id="64644953-c354-59ba-3004-41541dc898d7" className="title-wrap-center">
        <div className="limit-626">
          <h2>Meet your teachers</h2>
          <div className="space-24"></div>
          <p className="text-medium text-height-180">Our team follows agile methodologies to design courses.</p>
        </div>
      </div>
      <div className="space-80"></div>
      <div data-w-id="fe48c15c-1ddf-1385-38c8-f594ba3e0142" className="teacher-wrap">
        <div className="teacher-card">
          <div className="teacher-image-wrap">
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475dd20a4fd9bc_Teacher%203.webp" width={301} height={400} loading="lazy" alt="Marianna Levchenko" className="image" />
          </div>
          <div className="block">
            <div className="subtext text-color-accent-one">SEO expert</div>
            <div className="space-08"></div>
            <h3 className="no-margins">Marianna Levchenko</h3>
          </div>
        </div>
        <div className="teacher-card">
          <div className="teacher-image-wrap">
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d56164fd9bb_Teacher%201.webp" width={301} height={400} loading="lazy" alt="Leo Grant" className="image" />
          </div>
          <div className="block">
            <div className="subtext text-color-accent-one">SEO expert</div>
            <div className="space-08"></div>
            <h3 className="no-margins">Leo Grant</h3>
          </div>
        </div>
        <div className="teacher-card">
          <div className="teacher-image-wrap">
            <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d393b4fd9ba_Teacher%202.webp" width={301} height={400} loading="lazy" alt="Robert Lewandowski" className="image" />
          </div>
          <div className="block">
            <div className="subtext text-color-accent-one">SEO expert</div>
            <div className="space-08"></div>
            <h3 className="no-margins">Robert Lewandowski</h3>
          </div>
        </div>
        <div className="teacher-button-wrap">
          <div className="limit-270">
            <Link href="/teachers" className="cta left-icon w-inline-block">
              <div>See all teachers</div>
              <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d3a884fd9c1_Button%20Icon.svg" width={24} height={24} loading="lazy" alt="Button Icon" unoptimized />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeachersSection; 
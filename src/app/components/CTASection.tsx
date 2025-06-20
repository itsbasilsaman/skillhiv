import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection: React.FC = () => (
    
  <div className="section">
    <div className="main-container w-container">
      <div data-w-id="65f4b1bb-63fd-1b6c-4e51-e72e1b9b1836" className="cta-block">
        <div className="w-layout-grid cta-grid">
          <div id="w-node-_65f4b1bb-63fd-1b6c-4e51-e72e1b9b1838-1b9b1834" className="block">
            <div className="limit-560">
              <h2>Why don't you start today?</h2>
              <div className="space-08"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet sem blandit, suscipit lectus ac, molestie magna.</p>
            </div>
            <div className="cta-button-wrap">
              <Link href="/category/marketing" className="cta w-button">Enroll now</Link>
              <div className="space-32"></div>
              <div className="student-wrap gap-16">
                <div className="student-group-wrap">
                  <div className="student-avatar-big first-avatar"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475dad4c4fd9ad_Student%201.png" width={29} height={29} loading="lazy" alt="Student 1" /></div>
                  <div className="student-avatar-big"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d08494fd9f6_Student%202.png" width={29} height={29} loading="lazy" alt="Student 2" className="student-image" /></div>
                  <div className="student-avatar-big"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d2f934fd9ac_Student%203.png" width={29} height={29} loading="lazy" alt="Student 3" className="student-image" /></div>
                  <div className="student-avatar-big"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d46934fd9ae_Student%204.png" width={29} height={29} loading="lazy" alt="Student 4" className="student-image" /></div>
                </div>
                <p className="paragraph-small">Trusted by over 10.000 students</p>
              </div>
            </div>
          </div>
          <div id="w-node-_65f4b1bb-63fd-1b6c-4e51-e72e1b9b184f-1b9b1834" className="block">
            <div id="w-node-_65f4b1bb-63fd-1b6c-4e51-e72e1b9b1850-1b9b1834" className="cta-image-wrap">
              <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475dcd1a4fd9c2_CTA%20Image.webp" width={500} height={400} loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 85vw, (max-width: 1439px) 84vw, 1144px"
                alt="CTA Image" className="image" />
            </div>
            <div className="colored-block cta"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTASection; 
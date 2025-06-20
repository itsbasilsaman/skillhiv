import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '../NewsletterForm';

const FooterNewsletterSection: React.FC = () => (
    
  <div className="footer">
    <div data-w-id="5a56e052-7257-4202-2fd3-68c3078a0add" className="section footer">
      <div className="main-container w-container">
        <div className="w-layout-grid grid-footer">
          <div id="w-node-_5a56e052-7257-4202-2fd3-68c3078a0ae0-078a0adc" className="footer-main">
            <Link href="/" className="footer-logo w-inline-block">
              <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d11184fd9e8_Footer%20Logo.svg" width={120} height={32} loading="lazy" alt="Footer Logo" unoptimized />
            </Link>
            <p className="text-medium">Elit massa non eros, consectetur non ac consequat in nisl mattis adipiscing tellus egestas gravido.</p>
            <div className="footer-social-link-wrap">
              <Link href="#" className="social-link w-inline-block"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d57bf4fd9e9_Mesenger%20Icon.svg" width={24} height={24} loading="lazy" alt="Messenger" unoptimized /></Link>
              <Link href="#" className="social-link w-inline-block"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d87fd4fd9ea_Facebook%20Icon.svg" width={24} height={24} loading="lazy" alt="Facebook" unoptimized /></Link>
              <Link href="#" className="social-link w-inline-block"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d36144fd9eb_Whatsapp%20Icon.svg" width={24} height={24} loading="lazy" alt="Whatsapp" unoptimized /></Link>
              <Link href="#" className="social-link w-inline-block"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d06764fd9ec_Instragram%20Icon.svg" width={24} height={24} loading="lazy" alt="Instagram" unoptimized /></Link>
            </div>
          </div>
          <div id="w-node-_5a56e052-7257-4202-2fd3-68c3078a0aee-078a0adc" className="footer-column">
            <h3 className="footer-title">Pages</h3>
            <div className="space-24"></div>
            <div className="footer-grid">
              <div className="footer-block">
                <Link href="/home" className="footer-link w--current">Home</Link>
                <Link href="/category/marketing" className="footer-link">Course</Link>
                <Link href="/product/designing-for-experiences" className="footer-link">Course single</Link>
                <Link href="/teachers" className="footer-link">Teachers</Link>
                <Link href="/teachers/michael-kent" className="footer-link">Teacher single</Link>
                <Link href="/blog" className="footer-link">Blog</Link>
              </div>
              <div className="footer-block">
                <Link href="/blog/the-advantages-of-learning-a-new-skill" className="footer-link">Blog post</Link>
                <Link href="/about-us" className="footer-link">About us</Link>
                <Link href="/contact" className="footer-link">Contact</Link>
                <Link href="/sign-up" className="footer-link">Sign up</Link>
                <Link href="/log-in" className="footer-link">Log in</Link>
                <Link href="/index.htm#pages" className="footer-link">See all pages</Link>
              </div>
            </div>
          </div>
          <div id="w-node-_5a56e052-7257-4202-2fd3-68c3078a0b0d-078a0adc" className="footer-contact">
            <h3 className="footer-title">Contact us</h3>
            <div className="space-24"></div>
            <div className="contact-list">
              <div className="contact-list-item">
                <div className="contact-list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d028c4fd96e_mail.svg" width={24} height={24} loading="lazy" alt="Mail" unoptimized /></div>
                <p className="paragraph-small">templates@wavesdesign.io</p>
              </div>
              <div className="contact-list-item">
                <div className="contact-list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d739c4fd988_message-circle.svg" width={24} height={24} loading="lazy" alt="Message" unoptimized /></div>
                <p className="paragraph-small">@wavesdesign</p>
              </div>
              <div className="contact-list-item">
                <div className="contact-list-icon"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d26354fd976_phone.svg" width={24} height={24} loading="lazy" alt="Phone" unoptimized /></div>
                <p className="paragraph-small">+1 600 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section newsletter">
        <div className="main-container w-container">
          <div className="w-layout-grid grid-halves">
            <div id="w-node-_5a56e052-7257-4202-2fd3-68c3078a0b24-078a0adc" className="block">
              <h3 className="newsletter-title">Subscribe to our newsletter</h3>
              <div className="newsletter-block">
                <p>Join the <span className="span-newsletter">15,000+</span> students that uses</p>
                <div className="newsletter-logo"><Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d52f64fd9ed_Newsletter%20Logo.svg" width={120} height={32} loading="lazy" alt="Newsletter Logo" unoptimized /></div>
              </div>
            </div>
            <div id="w-node-_5a56e052-7257-4202-2fd3-68c3078a0b2f-078a0adc" className="form-block w-form">
              <NewsletterForm />
            </div>
          </div>
          <div className="newsletter-divider"></div>
          <div className="copyright-wrap">
            <p>Templated designed by <a href="https://webflow.com/templates/designers/wavesdesign" target="_blank" className="white-link">Wavesdesign</a> on powerfull no-code platform <a href="#" className="white-link">Webflow</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterNewsletterSection; 
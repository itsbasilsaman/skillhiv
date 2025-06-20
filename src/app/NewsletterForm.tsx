"use client";
import React from "react";

const NewsletterForm: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter logic here
  };

  return (
    
    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="newsletter-form" onSubmit={handleNewsletterSubmit}>
      <input className="newsletter-text-field w-input" maxLength={256} name="Email-2" data-name="Email 2" placeholder="Email adress" type="email" id="Email-2" />
      <input type="submit" data-wait="Please wait..." className="cta subscribe w-button" value="Subscribe" />
    </form>
  );
};

export default NewsletterForm; 
export interface FooterProps {
  /** Company/organization name */
  companyName?: string;
  /** Company/organization location */
  location?: string;
  /** Company/organization phone number */
  phone?: string;
  /** Company/organization email */
  email?: string;
  /** Company/organization website */
  website?: string;
  /** Custom logo component to render */
  logo?: any;
  /** Additional CSS classes */
  class?: string;
  /** Footer background color (defaults to dark theme) */
  backgroundColor?: string;
  /** Footer text color (defaults to white) */
  textColor?: string;
  /** Show social media links */
  showSocial?: boolean;
  /** Social media links */
  socialLinks?: SocialLink[];
  /** Additional footer content */
  additionalContent?: any;
}

export interface SocialLink {
  /** Social media platform name */
  platform: string;
  /** Social media URL */
  url: string;
  /** Accessible label for the link */
  label: string;
} 
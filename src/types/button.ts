export interface ButtonProps {
  /** The visual style variant of the button */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  
  /** Whether the button is disabled */
  disabled?: boolean;
  
  /** Whether the button is in a loading state */
  loading?: boolean;
  
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  
  /** The HTML button type */
  type?: 'button' | 'submit' | 'reset';
  
  /** Additional CSS classes */
  class?: string;
  
  /** Accessibility: Label for screen readers */
  'aria-label'?: string;
  
  /** Accessibility: ID of element that describes the button */
  'aria-describedby'?: string;
  
  /** Accessibility: Whether the button controls an expanded section */
  'aria-expanded'?: boolean;
  
  /** Accessibility: Whether the button is pressed (for toggle buttons) */
  'aria-pressed'?: boolean;
  
  /** Accessibility: Whether the button has a popup */
  'aria-haspopup'?: boolean;
}

export type ButtonVariant = ButtonProps['variant'];
export type ButtonSize = ButtonProps['size']; 
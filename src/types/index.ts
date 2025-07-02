export interface ContactForm {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface MenuItem {
  label: string;
  icon?: string;
  to: string;
}
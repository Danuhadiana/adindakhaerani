export interface Affiliation {
  name: string;
  role: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  instagram: string;
  photo: string;
  affiliations: Affiliation[];
}

export interface About {
  text: string;
  focus: string[];
}

export interface Experience {
  company: string;
  role: string;
  points: string[];
  result: string;
  images: string[];
}

export interface Organization {
  title: string;
  period: string;
  type: string;
}

export interface SpeakingScope {
  category: string;
  description: string;
}

export interface PublicSpeaking {
  title: string;
  scopes: SpeakingScope[];
  images: string[];
}

export interface Achievement {
  title: string;
  year?: string;
  description: string;
  highlight?: boolean;
}

export interface Highlight {
  label: string;
  detail: string;
}

export interface PortfolioData {
  profile: Profile;
  about: About;
  experience: Experience[];
  organizations: Organization[];
  organizationRoles: string[];
  organizationImages: string[];
  publicSpeaking: PublicSpeaking;
  achievements: Achievement[];
  achievementImages: string[];
  highlights: Highlight[];
}

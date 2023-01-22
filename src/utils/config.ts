interface Socials {
  facebook: string;
  linkedIn: string;
  github: string;
  discord: string;
  twitter: string;
}

const config: { socials: Socials } = {
  socials: import.meta.env.VITE_SOCIAL_LINKS
    ? (JSON.parse(import.meta.env.VITE_SOCIAL_LINKS as string) as Socials)
    : ({} as Socials),
};

export default config;

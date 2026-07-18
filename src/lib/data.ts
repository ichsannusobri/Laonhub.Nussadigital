export interface Author {
  slug: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

export const authors: Record<string, Author> = {
  "ichsan-nusobri": {
    slug: "ichsan-nusobri",
    name: "Ichsan Nusobri",
    avatar: "https://images.pexels.com/photos/15533288/pexels-photo-15533288.jpeg",
    role: "Senior Financial Analyst & Founder",
    bio: "Ichsan is the founder of Nussa Digital and a seasoned personal finance writer with over 8 years of experience. He specializes in wealth management, debt recovery strategies, and investment analysis.",
    socials: {
      twitter: "https://twitter.com/ichsannusobri",
      linkedin: "https://linkedin.com/in/ichsannusobri"
    }
  },
  "sarah-chen": {
    slug: "sarah-chen",
    name: "Sarah Chen",
    avatar: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
    role: "Insurance Specialist & Writer",
    bio: "Sarah is a certified insurance advisor who previously worked for major global underwriters. She writes expert guides explaining the hidden complexities of life, health, and disability insurance policies.",
    socials: {
      twitter: "https://twitter.com/sarahchen_finance",
      linkedin: "https://linkedin.com/in/sarahchen-insurance"
    }
  },
  "michael-zhang": {
    slug: "michael-zhang",
    name: "Michael Zhang",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    role: "Legal Advisor & Attorney Consultant",
    bio: "Michael is a legal consultant specializing in personal injury law, insurance claims dispute, and financial contract regulations. He helps readers navigate complex legal situations after accidents.",
    socials: {
      linkedin: "https://linkedin.com/in/michaelzhang-law"
    }
  },
  "takeshi-mori": {
    slug: "takeshi-mori",
    name: "Takeshi Mori",
    avatar: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg",
    role: "Mortgage Broker & Real Estate Advisor",
    bio: "Takeshi is a former mortgage broker with 10+ years of banking experience. He is dedicated to educating homeowners on refinancing timing, equity loans, and mortgage negotiations.",
    socials: {
      twitter: "https://twitter.com/takeshimori_loans"
    }
  }
};

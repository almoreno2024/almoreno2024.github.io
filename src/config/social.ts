import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/almoreno2024",
        linkTitle: `Follow Me on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:almoreno.eng@gmail.com",
        linkTitle: `Send me an email`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=shannon",
        linkTitle: `Claude Shannon on Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-1825-0097",
        linkTitle: `Claude Shannon on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/alvaro-moreno-quezada-816b16382/",
        linkTitle: `Alvaro Moreno on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    //"Google Scholar": "GoogleScholar",
    //ORCID: "ORCID",
    RSS: "RSS",
};
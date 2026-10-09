import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "My portfolio",
        subtitle: "A look into my work, research, and contributions to the field of electrical engineering.",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Thoughts on projects, programming, and technology.",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific articles.",
        isActive: false,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false,
    },
    projects: {
        title: "Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Academic courses and educational materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};

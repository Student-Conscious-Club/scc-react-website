import {
    FaUserTie,
    FaGraduationCap,
    FaTheaterMasks,
    FaRunning,
    FaHandsHelping,
    FaUsers,
    FaStar,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

export const features = [
    {
        title: "Leadership Development",
        description: "Build essential leadership qualities through hands-on experience and mentorship",
        icon: <FaUserTie />
    },
    {
        title: "Skill Enhancement",
        description: "Participate in workshops and training sessions for personal and professional growth",
        icon: <FaGraduationCap />
    },
    {
        title: "Cultural Exchange",
        description: "Engage in cultural showcases and events that celebrate diversity",
        icon: <FaTheaterMasks />
    },
    {
        title: "Sports & Athletics",
        description: "Participate in sports tournaments that promote teamwork and physical fitness",
        icon: <FaRunning />
    }
];

export const coreValues = [
    {
        title: "Social Responsibility",
        description: "Making a positive impact in our community through conscious actions",
        icon: <FaHandsHelping />
    },
    {
        title: "Student Empowerment",
        description: "Providing platforms for students to discover and showcase their talents",
        icon: <FaUsers />
    },
    {
        title: "Holistic Development",
        description: "Focus on overall personality development and life skills",
        icon: <FaStar />
    }
];

export const mission = {
    title: "Our Mission",
    description: "To empower students with the skills, knowledge, and opportunities they need to become effective leaders and conscious citizens of tomorrow.",
    image: "/assets/about/mission.jpg"
};

export const socialMedia = [
    {
        platform: "Instagram",
        url: "https://instagram.com/scc",
        icon: FaInstagram,
        handle: "@scc_official"
    },
    {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/scc",
        icon: FaLinkedin,
        handle: "SCC"
    },
    {
        platform: "Twitter",
        url: "https://twitter.com/scc",
        icon: FaTwitter,
        handle: "@scc"
    }
];

export const aboutSections = [
    {
        title: "Why SCC?",
        type: "paragraph",
        content: "SCC provides a platform where students can nurture and showcase their talents while building essential leadership qualities. From communication and creativity to decision-making and management, SCC ensures a well-rounded personality development for its members.",
        image: "/assets/about/whyscc.jpg",
        links: [
            { text: "Join Us", href: "/join" },
            { text: "View Events", href: "/events" }
        ]
    },
    {
        title: "Our Mission",
        type: "list",
        content: [
            "To instill self-confidence and self-awareness.",
            "To develop critical thinking and logical reasoning.",
            "To inspire students to explore and pursue their passions."
        ],
        image: "/assets/about/mission.jpg",
        links: [
            { text: "View Team", href: "/teams" },
        ]
    },
    {
        title: "Our Journey",
        type: "paragraph",
        content: "Since its inception, SCC has successfully hosted a range of events, from volleyball tournaments and article writing competitions to cultural extravaganzas and skill-based workshops. Our focus remains on fostering talent, enhancing skills, and preparing students for a bright future.",
        image: "/assets/about/ourjourney.jpg",
        links: [
            { text: "View Events", href: "/events" }
        ]
    }
];

// Define the PortfolioDataInterface
export interface PortfolioDataInterface {
    id: number;
    description:string,
    name: string;
    image: string;
    githubUrl?: string;
    liveUrl?: string;
    caseStudy?:string;

    category: 'All' | 'Personal' | 'Apps' | 'Frontend' | 'Full Stack';
}

// Define the tabs array
export const tabs: string[] = [
    'All',
    'Personal',
    'Apps',
    'Frontend',
    'Full Stack'
];

// Define the PortfolioData array
export const PortfolioData: PortfolioDataInterface[] = [
    {
        id: 1,
        name: 'EduBLock',

        description:'EduBlock is a verifiable credentials system allowing institutions to issue blockchain-based certificates and degrees. It supports real-time communication, tracking, bulk issuance, and API integration for third-party use. The platform includes a credential visual designer and a mobile wallet for storing and sharing credentials offline, ensuring secure, efficient credential verification.\n',

        image: '/project/edublock-brand.webp',
        caseStudy:'/case-studies/EduBlock.pdf',
        category: 'Frontend',
    },
    {
        id: 2,
        description:'EduBlock is a verifiable credentials system allowing institutions to issue blockchain-based certificates and degrees. It supports real-time communication, tracking, bulk issuance, and API integration for third-party use. The platform includes a credential visual designer and a mobile wallet for storing and sharing credentials offline, ensuring secure, efficient credential verification.\n',

        name: 'Goldy',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project2',
        liveUrl: 'https://user.github.io/project2',
        category: 'Apps'
    },
    {
        id: 3,
        description:'EduBlock is a verifiable credentials system allowing institutions to issue blockchain-based certificates and degrees. It supports real-time communication, tracking, bulk issuance, and API integration for third-party use. The platform includes a credential visual designer and a mobile wallet for storing and sharing credentials offline, ensuring secure, efficient credential verification.\n',

        name: 'Project Three',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project3',
        liveUrl: 'https://user.github.io/project3',
        category: 'Frontend'
    },
    {
        id: 4,
        name: 'Project Four',
        description:'EduBlock is a verifiable credentials system allowing institutions to issue blockchain-based certificates and degrees. It supports real-time communication, tracking, bulk issuance, and API integration for third-party use. The platform includes a credential visual designer and a mobile wallet for storing and sharing credentials offline, ensuring secure, efficient credential verification.\n',

        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project4',
        liveUrl: 'https://user.github.io/project4',
        category: 'Full Stack'
    },
    // Add more projects as needed
];

// Define the PortfolioDataInterface
export interface PortfolioDataInterface {
    id: number;
    name: string;
    image: string;
    githubUrl?: string;
    liveUrl?: string;
    category: 'All' | 'Personal' | 'Apps' | 'Frontend' | 'Full Stack'; // Restrict category to specific values
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
        name: 'Project One',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project1',
        liveUrl: 'https://user.github.io/project1',
        category: 'Personal'
    },
    {
        id: 2,
        name: 'Project Two',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project2',
        liveUrl: 'https://user.github.io/project2',
        category: 'Apps'
    },
    {
        id: 3,
        name: 'Project Three',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project3',
        liveUrl: 'https://user.github.io/project3',
        category: 'Frontend'
    },
    {
        id: 4,
        name: 'Project Four',
        image: 'https://via.placeholder.com/300',
        githubUrl: 'https://github.com/user/project4',
        liveUrl: 'https://user.github.io/project4',
        category: 'Full Stack'
    },
    // Add more projects as needed
];

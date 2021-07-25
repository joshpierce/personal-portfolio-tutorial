import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome, faFolderOpen, faNewspaper, faLink } from '@fortawesome/free-solid-svg-icons';

interface NavbarLink {
    title: string;
    url: string;
    icon: IconDefinition;
}

const links: NavbarLink[] = [
    {
        title: 'Home',
        url: '/',
        icon: faHome
    },
    {
        title: 'Blog',
        url: '/blog/1',
        icon: faNewspaper
    },
    {
        title: 'Connect',
        url: '/connect',
        icon: faLink
    }
];

export default links;

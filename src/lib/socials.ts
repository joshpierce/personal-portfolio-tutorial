import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGithub,
    faTwitch,
    faDribbble,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

interface Social {
    title: string;
    url: string;
    icon: IconDefinition;
}

const socials: Social[] = [
    // {
    //     title: 'Facebook',
    //     url: '',
    //     icon: faFacebook
    // },
    // {
    //     title: 'Instagram',
    //     url: '',
    //     icon: faInstagram
    // },
    {
        title: 'Twitter',
        url: 'https://twitter.com/heyjoshpierce',
        icon: faTwitter
    },
    {
        title: 'Github',
        url: 'https://github.com/joshpierce',
        icon: faGithub
    },
    // {
    //     title: 'Twitch',
    //     url: '',
    //     icon: faTwitch
    // },
    // {
    //     title: 'Youtube',
    //     url: '',
    //     icon: faYoutube
    // },
    // {
    //     title: 'Dribbble',
    //     url: '',
    //     icon: faDribbble
    // },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/joshuampierce/',
        icon: faLinkedin
    }
];

export default socials;

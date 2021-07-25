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
    name: string;
    url: string;
    icon: IconDefinition;
    bgColor: string;
    color: string;
}

const socials: Social[] = [
    // {
    //     name: 'Facebook',
    //     url: '',
    //     icon: faFacebook,
    //     bgColor: '#3b5998',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'Instagram',
    //     url: '',
    //     icon: faInstagram,
    //     bgColor: '#4c5fd7',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'Twitter',
    //     url: '',
    //     icon: faTwitter,
    //     bgColor: '#1da1f2',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'Github',
    //     url: '',
    //     icon: faGithub,
    //     bgColor: '#000000',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'Twitch',
    //     url: '',
    //     icon: faTwitch,
    //     bgColor: '#9146ff',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'Youtube',
    //     url: '',
    //     icon: faYoutube,
    //     bgColor: '#ffffff',
    //     color: '#ff0000'
    // },
    // {
    //     name: 'Dribbble',
    //     url: '',
    //     icon: faDribbble,
    //     bgColor: '#ea4c89',
    //     color: '#ffffff'
    // },
    // {
    //     name: 'LinkedIn',
    //     url: '',
    //     icon: faLinkedin,
    //     bgColor: '#0a66c2',
    //     color: '#ffffff'
    // }
];

export default socials;

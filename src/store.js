import { reactive } from 'vue'
import AppHome from './pages/AppHome.vue';
import AdvantageCard from './components/AppAboutComponents/AdvantageCard.vue';

export const store = reactive({
    // HOME PAGE DATI
    // ArtistCoaching card dati
    ArtistCards: [
        {
            image: "../assets/images/artist-box-image-01.png",
            title: 'Online Coures',
            info: 'Online art coaching now offers you a very powerful way to redesign your artist mind.',
        },

        {
            image: "../assets/images/artist-box-image-02.png",
            title: 'One to One',
            info: 'Getting the necessary clarity about the current state to help you improve your ability.',
        },

        {
            image: "../assets/images/artist-box-image-03.png",
            title: 'Anywhere',
            info: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
        },

        {
            image: "../assets/images/artist-box-image-04.png",
            title: 'On Time',
            info: "Punctuality is our top priority because it's an essential criteria to assess a program quality.",
        },
    ],

    // TipsSideCard dati
    SideCards:[
        {
            url: '#',
            image: '../assets/images/artist-blog-03-480x356.jpeg',
            lable: 'ARTIST',
            title: 'Brush Strokes Energize Trees in Paintings',
            date: 'May 15, 2020',
            views: '6,901 views'
        },
        {
            url: '#',
            image: '../assets/images/artist-blog-01-480x356.jpg',
            lable: 'ARTIST',
            title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
            date: 'May 15, 2020',
            views: '9,824 views'
        },
    ],

    // ABOUT US DATI
    AdvantagesCards:[
        {
            icon: 'fa-regular fa-flag',
            title: 'Life Mentoring',
            text: 'Get some healing and guidance for you future career and vocational directions.',
            url: '#',
            direction: 'Start here'
        },
        {
            icon: 'fa-solid fa-gear',
            title: 'Self Development',
            text: 'Develop skills for career of various majors including computer science & language competence.',
            url: '#',
            direction: 'Discover now'
        },
        {
            icon: 'fa-regular fa-life-ring',
            title: 'Ask Consultancy',
            text: "Make a reservation with our special consultant to learn what's best for your dream career.",
            url: '#',
            direction: 'Get Free Quote'
        },
        {
            icon: 'fa-solid fa-desktop',
            title: 'Remote Learning',
            text: 'Learn from anywhere in the world on desktop, tablet or mobile phone with an Internet connection.',
            url: '#',
            direction: 'Start now'
        },
    ],

    // FOOTER DATI
    footerAddres: [
        {
            text: '382 NE 191st St # 87394 Miami, FL 33179-3899',
            url: '#'
        },

        {
            text: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
            url: '#'
        },

        {
            text: 'support@maxcoach.com',
            url: '#'
        },
    ],

    footerIcons: [
        {
            classi: 'fa-brands fa-square-facebook',
            url: '#'
        },

        {
            classi: 'fa-brands fa-square-twitter',
            url: '#'
        },

        {
            classi: 'fa-brands fa-instagram',
            url: '#'
        },

        {
            classi: 'fa-brands fa-linkedin',
            url: '#'
        },
    ],

    footerExplore: [
        {
            text: 'Start here',
            url: '#'
        },

        {
            text: 'Success story',
            url: '#'
        },

        {
            text: 'Blog',
            url: '#'
        },

        {
            text: 'Courses',
            url: '#'
        },

        {
            text: 'Contact us',
            url: '#'
        },
    ],

    footerInformation: [
        {
            text: 'Membership',
            url: '#'
        },

        {
            text: 'Purchase guide',
            url: '#'
        },

        {
            text: 'Privacy policy',
            url: '#'
        },

        {
            text: 'Terms of services',
            url: '#'
        },
    ],

    menuHeader: [
        {
            text: 'Home',
            url: '#'
        },
        {
            text: 'Pages',
            url: '#'
        },
        {
            text: 'Courses',
            url: '#'
        },
        {
            text: 'Features',
            url: '#'
        },
        {
            text: 'Blog',
            url: '#'
        },
        {
            text: 'Shop',
            url: '#'
        },

    ],

    menuItems: [
        {
            home: [
                ''
            ]
        },
        {
            pagesItem: [
                {
                    text: 'Start Here',
                    url: '#'
                },
                {
                    text: 'Success stori',
                    url: '#'
                },
                {
                    text: 'About me',
                    url: '#'
                },
                {
                    text: 'About us 01',
                    url: '#'
                },
                {
                    text: 'About us 01',
                    url: '#'
                },
                {
                    text: 'About us 01',
                    url: '#'
                },
                {
                    text: 'Contact me',
                    url: '#'
                },
                {
                    text: 'Contact us',
                    url: '#'
                },
            ]
        }


    ]


});

import { reactive } from 'vue'
import AppHome from './pages/AppHome.vue';

export const store = reactive({

    // home page dati
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


    // struttura dati SliderAppHome
    testimonials: [
        {
            title: 'High level of efficiency and scientific teaching methods',
            text: '"I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me."',
            name: 'Mina Hollace',
            job: '/ Freelancer',
            image: '../src/assets/images/artist-testimonial-avatar-04.jpg'
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach ',
            text: '"I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students."',
            name: 'Madley Pondor',
            job: '/ IT Specialist',
            image: '../src/assets/images/artist-testimonial-avatar-01.jpg'
        },
        {
            title: 'The MaxCoach team works really hard to ensure high quality',
            text: '"I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels."',
            name: 'Luvic Dubble',
            job: '/ Private Tutor',
            image: '../src/assets/images/artist-testimonial-avatar-03.jpg'
        },
        {
            title: 'It s a choice of quality for people with special needs',
            text: '"I am a very strict person so I require everything to be organized and neat. Then, I ll be able to make things right and shine. MaxCoach guys just got me."',
            name: 'Florence Themes',
            job: '/ Multimedia Admin',
            image: '../src/assets/images/artist-testimonial-avatar-02.jpg'
        },

    ],
    // TipsSideCard dati
    SideCards: [
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

    // dati footer
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
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },
            ]
        },
        {
            text: 'Pages',
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },

            ]
        },
        {
            text: 'Courses',
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },
            ]
        },
        {
            text: 'Features',
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },
            ]
        },
        {
            text: 'Blog',
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },
            ]
        },
        {
            text: 'Shop',
            url: [
                {
                    link: 'Ciao',
                },
                {
                    link: 'ci sono',
                },
                {
                    link: 'andrà bene',
                },
            ]
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

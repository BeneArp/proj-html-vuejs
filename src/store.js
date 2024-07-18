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

    // ABOUT US DATI
    AdvantagesCards: [
        {
            icon: 'fa-regular fa-flag',
            title: 'Life Mentoring',
            text: 'Get some healing and guidance for you future career and vocational directions.',
            url: '#',
            direction: 'Start here',
            id: 0
        },
        {
            icon: 'fa-solid fa-gear',
            title: 'Self Development',
            text: 'Develop skills for career of various majors including computer science & language competence.',
            url: '#',
            direction: 'Discover now',
            id: 1
        },
        {
            icon: 'fa-regular fa-life-ring',
            title: 'Ask Consultancy',
            text: "Make a reservation with our special consultant to learn what's best for your dream career.",
            url: '#',
            direction: 'Get Free Quote',
            id: 2
        },
        {
            icon: 'fa-solid fa-desktop',
            title: 'Remote Learning',
            text: 'Learn from anywhere in the world on desktop, tablet or mobile phone with an Internet connection.',
            url: '#',
            direction: 'Start now',
            id: 3
        },
    ],

    AboutSlider:[
        {
            image: "../../assets/images/testimonial-avata-02.jpg",
            name: "MINA HOLLACE",
            role: "/ Freelancer",
            text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me."
        },

        {
            image: "../../assets/images/testimonial-avata-04.jpg",
            name: "Madley Pondor",
            role: "/ IT Specialist",
            text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students."
        },

        {
            image: "../../assets/images/testimonial-avata-01.jpg",
            name: "Luvic Dubble",
            role: "/ Private Tutor",
            text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to adopt."
        },

        {
            image: "../../assets/images/testimonial-avata-03.jpg",
            name: "Florence Themes",
            role: "/ Multimedia Admin",
            text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me."
        },

        {
            image: "../../assets/images/testimonial-avata-02.jpg",
            name: "MINA HOLLACE",
            role: "/ Freelancer",
            text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me."
        },
    ],

    partners:[
        {
            image: "../../assets/images/client-logo-01.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-02.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-03.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-04.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-05.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-06.png",
            url: '#'
        },

        {
            image: "../../assets/images/client-logo-07.png",
            url: '#'
        },
    ],


    // struttura dati per statistiche crescenti
    stats: [
        {
            data: 1926,
            attribute: '',
            title: 'FINISHED SESSIONS',
            counter: 0,
        },
        {
            data: 3092,
            attribute: '+',
            title: 'ONLINE ENROLLMENT',
            counter: 0,
        },
        {
            data: 200,
            attribute: '',
            title: 'SUBJECTS TAUGHT',
            counter: 0,
        },
        {
            data: 100,
            attribute: '%',
            title: 'SATISFACTION RATE',
            counter: 0,
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

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

    AboutSlider: [
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

    partners: [
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

    // CONTACTS DATI
    InfoCard:[
        {
            title: 'Address',
            text:[
                '1800 Abbot Kinney Blvd. Unit D & E Venice'
            ],
            classi: 'fa-solid fa-location-dot'
        },

        {
            title: 'Contact',
            text:[
                'Mobile: (+88) - 1990 - 6886',
                'Hotline: 1800 - 1102',
                'Mail: contact@maxcoach.com'
            ],
            classi: 'fa-solid fa-phone'
        },

        {
            title: 'Hour of operation',
            text:[
                'Monday - Friday: 09:00 - 20:00',
                'Sunday & Saturday: 10:30 - 22:00',
            ],
            classi: 'fa-regular fa-clock'
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

    // dati dedl menu header
    menuHeader: [
        {
            text: 'Home',
            url: [
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
            ]
        },
        {
            text: 'Pages',
            url: [
                {
                    link: 'Start Here',
                },
                {
                    link: 'Success stori',
                },
                {
                    link: 'About me',
                },
                {
                    link: 'About us 01',
                },
                {
                    link: 'Contact me',
                },
                {
                    link: 'Contact us',
                }

            ]
        },
        {
            text: 'Courses',
            url: [
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
            ]
        },
        {
            text: 'Features',
            url: [
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
            ]
        },
        {
            text: 'Blog',
            url: [
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
            ]
        },
        {
            text: 'Shop',
            url: [
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
                {
                    link: 'link pagina',
                },
            ]
        },

    ],

    // dati latesst online couses

    lessonsOnline: [
        {
            imageCor: 'src/assets/images/artist-course-08-480x480.jpg',
            price: '$18.00',
            className: 'The Acrilic Paintin Academy',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '4 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-07-480x480.jpg',
            price: '$21.00',
            className: 'Drawing and Shading: Complete Course',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '14 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-06-480x480.jpg',
            price: '$19.00',
            className: 'The Color Theory for Digital Artist',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '7 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-05-480x480.jpg',
            price: '$35.00',
            className: 'Ultimate Guide to Digital Sketching for Beginner',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '2 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-04-480x480.jpg',
            price: '$19.00',
            className: 'Portrait Drawing The Smart Way',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '14 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-03-480x480.jpg',
            price: '$19.00',
            className: 'Mastering Watercolor Painting from Beginner',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '9 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-02-480x480.jpg',
            price: '$25.00',
            className: 'The Art & Science of Drawing',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '4 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },
        {
            imageCor: 'src/assets/images/artist-course-01-480x480.jpg',
            price: '$22.00',
            className: 'The Colored Pencil Drawing Course',
            iconLessons: 'fa-regular fa-file-lines',
            numberLessons: '6 Lessons',
            iconStudent: 'fa-regular fa-user',
            numberStudent: '50 Students',
        },

    ],

    upcomingEvent: [
        {
            firstRow: [
                {
                    imageEvent: 'src/assets/images/artist-event-04-250x300.jpg',
                    dataEvent: 'APR 22, 2021 ',
                    nameEvent: 'Storytelling Workshop',
                    location: ' Texas, US '
                },
                {
                    imageEvent: 'src/assets/images/artist-event-03-250x300.jpg',
                    dataEvent: 'OCT 10, 2020 ',
                    nameEvent: 'Painting Art Contest 2020',
                    location: ' New York, US '
                },

            ],
        },
        {
            secondRow: [
                {
                    imageEvent: 'src/assets/images/artist-event-02-250x300.jpg ',
                    dataEvent: 'NOV 23, 2020 ',
                    nameEvent: 'International Art Fair 2020',
                    location: 'Hamburg, Germany'
                },
                {
                    imageEvent: 'src/assets/images/artist-event-01-250x300.jpg',
                    dataEvent: 'DEC 15, 2020',
                    nameEvent: 'Street Performance: Call for Artist',
                    location: 'Illinois, US'
                },

            ],
        },
    ]


});

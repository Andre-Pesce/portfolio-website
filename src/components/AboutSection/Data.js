import vid1 from "../../assets/videos/edms-demo-1.mp4";
import img1 from "../../assets/images/edms-run-2.png";
import svg1 from "../../assets/images/svg-1.svg"

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'About Me',
    headline: 'This is the Headline about me',
    description: 'This is description text',
    buttonLabel: 'Get started',
    imgStart: false,
    isVid: false,
    img: svg1,
    alt: 'me',
    dark: true,
    primary: true,
    darkText: true
}

export const homeObjTwo = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Contact',
    headline: 'This is the Headline contact',
    description: 'This is description text',
    buttonLabel: 'Get started',
    imgStart: false,
    isVid: false,
    img: svg1,
    alt: 'me',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjThree = {
    id: 'portfolio',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Portfolio',
    headline: 'Engineering Data Management System',
    description: 'A web application developed for researchers at University of South Australia\'s Future Industries Institute (FII) conducting research on thin film coatings to store, manage & analyse test data. Functionality to upload various tests, sample metadata, export data, database search & filtering, data visualization and more. \nCreated with Django framework.',
    buttonLabel: 'Get started',
    imgStart: false,
    isVid: true,
    img: vid1,
    alt: 'me',
    dark: true,
    primary: true,
    darkText: false
}
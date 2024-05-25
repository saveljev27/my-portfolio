import carhire from './../img/projects/carhire.png';
import gptprompt from './../img/projects/gptprompt.png';
import tshirts from './../img/projects/tshirts.png';

export const projects = [
  {
    id: 0,
    title: 'GPT Prompts NextJS',
    img: gptprompt,
    imgBig: gptprompt,
    skills: 'React, Next.js, NextAuth, MongoDB, Tailwind',
    desc: 'This project was made to create your own prompts for GPT chat. The project is made using React, Next.js and MongoDB to store the data. The user can sign up using a Google account. Each authorized user has a profile where they can create, update, or delete their own prompt. Unauthorized users can also view the prompts and visit other profiles.',
    github: 'https://github.com/saveljev27/gpt-prompts-nextjs',
    vercel: 'https://gpt-prompts-nextjs.vercel.app/',
  },
  {
    id: 1,
    title: 'Car Hire NextJS',
    img: carhire,
    imgBig: carhire,
    skills:
      'React, Next.js, NextAuth, Redux Toolkit, MongoDB, TypeScript, Tailwind',
    desc: 'This project is about car hire. The project uses React, Next.js, Redux, Typescript, Tailwind, and MongoDB to store the data. The user can sign up using a Google account. Authorized users or guests can book the chosen car or view information about it. The order page has information about the vehicle, contact information, and inputs for booking dates. The amount of booking depends on the chosen dates and car. Sign-up users can change their contact information and look up order history.',
    github: 'https://github.com/saveljev27/car-hire-nextjs/',
    vercel: 'https://car-rent-next-js-xi.vercel.app/',
  },
  {
    id: 2,
    title: 'T-Shirt Shop ReactJS',
    img: tshirts,
    imgBig: tshirts,
    skills: 'React, Redux Toolkit, Mockapi, TypeScript, SASS',
    desc: 'This is an e-commerce project. The project uses React, Redux Toolkit, Typescript, SASS, and Mockapi to get the data. The cart page has information about the added products. Each product has its own personal page. In this project, the Redux Toolkit is implemented: search, sorting, adding products to the cart, and also a request to get the data.',
    github: 'https://github.com/saveljev27/thirts-shop-reactjs',
    vercel: 'https://react-tshirts-project.vercel.app/',
  },
];

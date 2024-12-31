# 🎉 Culrav-Avishkar 2k24 Official Website


![Screenshot (500)](https://github.com/user-attachments/assets/b85c68c8-5981-41e2-ba80-7c16f8cf0950)


Welcome to the Official Culrav-Avishkar 2k24 Website Repository ! This project was built as part of the annual techno-cultural fest of our institute, combining cutting-edge web technologies and teamwork to deliver a seamless user experience.

## Intro
The Website starts off with a sleek animated video asset that was made provided by the MHM Team.
![Screenshot (501)](https://github.com/user-attachments/assets/5173c7a1-34ab-4c5f-9dfb-9165af8fe93d)

## Sneak peak into different Sections of the website :

## We had a sleek gallery section on the home page to show past culrav-avishkar memories
![Screenshot (516)](https://github.com/user-attachments/assets/f09874d6-7493-4de8-be85-8a030fb5303e)

## Events Page , with a captivating and engaging design
![Screenshot (509)](https://github.com/user-attachments/assets/e47adfee-d633-4f16-8183-9b632cbdf782)



## Profile Dashboard
![Screenshot (507)](https://github.com/user-attachments/assets/4641d2e2-f598-4e6b-a749-f6387a7c2f66)


## Create Team Page
![Screenshot (508)](https://github.com/user-attachments/assets/cc396382-3667-4653-a597-89e762bbf91e)



## Schedule Section
![Screenshot (514)](https://github.com/user-attachments/assets/c10b6afd-9660-4d99-8b40-0390bd1ada25)

![Screenshot (515)](https://github.com/user-attachments/assets/15a68e68-9e4f-4d74-9d58-29ff02a8ee89)


## A vibrant banner section showcasing the logos of both the Cultural and Technical fest !

![Screenshot (513)](https://github.com/user-attachments/assets/bd5e75f8-92e4-4996-9666-f47e7106c7c9)


## Schedule Page 
![Screenshot (518)](https://github.com/user-attachments/assets/88548308-7278-4cc7-9a2a-1615adbd68f9)



## Footer 


![Screenshot (517)](https://github.com/user-attachments/assets/be09e1bd-a09a-4cd7-a9c0-30249b1f69b8)



## Code Frequency Graph
![Code frequency](https://github.com/user-attachments/assets/2b903905-4848-40c7-84e4-9ffe5cca3d2d)

## Commits over time
As developers , it is always about getting your PR approved and merged into the main branch right ?. That's a contribution !
So , this graph shows the amount of commits that were merged into main branch of the repository throughout over time.

![Commits over time](https://github.com/user-attachments/assets/e9917c68-c005-4613-9ff1-228149b1f8e6)


## Forks 
![Screenshot 2024-12-31 170416](https://github.com/user-attachments/assets/9f9ecaee-8cfd-454e-b3f9-90cb7bd9c9aa)

## Google Search Console Results
The Google search analytics clearly showcased our website's exceptional performance, climbing to the top in terms of user engagement and widespread publicity.

![Screenshot 2024-12-30 232652](https://github.com/user-attachments/assets/3a4ad26f-d8fb-4127-b5e5-c878534ce8e9)

## Team
Introducing you to the Incredible Web Team behind the success. It would not have been possible without them !

![image (4)](https://github.com/user-attachments/assets/b5bf4bab-6aca-43ad-8586-8b42c57819b2)


## Technologies Used

## React JS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s)

## Express JS
![Logo](https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png)

## Redux Toolkit
![Logo](https://redux-toolkit.js.org/img/redux-logo-landscape.png)

## Tailwind CSS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s)

## GSAP 
![Logo](https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C2400%2C1260&w=10800&h=1260)

## Aceternity UI
![Logo](https://ui.aceternity.com/logo-dark.png)

## Framer Motion
![Logo](https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png)

## Digital Ocean , for deployment
![Logo](https://i.pinimg.com/736x/45/3f/0b/453f0bffa251761053221f19f8d2fa7c.jpg)



## Run Locally

Clone the project

```bash
git clone https://github.com/IAMAmanRaj/culrav-avishkar-2k24.git
```

Go to the project directory

```bash
cd culrav-avishkar-2k24
```

Install dependencies for both frontend and backend :

```bash
cd server
npm install
cd ..
cd client
npm install

```

Start the backend server:

```bash
cd server
npm start
```
Start the frontend development server:

```bash
cd client
npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file inside root folder

`MONGO`

`JWT_SECRET`

`ENCRYPTION_KEY`

`ENCRYPTION_IV`

`EMAIL`

`PASSCODE`

`baseURL`

you need to add the following environment variables to your .env file inside client folder

`VITE_UPLOAD_PRESET`

`VITE_CLOUD_NAME`

`VITE_API_URL`

`VITE_BASE_URL`





## Vite Configuration
### The vite.config.js file has to be configured according to the proxy API requests to the backend server

```bash
import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```
## Feedback

If you have any feedback, please reach out to me at imamanraj87@gmail.com


## Related

Check out my other Projects

[Projects Section](https://github.com/IAMAmanRaj?tab=repositories)


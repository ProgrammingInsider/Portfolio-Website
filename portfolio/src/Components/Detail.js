import React from 'react'
import Slider from 'react-slick';
import { IoCloseSharp } from "react-icons/io5";

const images = [
    'https://res.cloudinary.com/dahgxnpog/image/upload/v1723153783/homepage_zlsem9.png',
    'https://res.cloudinary.com/dahgxnpog/image/upload/v1723153779/detailpage_vog6xd.png',
    'https://res.cloudinary.com/dahgxnpog/image/upload/v1723153785/profilepage_k6nucy.png',
    'https://res.cloudinary.com/dahgxnpog/image/upload/v1723153778/cartpage_oidoof.png'
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true
};

const Detail = ({viewDetail}) => {
    return <>
        <div className='viewDetail'>
            <div className='detailHeader'>
                <IoCloseSharp className='closeDetail' onClick={()=>viewDetail(false)}/>
            </div>
            <div className='projectDetailContainer'>
                <h1 className='projectName'>PrimeMarket: A Fullstack MERN E-commerce Application</h1>

                <div className='lists'>
                    <h2 className='listGeneralName'>Description</h2>
                    <p>
                    PrimeMarket is a comprehensive e-commerce platform designed and developed over a span of more than two months. It is built using the MERN stack (MongoDB, Express, React, Node.js) and aims to provide a user-friendly online shopping experience with a focus on functionality and responsiveness.
                    </p>
                </div>

                <div className='lists'>
                <h2 className='listGeneralName'>Technologies Used</h2>
                <div className='list'>
                    <p><b>Frontend: </b>React (with Vite), React Hook Form, Axios, React Router DOM, Context API, React Lazy, CSS Modules</p>
                </div>
                <div className='list'>
                    <p><b>Backend: </b>Node.js, Express.js, MongoDB Atlas, Express Validator, JWT for authentication</p>
                </div>
                <div className='list'>
                    <p><b>Database: </b>MongoDB Atlas</p>
                </div>
                <div className='list'>
                    <p><b>Testing: </b>Vitest, Cypress, Jest, Supertest</p>
                </div>
                <div className='list'>
                    <p><b>Deployment: </b>Docker, Docker Compose, Cloudinary for image storage, Heroku for backend deployment, Vercel for frontend deployment</p>
                </div>
                </div>

                <div className='lists'>
                        <h2 className='listGeneralName'>Screenshots</h2>
                        <div className='screenshotsContainer'>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className='slide'>
                                        <img src={image} alt={`Screenshot ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                </div>

                <div className='lists'>
                <h2 className='listGeneralName'>Key Features</h2>
                <div className='list'>
                    <p><b>User Authentication: </b>Secure login and signup functionality with JWT.</p>
                </div>
                <div className='list'>
                    <p><b>Product Filtering and Sorting: </b>Filter products by category, sub-category, rating, price range, and sort by various criteria.</p>
                </div>
                <div className='list'>
                    <p><b>Shopping Cart: </b>Add, remove, increase, and decrease item quantity with automatic subtotal and total calculation (excluding checkout).</p>
                </div>
                <div className='list'>
                    <p><b>Responsive Design: </b>Fully responsive design with support for dark and light themes.</p>
                </div>
                <div className='list'>
                    <p><b>Role-Based Access Control: </b>Different functionalities available based on user roles (e.g., admin vs. regular user).</p>
                </div>
                <div className='list'>
                    <p><b>Rating and Comment System: </b>Users can rate and comment on products, with display of user names and profile pictures.</p>
                </div>
                <div className='list'>
                    <p><b>Profile Management: </b>Editable user profiles with role-based access to edit buttons.</p>
                </div>
                <div className='list'>
                    <p><b>Data Validation: </b>User inputs validated using Zod with React Hook Form.</p>
                </div>
                <div className='list'>
                    <p><b>Error Handling: </b>Custom dialog boxes for warnings, errors, and success messages.</p>
                </div>
                <div className='list'>
                    <p><b>Security: </b>Enhanced security measures including Helmet, XSS protection, and CORS configuration.</p>
                </div>
                <div className='list'>
                    <p><b>Cloudinary Integration: </b>:Store and manage product images and user profile pictures using Cloudinary.</p>
                </div>


                </div>

            <div className='lists'>
                <h2 className='listGeneralName'>Challenges and Solutions</h2>
                <div className='list'>
                    <p><b>Ensuring Atomic Consistency: </b>Managed atomic consistency during product uploads, updates, and deletions using MongoDB sessions to handle multiple collections.</p>
                </div>
                <div className='list'>
                    <p><b>Project Dedication: </b>Required significant dedication and focus, overcoming isolation to invest energy in developing and refining the application.</p>
                </div>
                <div className='list'>
                    <p><b>Security Implementation: </b>Implemented robust security features like HTTP-only cookies for tokens, specific origin and credentials for CORS, and whitelisted domains to prevent SSRF attacks.</p>
                </div>
            </div>

            <div className='lists'>
                <h2 className='listGeneralName'>Frontend Details</h2>
                <p className='listDesc'>
                The frontend is built using React with Vite for fast setup and development. Key technologies and practices include:
                </p>

                <div className='list'>
                    <p><b>React Hook Form and Zod: </b>For form handling and validation.</p>
                </div>
                <div className='list'>
                    <p><b>React Router DOM: </b>For smooth page transitions.</p>
                </div>
                <div className='list'>
                    <p><b>Context API and Reducer: </b>For state management.</p>
                </div>
                <div className='list'>
                    <p><b>React Lazy, Memo, and useCallback: </b>For performance optimization.</p>
                </div>
                <div className='list'>
                    <p><b>CSS Modules: </b>For scoped and maintainable styling.</p>
                </div>
                <div className='list'>
                    <p><b>Axios: </b>For API communication.</p>
                </div>
                <div className='list'>
                    <p><b>Responsive Design: </b>Ensured responsiveness across various devices and screen sizes.</p>
                </div>
            </div>

            
            <div className='lists'>
                <h2 className='listGeneralName'>Backend Details</h2>
                <p className='listDesc'>
                The backend is developed using Node.js and Express.js. Key functionalities include:
                </p>

                <div className='list'>
                    <p><b>Express Validator: </b>For sanitizing user inputs.</p>
                </div>
                <div className='list'>
                    <p><b>Modular Code Structure: </b>Separated controllers, routes, config, middleware, and utilities into small, manageable files.</p>
                </div>
                <div className='list'>
                    <p><b>JWT Authentication: </b>Implemented access and refresh tokens stored as HTTP-only cookies.</p>
                </div>
                <div className='list'>
                    <p><b>Security Enhancements: </b>Used Helmet, XSS protection, and CORS with specific configurations.</p>
                </div>
                <div className='list'>
                    <p><b>Error Handling: </b>Centralized error handling with meaningful responses.</p>
                </div>
                <div className='list'>
                    <p><b>Cloudinary Integration: </b>Managed image uploads and storage with Cloudinary.</p>
                </div>
                <div className='list'>
                    <p><b>Unit and Integration Testing: </b>Used Jest and Supertest for thorough testing.</p>
                </div>
            </div>

            <div className='lists'>
                <h2 className='listGeneralName'>Testing and Deployment</h2>

                <div className='list'>
                    <p><b>Unit and Integration Tests: </b>Achieved over 92% test coverage using Vitest for frontend, and Jest for backend testing.</p>
                </div>
                <div className='list'>
                    <p><b>End-to-End Testing: </b>Utilized Cypress for comprehensive E2E testing, including intercepts for consistent results.</p>
                </div>
                <div className='list'>
                    <p><b>Deployment: </b>Deployed the backend on Heroku and the frontend on Vercel. Utilized MongoDB Atlas for database management and Cloudinary for image storage.</p>
                </div>
                <div className='list'>
                    <p><b>Containerization: </b>Dockerized and containerized the app for easy deployment and scalability.</p>
                </div>
            </div>

            <div className='lists'>
                <h2 className='listGeneralName'>Architectural Design</h2>
                <p className='listDesc'>
                The architecture follows a service-oriented approach with clear separation between the frontend and backend:
                </p>

                <div className='list'>
                    <p><b>Frontend: </b>React application served by Vercel.</p>
                </div>
                <div className='list'>
                    <p><b>Backend: </b>Node.js and Express application served by Heroku.</p>
                </div>
                <div className='list'>
                    <p><b>Database: </b>MongoDB Atlas for database storage.</p>
                </div>
                <div className='list'>
                    <p><b>Media Storage: </b>Cloudinary for storing and managing images.</p>
                </div>
                <div className='list'>
                    <p><b>APIs: </b>Frontend communicates with backend services via RESTful APIs.</p>
                </div>
            </div>

            </div>
        </div>
    </>
}

export default Detail
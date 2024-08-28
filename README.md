# Bistro Boss Restaurant Client

GitHub Client Repository Link: https://github.com/Praneshchow/Bistro-restaurant-server

#### Used Technology:
Frontend: React, React Router, Tailwind CSS, DaisyUI, TanStack Query, Firebase, sweetalert2, React Icon, Axios, Stripe.

Backend: Express.js, Node.js, MongoDB.

## Create and Setup project:

### Setup (React router)

create react template: `npm create vite@latest name-of-your-project -- --template react`

Then go to the directory: cd <your new project directory>

npm install: `npm install react-router-dom localforage match-sorter sort-by`

#### Run in React locally: `npm run dev` 

<hr>

## Dependencies Install: 

Awesome react components: https://github.com/brillout/awesome-react-components

React responsive Banner (Awesome react): `npm i react-responsive-carousel`

Slides per view (Awesome react): `npm install swiper`

Rating icons (Awesome react): `npm i @smastrom/react-rating`

React-icons: `npm install react-icons --save`

React-helmet-async for dynamic title: `npm i react-helmet-async`

React-parallax: `npm i react-parallax`    [https://www.npmjs.com/package/react-parallax]

React-tabtab: `npm install --save react-tabs`    [https://github.com/reactjs/react-tabs]

React Simple Captcha:  `npm i react-simple-captcha`   [https://www.npmjs.com/package/react-simple-captcha]

React Hook Form (form related metarials): `npm install react-hook-form`   [https://www.react-hook-form.com/get-started]

Sweet Alert: `npm install sweetalert2`   [https://sweetalert2.github.io/#download]

React Icons: `npm install react-icons --save`     [https://react-icons.github.io/react-icons/]

Tanstack Query: `npm i @tanstack/react-query`

Axios:  `npm install axios`

#### Stripe: 

Install: `npm install --save @stripe/react-stripe-js @stripe/stripe-js`

Stripe used for payment system. From [stripe github](https://github.com/stripe/react-stripe-js), I used the hooks `0-card-minimal` (Read the document of stripe 0-card-minimal). 

In the backend part, [Custom payment flow](https://docs.stripe.com/payments/quickstart) I took the idea of backend development of stripe method. I created a new collection `payments` and it's API, where i store the payments data. 

<hr>

### Developed Features:
----------------------------

* Fetch Food items using API data. 
* Custom Hook: useMenu(), useAuth(), useAxiosSecure(), useCart(). 
    * useMenu(): 
    * useAuth(): For authentication.
    * useAxiosSecure(): 
    * useCart(): 
* Tab design (category based data load in order section). 
* Authentication System (Login and Sign In using Firebase). 
* Captcha check before login. 
* Food Cart system (listing of menu which user selected). 
* Private route (user) and Admin route (admin) are individual private routes for security service. 
* User Dashboard.
    * user can see the cart item. 
    * user can pay the payment of cart items. 
* Admin Dashboard.
    * Admin can see the users and also can make user to new admin.
* Admin and user access problem fixing using `loading` state. For fixing account login error, I used loading for completing the checking process. This one is very challenging to find out the error.  
* Used Axios for api data access. 
* JWT token for autorization (locally stored the token).
* Payment system using `strip`. 
* Payment information verify and changes in the user account.  


### Difficulties: 
* When deploying in the netlify. It failed to deploy because the dependencies are not working. 




# E-shop (React project)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a website for a fictional e-commerce shop built using React and CSS modules. The store features five pages and one 404 "Page Not Found" page created with JSX. The project has products fetched by an API, a working cart, and a contact form with react-hook-form and Yup validation. the project has a layout component that contains the header and footer, the project uses react routes to navigate between pages.

### Pages

#### home page

The home page consist of a look ahead search bar created with vanilla JS and a section where each product is displayed, each product is a link to the product specific page.

#### Product specific page

The product-specific page is dynamically built using the ID of the product to fetch the specified product from the API. The specific page contains the image of the product, as well as the title, description, rating, a price component which displays the price and discount if there is one, an "Add to Cart" button component which adds the product to the cart if the user clicks it. If the item is already in the cart, then the quantity of the product will increase. Additionally, there is a review section which contains the reviews if there are any.

#### Cart page

The cart page contains each product and the quantity of the products added by the user. Additionally, the cart page contains a component for incrementing and decrementing the quantity of the products. The page also includes a checkout button, which will take the user to the checkout success page. I used a state management tool called Zustand to build the functionality of the cart.

#### Checkout success page

This is a small page with a confirmation message to the user that the order was successful. The page also contains a small CSS animation.

#### Contact page

The contact page has two sections. The first is a small information section consisting of a heading and a paragraph. The second section contains the contact form, which uses React Hook Form and Yup to validate the input. If a form is successfully submitted, the object containing the user input is logged in the console.

#### 404 page

The 404 page is a page containing only a message that the page doesn't exist. It can be accessed if a user goes to a non existing page that doesn't have a valid route.

## Design

- Colors: The primary color is dark blue: rgb(57, 71, 89), and white. Secondary colors include an orange color for the logo and button color: rgb(255, 165, 1).
- Grid: There is a single-column grid for mobile and a responsive 2-4 column grid for desktop and tablets.

## Built with

- React
- HTML
- CSS
- JS

## Running

- live site at: https://ract-e-shop.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

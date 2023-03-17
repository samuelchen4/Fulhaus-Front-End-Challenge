# Fulhaus-Front-End-Challenge

Frontend for an item display page and checkout cart. Can add and remove items from shopping cart. The total is calculated by the item prices and quantities of each item.

Built responsively for Desktop and Mobile view.

Built with:

- **_React_**
- **_Redux_** to manage state
- **_Axios_** to preform HTTP requests
- **_Tailwind_** for styling

## How to Start

### Steps:

1. Clone git repo
2. type in terminal **_npm install_** to download all dependencies
3. type in terminal **_npm start_** to start application

## Redux State Management

Created two pieces of global state for this MVP:

- productList
- cartList

Get request for product items are asynchronously called with the productList is empty and the main page is loaded.
The cart list is added so users can interact with the cart list on any component of the application.

## Responsive Design

Dynamically changes from a mobile view to a desktop view at the large breakpoint (1024px). Design with a mobile first approach

### Desktop View

![Decktop View](./public/desktop_view.jpg 'Desktop View')

### Mobile View

![Mobile View](./public/mobile_view.jpg 'Mobile View')

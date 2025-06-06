# Project Name: Flatiron Games

## Description
This project is a gaming website that allows users to browse and search for games, view platform-specific games, and explore various gaming-related content. The website is built using React and utilizes the RAWG Video Games Database API to fetch game data and provide an immersive gaming experience.

## Components and Functionality

### NavBar Component
The NavBar component provides navigation links to different sections of the website. It allows users to switch between sections such as home, search, and platform-specific games. Clicking on a navigation link triggers the `onNavLinkClick` function, which fetches games based on the selected platform and updates the `currentPlatformGames` state.

### Header Component
The Header component displays a visually appealing header section on the website. It serves as a visual introduction to the website and may include elements such as a title, slogan, or background image.

### Home Component
The Home component is responsible for displaying a collection of games on the home page. It receives the `games` state as a prop and showcases a selection of games to the user. This component can be customized to display featured games, recently released games, or any other desired game selection.

### SearchBar Component
The SearchBar component allows users to search for specific games by entering a search term. When the user types a search query and submits it, the `handleSearch` function is called. It makes a request to the RAWG API with the search term and updates the `searchedGames` state with the search results.

### SearchResults Component
The SearchResults component displays the results of a game search. It receives the `searchedGames` state as a prop and renders a list of games based on the search query. Users can view details about a particular game by clicking on the game's entry in the search results.

### Platform Component
The Platform component displays games specific to a selected platform. It receives the `currentPlatformGames` and `currentPlatform` states as props and renders a list of games for the chosen platform. The `onNavLinkClick` function triggers a fetch request to the RAWG API, retrieving games based on the selected platform ID and updating the `currentPlatformGames` state.

### App Component
The App component serves as the main entry point for the website. It manages the application's state, including `games`, `searchedGames`, `currentPlatformGames`, and `currentPlatform`. The `useEffect` hook is used to fetch the initial list of games from the RAWG API. The `handleSearch` function allows users to search for games, while the `onNavLinkClick` function fetches games for a specific platform. The component structure and routing are defined using the `Routes` and `Route` components from the `react-router-dom` library.

## Installation and Setup
To run the gaming website locally or deploy it on a server, follow these steps:

1. Clone the project repository from [GitHub](https://github.com/your-repo-url).
2. Install the necessary dependencies by running `npm install`.
3. Obtain an API key from the RAWG Video Games Database API and replace `APIKey` in the code with your actual API key.
4. Start the development server by running `npm start`.
5. Access the website by opening it in a web browser using the provided URL.
6. Have Fun Searching!

# 🎞️ Entertainment Web App

> Discover, search, and bookmark movies and TV shows. A mobile-friendly and user-centric entertainment platform.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Project Overview

**Entertainment Web App** is a modern web application where users can discover, search, and bookmark movies and TV series. It was developed with a **mobile-first design approach**, and the interface is kept clean and intuitive to enhance user experience.

## 🧭 Application Flow

🔹 The app consists of four main sections, each designed to display a specific type of content:

**Homepage**: Displays trending movies and recommended titles. It acts as the landing page.

![image](https://github.com/user-attachments/assets/36a88766-ba18-49e5-9d40-49b36b079764)

**Movies**: Shows only content from the *Movies* category.

![image](https://github.com/user-attachments/assets/2ec71a19-a1a3-4885-8c62-761f1d46e2df)

**TV Series**: Lists content specifically from the *TV Series* category.

![image](https://github.com/user-attachments/assets/9b0e82c8-094d-4f71-8e0d-777be9cfa013)

**Bookmarked**: Displays the list of items the user has marked as favorites.

![image](https://github.com/user-attachments/assets/65840f8a-1816-4d0a-8e15-95dbda227b4a)

## 🛠️ Technologies Used

🔹 **React**: Utilized a component-based architecture for a modular and maintainable structure. The UI was rendered dynamically.

🔹 **JavaScript (ES6+)**: Used modern JavaScript syntax to implement logic and interactions.

🔹 **HTML5 & CSS3**: Semantic HTML ensured structural integrity, while CSS was used to create a responsive and mobile-first design.

🔹 **Hash-based Routing**: Implemented navigation using URL fragments (after the `#` symbol) to enable a Single Page Application (SPA) experience.

🔹 **LocalStorage**: Used to store the user's bookmarked movies and series persistently in the browser. Data remains intact even after refreshing the page or closing the browser.

🔹 **Helper Function**: A custom routing logic (`getPage`) is defined inside the `helper.jsx` file to determine which page component to render based on the current URL. This approach eliminates the need for external routing libraries like React Router and enables a lightweight hash-based navigation system.

🔹 **Filtering and Listing Data**: Methods like `filter`, `find`, `includes`, and `map` were used to dynamically display content based on user search input.

🔹 **Mobile-First Design**: The design process prioritized mobile devices first, ensuring each component scales properly to larger screens as well.

🔹 **User Notifications (Toast)**: To improve user feedback, the `react-hot-toast` library was used to show `toast.success` messages. For example, when a movie or TV show is added to or removed from bookmarks, a toast appears at the top of the screen confirming the action. This subtle feedback enhances the overall experience.

## 🧠 State Management

🔹 The application uses both global and local state management, implemented with React’s `useContext` and `useState` hooks.

> 💡 **State Management**
> 
> 🔹 *Global State (`useContext`):*  
> Used `useContext` to manage app-wide data access, such as the bookmark list. This prevents prop drilling and makes the state easily accessible across components.
> 
> 🔹 *Local State (`useState`):*  
> Used `useState` for component-specific states like search input, allowing components to manage their own local behavior independently.

## 🌐 Live Demo

You can view the live application via the following link:

🔗 [https://entertainment-web-app-liart.vercel.app](https://entertainment-web-app-liart.vercel.app)

## 🗂️ Project Structure

```bash
📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 main.css           # Defines the core styles
 ┃   ┗ 📄 reset.css          # Resets browser default styles
 ┣ 📂 components
 ┃ ┣ 📄 BookmarkedMovies.jsx # Displays user’s bookmarked items
 ┃ ┣ 📄 Header.jsx           # Header and navigation component
 ┃ ┣ 📄 HomePage.jsx         # Homepage component (trending content)
 ┃ ┣ 📄 Movies.jsx           # Displays movies only
 ┃ ┣ 📄 Recommended.jsx      # Displays recommended content
 ┃ ┗ 📄 TvSeries.jsx         # Displays TV series only
 ┣ 📄 App.jsx                # Main application layout and routing
 ┣ 📄 Svg.jsx                # Handles all SVG icons
 ┣ 📄 helper.jsx             # Contains a helper function for route resolution
 ┣ 📄 main.jsx               # React DOM entry point

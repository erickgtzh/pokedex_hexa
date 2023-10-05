
## Pokédex Hexalud Exam README 

### Overview
Mobile application designed to serve as a Pokédex, built on the React Native framework. The app leverages React Navigation for routing and navigation. It incorporates a global state handler to manage the application's state, ensuring seamless user experiences. Data persistence mechanisms using Context are in place to save Pokémon and user profile information, even after the application is closed. The app's components have been meticulously designed following the Atomic Design methodology, allowing for scalability and maintainability. 


---

### Table of Contents
1. [Installation](#installation)
2. [File Structure](#file-structure)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing](#contributing)

---

### Installation

To get the project up and running on your local machine, please follow these instructions:

```bash
git clone [<repository_url>](https://github.com/erickgtzh/pokedex_hexa)
cd pokedex_hexa
npm install
npm run android // (if you want to run it on android)
npm run ios // (if you want to run it on ios)
```

---

### File Structure

Below is the significant file structure of the project:

```
.
├── App.tsx
└── src
    ├── api
    ├── assets
    ├── components
    ├── config
    ├── context
    ├── models
    ├── navigation
    ├── pages
    ├── services
    └── utils
```

#### Noteworthy Files:

- **App.tsx**: Entry point for the application.
- **src/context**: Holds the application state.
- **src/navigation**: Navigation logic and components.

---

### Usage

To run the application:

```bash
npm run android // (if you want to run it on android)
npm run ios // (if you want to run it on ios)
```

This will open a new browser window with your running app.

---

### Features

- **Pokédex Functionality**: View, add, and remove Pokémon.
- **User Profile**: Edit personal information.
- **Pokémon Count**: A counter showing the total number of Pokémon in the Pokédex.

---

### Contributing

For any contributions, please create a new branch and submit a Pull Request.

---

### Proactive Suggestions

1. **Automated Testing**: If not already included, consider adding unit tests and UI tests to ensure the app's robustness.
2. **Dockerization**: To make the setup easier and consistent across all platforms, consider adding a `Dockerfile` and `docker-compose.yml`.
3. **Continuous Integration**: Implement CI/CD for automated build and deployment.

---

### Additional Notes

The README is concise, focusing only on the essentials. For a more detailed explanation of each component and utility, it's advised to document them within their respective directories and files.

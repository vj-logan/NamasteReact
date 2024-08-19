# NamasteReact

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithms - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential bundling - support on older browsers
- Diagnostics
- Error Handling
- Tree Shaking -  remove unused code for you
- Different dev and prod bundles

# App structure

// Header
//  - Logo
//  - Nav-items
// Body
//  -Search
//  - RestaurantContainer
//      - Res Cards
// Footer

# Redux
- install @reduxjs/toolkit  and react-redux
- Build our store
- connect our store to the App
- slice (cartSlice)
- dispatch (action)
- selector

# Types of Testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing in our App

- Install React Testing Library
- Install Jest
- Install babel dependencies to use Jest
- Configure Babel
- Configure Parcel to disable default babel transpilation in Parcel
- Jest Configuration (npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside our babel.config.js file
- Install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
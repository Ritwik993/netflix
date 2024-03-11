# Netflix


- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Sign In Form
- Sign Up Form
- Form Validation 
- useRef Hook
- firebase set up
- deploying to production 
- Authentication 
- Redux store to store users on successful sign up 
- Redux store to remove users on successful sign out 
- Create Header for Browse Page
-  onAuthStateChanged API helps to prevent the user from getting into browse if succcessful login is not done
- unsubscribed to onAuthStateChanged callback
- TMDB as a movie database 
- Added a button for GPT Search Page


# Features
- Login/Sign Up Page
- After successful sign up redirect to Browse page

- Browse Page (after authentication)

#### Important Points
- We must keep the App.js clean so create Body.js and write only Body.js inside App.js
- We donot need App.css any more so move it to trash
- Write onAuthStateChanged in the Header component as it is present all throughout our app

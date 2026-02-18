1. What is ReactJS?
    ReactJS is a JavaScript library used to build User Interfaces (UI). It significantly decreases the code with its components, states (i.e., hooks), etc.
    Library (ReactJS)- A library is like a toolbox: you pick the specific tools  (functions) you need to perform a task within your own project's plan.
        - GSAP
        - Lenis
        - ReactJS

    FrameWork - A framework is like a house blueprint or a pre-built structure: you fill in the specific details (your code) in designated places, but the overall design and flow are already determined by the framework. 
        - NextJS
        - Angular

2. Why ReactJS is used?
    React.js is used because it is an efficient, flexible JavaScript library for building dynamic and high-performance user interfaces (UIs) for web and mobile applications. 
    
3. Creating a React App
    Open your terminal in the directory where you would like to create your application. Run this command to create a React application named my-react-app:

    npx create-react-app my-react-app

    OR, you can directly make your application without specifying a name, like this:

    npx create-react-app .

4. Then just start up the application with this command:

    npm start     and you are good to go!
 
 * rafce in any js file it create React Environment

5. JSX -
    HTML + JavaScript = JSX

6. Creating React With VITE :-
    VITE - Vite (pronounced "veet," French for "quick") is a modern frontend build tool and development server that offers a super-fast, lean development experience for web projects, leveraging native ES Modules for instant server starts and lightning-fast Hot Module Replacement (HMR). It provides out-of-the-box support for frameworks like Vue, React, and Svelte, handles TypeScript/JSX, and uses Rollup for optimized production builds, making development smoother and faster than traditional bundlers. 

    using npm create vite@latest new file will be created.

7. components , Props and JSX in React :-
    Components - Components are independent, reusable pieces of code that
     return React elements to describe what should appear on the screen. They 
     can be functional (JavaScript functions) or class-based (ES6 classes), with functional components being the modern standard. 
        Example (Functional Component):
                function Welcome(props) {
                    return <h1>Hello, {props.name}</h1>;
                }
 
    Props (Properties) - Props are like function arguments or HTML attributes. 
     They are passed to components from a parent component and are used to customize the child component's appearance or behavior. Props are read-only, meaning a component cannot change its own props; it must use state for interactivity. 
        Passing Props:
            function App() {
                // The 'name' attribute is passed as a prop
                return <Welcome name="Sara" />;
            }
    Accessing Props: In the Welcome component example above, props.name is used
     to access the passed value "Sara". Modern React often uses destructuring for cleaner access:
        function Welcome({ name }) { // Destructuring the props object
            return <h1>Hello, {name}</h1>;
        }
 
    JSX (JavaScript XML) - JSX is a syntax extension for JavaScript that looks 
     like HTML. It makes writing the UI structure more intuitive by allowing you to write HTML-like tags directly within your JavaScript code. Behind the scenes, Babel compiles JSX code into React.createElement() calls, which return plain JavaScript objects called "React elements" that React uses to build the DOM. 
        Example (Using JSX):
            const element = <h1 className="greeting">Hello, world!</h1>;
                This JSX is compiled into: javascript
            const element = React.createElement(
                'h1',
                {className: 'greeting'},
                'Hello, world!'
            );
    Key JSX points:
        Capitalization: Components must start with a capital letter (e.g., <Welcome />) to differentiate them from standard HTML tags (e.g., <div>).
        Embedding Expressions: You can embed any JavaScript expression within JSX by using curly braces {} (e.g., {props.name}).
        Attributes: Standard HTML attributes like class become className in JSX, and for becomes htmlFor.

    
8. Module CSS :- 
    CSS Modules in React provide locally scoped styles, which prevent naming conflicts and make your styles more maintainable in large applications. They are supported out-of-the-box by most modern React build tools like Create React App and Vite. 

9. Tailwind CSS :-
    1. Creating Project which we already did in React .
        npm create vite@latest my-project
        cd my-project
    2. Installing Tailwind Css :-
        npm install tailwindcss @tailwindcss/vite
    
    3. Importing Tailwind Css in index.css main file :-
        @import "tailwindcss";

    4. Putting lines in vite.config.js file :-
        import tailwindcss from '@tailwindcss/vite'
                and 
        tailwindcss() - in plugins[].
    5. DONE :-
        npm run dev

10. UI Design Project 

11. Working With FUNCTIONS :-

12. Hooks and State :- In React, hooks are special functions that let you 
    "hook into" React features like state and lifecycle methods from within functional components. They were introduced in React v16.8 to enable functional components to manage data that changes over time and triggers re-renders, a capability previously exclusive to class components. 

    * The useState Hook :- 
       * Purpose: useState adds local state memory to a functional component,
            preserving data between component re-renders.
       * Usage: You import useState from the React library and call it inside
            your function component. 
       * Returns: useState returns a pair of values in an array, which is
           typically destructured:
            * The current state value (e.g., count).
            * A function to update that value (e.g., setCount).

    * Updating State: When the update function (setCount) is called with a
            new value, React re-renders the component with the new state, ensuring the UI reflects the latest data. State updates are asynchronous and do not immediately change the variable in the current render.
       * Data Types: The state doesn't have to be an object; it can hold any
            data type, including strings, numbers, booleans, arrays, or objects.

    * useEffect :- The useEffect Hook in React allows you to perform 
        side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It serves as a single API that combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount from class components. 

    * useRef :- The useRef hook in React provides a way to persist mutable 
        values across component renders without causing re-renders. It returns a mutable object with a single current property, which is initialized with the value you pass as an argument. 
            using :- const a = useRef(0);
                     a.current = a.current + 1;

    * Batch updates in React :-
        const btnclick=()=>{
            setCount(prev => (prev+1));
            setCount(prev => (prev+1));
            setCount(prev => (prev+1));
        }


13. Form Handling in React :-
    Form handling in React primarily relies on controlled components, where form data is managed by the component's state, or uncontrolled components, where data is managed by the DOM itself. 
        import React, { useState } from 'react';
        function LoginForm() {
        const [formData, setFormData] = useState({
            username: '',
            password: '',
        });
        // Handles input changes and updates state
        const handleChange = (event) => { /* ... */ };
        // Handles form submission and prevents default browser behavior
        const handleSubmit = (event) => { /* ... */ };

        return (
            <form onSubmit={handleSubmit}>
            {/* Input fields */}
            </form>
        );
    }
     
     OR 
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Submitted");
    }
    <form onSubmit={(e)=>{
        submitHandler(e);
    }}>

13. 1:- Two-Way Binding in React :- In React, two-way binding is a pattern 
        implemented manually using a combination of state and event handlers (known as controlled components), as React is designed fundamentally around a one-way data flow. This approach ensures that data changes in the UI update the component's state, and changes in the state update the UI. 

        const [title, setTitle] = useState('');
        const submitHandler = (e) => {
            e.preventDefault();
            console.log("Submitted by", title);
            setTitle('');
        };

        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
        }}

14. Using LocalStorage :- In React, you can use the browser's built-in 
        localStorage API to persist data across page refreshes and browser sessions

        * localStorage.setItem(key, value): Stores a key-value pair. The
           value must be a string.
        * localStorage.getItem(key): Retrieves the value associated with a 
            key. Returns null if the key doesn't exist.
        * localStorage.removeItem(key): Removes a specific key-value pair.
        * localStorage.clear(): Clears all data for the entire domain. 


15. API-Calls-in-React :-
    In React, API calls are used to fetch data from a server to display it dynamically. For 2026, the primary methods include the built-in Fetch API, specialized libraries like Axios, and modern data-fetching hooks. 
    1. Using the Built-in fetch() Method :-
        The fetch() method is a native JavaScript feature that does not require additional libraries. It is typically called inside the useEffect hook to run when a component mounts. 
    2. Using the Axios Library :-
        Axios is a popular promise-based HTTP client that simplifies the process by automatically parsing JSON and providing better error handling. 
        Install: npm install axios
        Syntax: It uses a cleaner syntax compared to fetch. 
    3. Modern Data Fetching (Recommended for Production) :-
        For complex applications in 2026, developers often use libraries like TanStack Query (React Query) or SWR. These handle caching, background refetching, and loading states automatically. 
        TanStack Query: Best for complex state management, caching, and synchronization.
        SWR: A lightweight library by Vercel that focuses on speed and simplicity.
        use API: A modern React feature (stable in newer versions) that allows reading values from a Promise directly inside a component. 

16. React-Router-Routing-in-React :-
        React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. 
    React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.
    * Why Use React Router DOM?
        React Router DOM helps React apps navigate between pages without reloading. It makes switching pages easy and organizes the app with clear routes. 
        * Here are some benefits of using React Router Dom :
            Enables Navigation Without Page Reloads: React Router DOM allows users to switch between different pages smoothly without refreshing the entire web page.
            
            Dynamic Routing: Dynamic routes support parameters, where the content can be customized by the input from the user.
        
            URL-Based Component Rendering: Each page in the app is linked to a specific URL. When the user accesses some given URL, the relevant component is loaded by React Router DOM, and this is easily handled and arranged for various views.
            
            Nested Routes: This allows for the definition of routes inside routes, thus complex layouts can easily be achieved.
        * Install :- npm i react-router-dom

        * Components of React Router DOM :-
            1. BrowserRouter (<BrowserRouter>) :-  declarative <Router> using the browser History API for client-side routing. BrowserRouter Enables routing in a React application by wrapping the entire app. It listens to changes in the URL and renders the correct components accordingly.
            import { BrowserRouter } from "react-router-dom";
                <BrowserRouter>
                    <App />
                </BrowserRouter>;
            ex :- sheriyan.com = /
                  sheriyan.com/courses = /courses
                  sheriyan.com/about = /about
                  
            2. HashRouter:- A declarative <Router> that stores the location in the hash portion of the URL so it is not sent to the server.
            ex :- sheriyan.com = /#/
                  sheriyan.com/courses = /#/courses
                  sheriyan.com/about = /#/about

            * Route will be all files and Routes will be Container


17. Context API in React :- The React Context API is a built-in feature that
        allows you to share data, state, and functions across your entire component tree without manually passing props down through every level (known as "prop drilling").
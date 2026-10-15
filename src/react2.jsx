// React is a JavaScript library for building user interfaces
// react uses single page applications by updating the DOM dynamically via url routing
// as apose to different templates for each  page
// React uses a virtual DOM to improve performance by only updating the parts of the DOM that have changed

// by splitting the UI into independant reusable peices
//each peice is placed inside a function or class that return JSX, these can be nested if so desired
// JSX is a syntax extension for JavaScript that looks similar to HTML

// components make up the visual layer of the application
// each component can have its own state and props
//when making compe

// components go through a lifecycle of mounting, updating and unmounting
//props are used to pass data from parent to child components


function App() {
    return (
        <>
            <Student name="John" age={20} isStudent={true} />
            <Student name="Jane" age={22} isStudent={false} />
        </>
    )
}
export default App
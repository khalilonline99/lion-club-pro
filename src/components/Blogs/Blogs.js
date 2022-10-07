import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2>Read Blogs</h2>
            <div>
            <div className='blogs'>
                <h3>Q:1 How does react work ?</h3>
                <p><big>Answer:</big> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='blogs'>
                <h3>Q:2 What is the differences between props and state?</h3>
                <p><big>Answer:</big> The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>
            <div className='blogs'>
                <h3>Q:3 What are the uses of useEffect except data load?</h3>
                <p><big>Answer:</big> What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;
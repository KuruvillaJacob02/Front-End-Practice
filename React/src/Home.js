import { useState, useEffect } from "react";
import BlogsList from './BlogsList';
const Home = () => {
    const [name , setName] = useState('Kuru')
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },  //LIST OF DATA
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    const handleClick = () => {
        setName('Jacob');
    }
    const handleClickAgain = (name) => {
        console.log("Hello "+ name);
    }
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog => blog.id !== id));
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log("Effect ran");
        console.log(name);
    },[name]);
    return (  
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{name}</p>
            <BlogsList blogs = {blogs} title = 'All Blogs' handleDelete = {handleDelete}/> 
            <BlogsList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs"/> 
            <button onClick={() => handleClickAgain('Kuru')}>Click me again</button>
        </div>
    );
}
 
export default Home;
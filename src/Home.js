import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [ispending, setispending] = useState(true);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  useEffect(() => {
   setTimeout(()=>{
    fetch("  http://localhost:8000/blogs")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
      setispending(false);
    });
   },1000);
  }, []);

  return (
    <div className="home">
      {ispending && <div>LOADING.....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
//  const handleclicked = () =>{
//   console.log("hello world");
// }
// const handleclickedagain = (name) =>{
//   console.log(`hello ${name}`);
// }

//let name = "TANMAY";
// const [name,setname] = useState('tanmay')
// const [age,setAge] = useState(25)

// const handleclicked = () =>{
//     setname("Tanmay Deshpande");
//     setAge(30);
//   }

// {blogs.map(blog => (
//   <div className="blog-preview" key={blog.id} >
//     <h2>{ blog.title }</h2>
//     <p>Written by { blog.author }</p>
//   </div>
// ))}

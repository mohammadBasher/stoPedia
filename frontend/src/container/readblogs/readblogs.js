import React from "react";
import { convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { convertToHTML } from "draft-convert";
class ReadBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(state) {
        this.setState({
            editorState: state
        });
    }
    //function to store blogs from the database to the blogs state..
    submitHandler = () => {
        fetch("http://localhost:4000/readblogs",{
            method:"GET",
            headers:{
                "Content-type":"application/json;charset=utf-8"
            }
        })
        .then(result => result.json())
        .then(result => {
            var blogs=[];
            var blog;
            for (var i = 0; i < result.length; i++) {
                blog = convertToHTML(convertFromRaw(result[i].content));
                blogs.push(blog);
              }
            this.setState({
                blogs: blogs
            })
            console.log(blogs);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        const blogs = this.state.blogs; //This variable hold the array of blogs
        return (
            <div className="App">
                <button onClick={this.submitHandler}>Show saved content</button>
                <h1>Blogs</h1>
                <button >Blogs</button> 
            </div>
        );
    }
}

export default ReadBlogs;

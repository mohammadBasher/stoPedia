import React from "react";
import { DraftailEditor } from "draftail";
import { convertFromRaw, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
class ReadBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(state) {
        this.setState({
            editorState: state
        });
    }
    submitHandler = () => {
        fetch("http://localhost:4000/readblogs",{
            method:"GET",
            headers:{
                "Content-type":"application/json;charset=utf-8"
            }
        })
        .then(result => result.json())
        .then(result =>{
            //const data = convertFromRaw(...result);
            console.log(result);
            //alert("Success");
            this.setState({
                editorState: EditorState.createWithContent(convertFromRaw(result.content))
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="App">
                <DraftailEditor
                    editorState={this.state.editorState}
                    onChange={this.changeState}
                    placeholder="Tell your story..."
                />
                <button onClick={this.submitHandler}>Show saved content</button>
            </div>
        );
    }
}

export default ReadBlogs;
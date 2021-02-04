import React from "react";
import { DraftailEditor } from "draftail";
import {  convertToRaw, EditorState } from "draft-js";
import { ItalicButton, BoldButton, UnderlineButton,UnorderedListButton,HeadlineOneButton,HeadlineTwoButton,HeadlineThreeButton,OrderedListButton } from "draft-js-buttons";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import createUndoPlugin from '@draft-js-plugins/undo';
import "./editor.css";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import Header from './../../component/header/header'
import {Redirect} from "react-router-dom"
import Login from './../login/login'
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const undoPlugin = createUndoPlugin();
// const { UndoButton, RedoButton } = undoPlugin;
const plugins = [inlineToolbarPlugin, sideToolbarPlugin,undoPlugin];
 
class Editor extends React.Component {
    constructor(props) {
        super(props);
        // now testing a change in state..... for taking input from fetch funtion
        this.state = {
            editorState: EditorState.createEmpty(),
            isAuthen : true,
            title : '',
            tags : ''
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(state) {
        this.setState({
            editorState: state
        });
    }
    handleChange = name => event =>{
        this.setState({
          [name]:event.target.value,
          isAuth:"false"
        })
    }
   
     check= ()=> {
       
        fetch("http://localhost:4000/isAuth",{
            credentials:"include",
            method:"GET",
            headers:{
                "Content-type":"application/json;charset=utf-8"
            }
            })
            .then(result => result.json())
            .then(result =>{
                if(result.username===null)
                {
                    this.setState({
                        isAuthen:false
                    })
                }
                else{
                    console.log(result.username);
                }
            })
            .catch(err => {
                console.log(err);
            })
        
        if(this.state.isAuthen === false){
           alert("You must login")  
          return (<div>
           <Redirect to="/login"/>
          </div>
          )
        }else{
            console.log("user is logged in ")
        }
     }

    submitHandler = () => {
        const data = {"content":convertToRaw(this.state.editorState.getCurrentContent()),"title":this.state.title,"tags":this.state.tags};
        console.log(data.content);
        fetch("http://localhost:4000/editor",{
            credentials:"include",
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(result =>{
            console.log(result);
            if(result.err==="true"){
                alert("Redirect user to login page");
               
            }
            else{
                alert("your data has been successfully saved ");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
       <div>
           {this.check()}
            <Header />
            <form >

                
                

                
                <div className="App-editor" >
                <br/>
                <div className="form-group">
                <input 
                type="text" 
                placeholder="Title" 
                className = "form-control input-extra"
                value={this.state.title}
                required="required"
                onChange={this.handleChange("title")}
                name="title"
                />
                </div>
                   <br/>
                <div className="form-group">
                <input 
                type="text" 
                className = "form-control input-extra"
                placeholder="Tags start with '$'" 
                value={this.state.tags}
                required="required"
                onChange={this.handleChange("tags")}
                name="tags"
                />
                </div>

                    <DraftailEditor
                        editorState={this.state.editorState}
                        onChange={this.changeState}
                        placeholder="Tell your story..."
                        plugins={plugins}
                    />
                    <InlineToolbar>
                        {
                            externalProps => (
                                <>
                                    <ItalicButton {...externalProps} />
                                    <BoldButton {...externalProps} />
                                    <UnderlineButton {...externalProps} />
                                    <UnorderedListButton {...externalProps} />
                                    <HeadlineOneButton {...externalProps} />
                                    <HeadlineTwoButton {...externalProps} />
                                    <HeadlineThreeButton {...externalProps} />
                                    <OrderedListButton {...externalProps} />
                                </>
                            )
                        }
                    </InlineToolbar>
                    <SideToolbar>
                        {
                            externalProps => (
                                <>
                                    <ItalicButton {...externalProps} />
                                    <BoldButton {...externalProps} />
                                    <UnderlineButton {...externalProps} />
                                    <UnorderedListButton {...externalProps} />
                                    <HeadlineOneButton {...externalProps} />
                                    <HeadlineTwoButton {...externalProps} />
                                    <HeadlineThreeButton {...externalProps} />
                                    <OrderedListButton {...externalProps} />
                                </>
                            )
                        }
                    </SideToolbar>
                    <div className="toolbox my-3">
                        <button className="btn btn-outline-dark" onClick={this.submitHandler}>Post</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
export default Editor;
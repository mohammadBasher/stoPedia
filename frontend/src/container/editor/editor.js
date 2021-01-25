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
        const data = {"content":convertToRaw(this.state.editorState.getCurrentContent())};
        console.log(data.content);
        fetch("http://localhost:4000/editor",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(result =>{
            alert("Success");
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
       <div>
            <Header />
            <div className="App-editor" >
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
                    {/* <UndoButton />
                    <RedoButton /> */}
                    <button className="btn btn-outline-dark" onClick={this.submitHandler}>Submit</button>
                 </div>
            </div>
        </div>
        );
    }
}
export default Editor;
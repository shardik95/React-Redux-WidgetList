import React from 'react';
import * as Constants from "../constants";
import {connect} from 'react-redux'
import * as actions from '../actions'
import {preview} from "../actions";


const Heading = ({widget,preview,headingTextChanged,headingSizeChanged})=> {
    let selectElem;
    let inputElem;
    return (
        <div>
            <div hidden={preview}>
                <h1>Heading {widget.size}</h1>
                <input onChange={()=>headingTextChanged(widget.id,inputElem.value)} type="text" ref={node=>inputElem=node}
                value={widget.text}></input>
                <select onChange={()=>headingSizeChanged(widget.id,selectElem.value)} value={widget.size} ref={node=>selectElem=node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <h3>Preview</h3>
            </div>
            {widget.size==1 && <h1>{widget.text}</h1>}
            {widget.size==2 && <h2>{widget.text}</h2>}
            {widget.size==3 && <h3>{widget.text}</h3>}
        </div>
        )

}

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged:(widgetId,newText)=> actions.headingTextChanged(dispatch,widgetId,newText),
    headingSizeChanged:(widgetId,newSize)=> actions.headingSizeChanged(dispatch,widgetId,newSize)
})



const HeadingContainer = connect(state => (
    {preview:state.preview}
), dispatchToPropsMapper)(Heading);


const Paragraph = ()=>(
    <div>
        <h1>Paragraph</h1>
        <textarea></textarea>
    </div>
)

const List = ()=>(
    <h1>List</h1>
)

const Image = () =>(
    <h1>Image</h1>
)

const Widget = ({preview,widget,dispatch}) =>{
    let selectElement;
    return(
        <li>
            <div hidden={preview}>
                {widget.id} {widget.widgetType}
                <select value={widget.widgetType} onChange={()=>{
                    dispatch({
                        type:'SELECT_WIDGET_TYPE',
                        id:widget.id,
                        widgetType:selectElement.value
                    })
                }} ref={node=> selectElement=node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                </select>

                <button onClick={()=>(
                    dispatch({type:Constants.DELETE_WIDGET,id:widget.id})
                )}>delete</button>
            </div>
                <div>
                    {widget.widgetType==='Heading' &&<HeadingContainer widget={widget} preview={preview}/>}
                    {widget.widgetType==='Paragraph' &&<Paragraph/>}
                    {widget.widgetType==='Image' &&<Image/>}
                    {widget.widgetType==='List' &&<List/>}

            </div>
        </li>
    )
}

const stateToPropsMapper = state => ({
    preview: state.preview
})

export const WidgetContainer =connect(stateToPropsMapper)(Widget);
import React from 'react';
import * as Constants from "../constants";
import {connect} from 'react-redux'


const Heading = ()=>(
    <div>
        <h1>Heading</h1>
        <select>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
        </select>
    </div>
)

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

const Widget = ({widget,dispatch}) =>{
    let selectElement;
    return(
        <li>{widget.id} {widget.widgetType}


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
            <div>
                {widget.widgetType==='Heading' &&<Heading/>}
                {widget.widgetType==='Paragraph' &&<Paragraph/>}
                {widget.widgetType==='Image' &&<Image/>}
                {widget.widgetType==='List' &&<List/>}
            </div>
        </li>
    )
}


export const WidgetContainer =connect()(Widget);
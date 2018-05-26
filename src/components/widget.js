import React from 'react';
import * as Constants from "../constants";
import {connect} from 'react-redux'

const Widget = ({widget,dispatch}) =>{
    let selectElement;
    return(
        <li>{widget.id} {widget.widgetType}


            <select onChange={()=>{
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

        </li>
    )
}


export const WidgetContainer =connect()(Widget);
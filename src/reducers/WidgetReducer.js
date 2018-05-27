

import * as Constants from "../constants";

export const widgetReducer = (state = {
                           widgets:[],preview:false},
                       action) => {

    switch (action.type){

        case 'PREVIEW':return {
            widgets:state.widgets,
            preview:!state.preview
        }

        case 'headingTextChanged':return {
            widgets:state.widgets.map(widget => {
                if (widget.id===action.id){
                    widget.text=action.text
                }
                return Object.assign({},widget);
            })
        }

        case 'headingSizeChanged':
            return {
                widgets:state.widgets.map(widget => {
                    if (widget.id===action.id){
                        widget.size=action.size
                    }
                    return Object.assign({},widget);
                })
            }

        case 'SELECT_WIDGET_TYPE':
            let newState= {
                widgets:state.widgets.filter(widget =>{
                    if(widget.id===action.id){
                        widget.widgetType=action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState));

        case Constants.SAVE:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
            return state;


        case Constants.FIND_ALL_WIDGETS:
            return {
                widgets:action.widgets
            }

        case Constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        text: 'New Widget',
                        id:state.widgets.length+1,
                        widgetType:'Paragraph',
                        size:'2'
                    }
                ]
            }

        case Constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id!==action.id
                ))
            }

        default:return state
    }

}
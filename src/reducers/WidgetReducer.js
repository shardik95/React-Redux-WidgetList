

import * as Constants from "../constants";

export const widgetReducer = (state = {
                           widgets:[]},
                       action) => {

    switch (action.type){

        case 'SELECT_WIDGET_TYPE':
            return {
                widgets:state.widgets.filter(widget =>{
                    if(widget.id===action.id){
                        widget.widgetType=action.widgetType
                    }
                    return true;
                })
            }

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
                        widgetType:'Paragraph'
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
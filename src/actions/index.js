import * as Constants from "../constants";


export const preview = (dispatch) => (
    dispatch({type:'PREVIEW'})
)

export const headingTextChanged = (dispatch,widgetid,newText)=> (
    dispatch({type:'headingTextChanged',id:widgetid,text:newText})
)


export const headingSizeChanged = (dispatch,widgetid,newSize)=> (
    dispatch({type:'headingSizeChanged',id:widgetid,size:newSize})
)


export const findAllWidgets= (dispatch) => (
    fetch("http://localhost:8080/api/widget")
        .then(response => (response.json()))
        .then(widgets => (dispatch(
            {type:'FIND_ALL_WIDGETS',
                widgets:widgets}
        )))
)

export const addWidgets = (dispatch) => (
    dispatch({type:Constants.ADD_WIDGET})
)

export const save = (dispatch) => (
    dispatch({type:Constants.SAVE})
)
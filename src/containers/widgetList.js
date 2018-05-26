import React,{Component} from "react";
import {addWidgets, findAllWidgets, save} from "../actions";
import {WidgetContainer} from "../components/widget";
import {connect} from "react-redux";

class WidgetList extends Component{

    constructor(props){
        super(props)
        this.props.findAllWidgets();
    }

    render(){
        return(
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <button onClick={this.props.save}>Save</button>
                <ul>
                    {
                        this.props.widgets.map((widget) => {
                            return <WidgetContainer widget={widget} key={widget.id}/>
                        })
                    }
                </ul>
                <button onClick={this.props.addWidget}>Add</button>
            </div>
        )
    }

}


const stateToPropsMapper = (state) => (
    {
        widgets:state.widgets
    }
)

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => findAllWidgets(dispatch),
    addWidget: () => addWidgets(dispatch),
    save: () => save(dispatch)
})

export const App = connect(stateToPropsMapper,dispatcherToPropsMapper)(WidgetList)
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInitList, getInputChangeAction, getAddItemAction,getDeleteItemAction, initListAction} from './store/actionCreator';
import TodoListUI from './todoListUI';
import axios from 'axios';


class TodoList extends Component{
constructor(props){
    super(props);
    this.state = store.getState();
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleitemDelete = this.handleitemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
    

}
    render(){
        return (
        <TodoListUI
        handleitemDelete = {this.handleitemDelete}
        handleBtnClick = {this.handleBtnClick}
        handleInputChange = {this.handleInputChange} 
        inputValue = {this.state.inputValue}
        list = {this.state.list}/>
            )

    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        console.log(action);

        
            

        }
        
     

    handleInputChange(e){
       
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action =getAddItemAction();
        store.dispatch(action);
    }
    handleitemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
        console.log(action);
    }
}



export default TodoList;

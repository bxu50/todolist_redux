import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';

const TodoListUI = (props) =>{
    return(
        <div style = {{marginTop: '10px', marginLeft: '10px'}}>    
        <Input value = {props.inputValue}
            placeholder = 'todo info' 
            style = {{width : '300px', marginRight: '10px'}}
            onChange = {props.handleInputChange}/>
        <Button onClick = {props.handleBtnClick} type="primary">Add</Button>
        <List
      size="small"
      style = {{marginTop: '10px', width: '300px'}}
      bordered
      dataSource={props.list}
      renderItem={(item,index) => (<List.Item onClick= {()=>{props.handleitemDelete(index)}}>{item}</List.Item>)}
    />
        </div>
            
    )
}

// class TodoListUI extends Component {
// render(){
//     return(
//         <div style = {{marginTop: '10px', marginLeft: '10px'}}>    
//         <Input value = {this.props.inputValue}
//             placeholder = 'todo info' 
//             style = {{width : '300px', marginRight: '10px'}}
//             onChange = {this.props.handleInputChange}/>
//         <Button onClick = {this.props.handleBtnClick} type="primary">Primary</Button>
//         <List
//       size="small"
//       style = {{marginTop: '10px', width: '300px'}}
//       bordered
//       dataSource={this.props.list}
//       renderItem={(item,index) => (<List.Item onClick= {(index)=>{this.props.handleitemDelete(index)}}>{item}</List.Item>)}
//     />
//         </div>
            
//     )
// }

// }
export default TodoListUI;
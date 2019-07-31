import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} delTodo = {this.props.delTodo} markComplete = {this.props.markComplete}></TodoItem>
        ));
  }
}

//Prop types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;

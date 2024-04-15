import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("testing addTodo", ()=>{
    test("it should add a todo to list", ()=>{
        //Assign
        const todoText = "Gå och handla";
        const theList : Todo[] = [];
        const beginningLength = theList.length;

        //Act
        addTodo(todoText, theList);
        //Assert
        expect(theList.length).toBe(beginningLength + 1);
    })
    test("it should be more than 2 letters", ()=>{
        //Assign
        const todoText = "Gå";
        const theList : Todo[] = [];
        //Act
        addTodo(todoText, theList);
        //Assert
        expect(theList.length).toBe(0);
    })
})


describe("testing changeTodo", ()=>{
    test("it should change todo", ()=>{
        //Assign
        let done:boolean = true;
        const todo : Todo = new Todo("handla", done);
       
        //Act
        changeTodo(todo);
        //Assert
        expect(todo.done).toBeFalsy;

    })
})

describe("testing removeAllToos", ()=>{
    test("it should remove todos", ()=>{
        //Assign
       const todoList : Todo [] = [new Todo("Städa", true), new Todo("Plugga", true)];
        //Act
        removeAllTodos(todoList);
        //Assert
        expect(todoList.length).toBe(0);
    });
})
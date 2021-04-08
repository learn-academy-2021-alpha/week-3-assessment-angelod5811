# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: object destructuring is extracting multiplut properties from one statement.

  Researched answer: Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.



2. What are React lifecycle methods? Provide three examples.

  Your answer: React lifecylce methods are functions that we can optionally impliemnt with our compoenents, constructor, super, componentDidMount.

  Researched answer: The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM. The render() method is required, and is the method that actually outputs the HTML to the DOM. A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()



3. What is the difference between a class and an object?

  Your answer:  A class is used to bind data as well as methods together as a single unit. Object acts like a variable of the class.

  Researched answer: Object is an instance of a class.	Class is a blueprint or template from which objects are created. Object is a real world entity such as pen, laptop, mobile, bed, keyboard, mouse, chair etc.	Class is a group of similar objects.



4. What is the difference between a HTML div and a span?

  Your answer: div is a blocklevel element span is not.

  Researched answer: A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.



5. What is a React Fragment (or <>) and why would you want to use it?

  Your answer: React fragments lets you group together child components.

  Researched answer: React fragments let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM. So basically we use React. Fragment where we would normally use a wrapper div.



6. What does it mean to create a responsive UI? What are three options for creating responsive design?

  Your answer: a responsive ui means responsive user interface. It means an interface where the user can make changes to the DOM so a user can use the program.

  Researched answer: Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. Designers size elements in relative units (%) and apply media queries, so their designs can automatically adapt to the browser space to ensure content consistency across devices.



7. What are props in React?

  Your answer: props or called properties it and is a way to pass data to a and from a component

  Researched answer:“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. parent to child.



8. What is `this` in JavaScript?

  Your answer: this keyword refers to the object it belongs to.

  Researched answer: It has different values depending on where it is used: In a method, this refers to the owner object. ... In a function, this refers to the global object. In a function, in strict mode, this is undefined .



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:

  Researched answer: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Researched answer: An anonymous function is a function that was declared without any named identifier to refer to it. 



## Looking Ahead: Terms for Next Week
- Ruby - Ruby is an interpreted, high-level, general-purpose programming language.
- Object oriented programming - Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself.
- RSpec - RSpec is a computer domain-specific language testing tool written in the programming language Ruby to test Ruby code.
- Instance variable - An instance variable is a variable which is declared in a class but outside of constructors, methods, or blocks. Instance variables are created when an object is instantiated, and are accessible to all the constructors, methods, or blocks in the class. Access modifiers can be given to the instance variable.
- Ruby blocks - Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. ... The block is passed to the each method of an array object.
- Ruby hashes - A Hash is a collection of key-value pairs

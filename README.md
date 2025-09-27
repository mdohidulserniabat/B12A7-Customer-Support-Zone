# What is JSX, and why is it used?

Answer: Jsx which stans for Javascript . it allows decelopers to write Html
directly within their Javascript code.primarily used with libraries like React
for building user interfaces. #What is the difference between State and Props?
Answer: Props are like stuff a component gets from outside — you can think of
them as inputs. The component can use them but can’t change them.

State is what the component keeps inside itself. It can change over time and
when it does, the component updates what you see.

Props = given data (can’t change) State = own data (can change) #What is the
useState hook, and how does it work?

Answer: The useState hook is a way to add state to a React function component.
Before hooks, only class components could have state, but with useState,
function components can keep track of data that changes.

When you use useState, you start by giving it an initial value. It then gives
you two things:

The current state value.

A function to update that state.

When you call the update function, React remembers the new value and
automatically re-renders the component with the updated state.

#How can you share state between components in React?

Answer: In React, state lives inside a component, so it’s private by default. To
share state between components, you usually lift the state up to their closest
common parent.

This means you move the state into a parent component, then pass the state down
as props to the child components that need it. If those children need to update
the state, you pass down a function from the parent that changes the state.

# How is event handling done in React?

Answer: In React, event handling works a bit like regular HTML, but with some
differences:

You write event handlers as functions inside your component.

Instead of lowercase event names like onclick, React uses camelCase like
onClick.

You pass the function directly, not as a string.

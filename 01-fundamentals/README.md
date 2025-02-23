# Fundamentals Notes

## Setup Information and Boilerplate

- Remove the entire src folder
- Create a React src folder from scratch to remove boilerplate
- A component in React is usually a JavaScript function - can create arrow function as well
- Component names start with Uppercase letter
- Component always needs to be closed - Either seperate opening or closing tag or self close
- A React Component function must return something

## JSX Rules

- Every Component function should always return single element - An underlined error will be displayed
- React.Fragment OR <></> - We can use this when we want to group all return values in a single element and we do not want to add an extra HTML tag like div/section/article
- Multiple divs might create issues with maintainability
- Use Camelcase to write attributes in JSX - onClick rather than on-click
- **className** is used instead of class attribute in HTML tags - browser reads it as class - Otherwise Invalid DOM Property error is shown
- Use () after return statement - Else the return keyword and the opening tag need to be in the same line to avoid empty browser display
- Components can be nested at multiple levels as long as they are self closed
- React Developer tools - Can check component structure in Components tab in Inspect browser window
- **CSS:** - Importing CSS requires file path and file extension .css
- Local assets from within the project always require a path specification
- **Local Images** stored in public folder - images on public server only require src URL
- **Inline Styles** - {} moves from JSX to JS and then another {} to pass a JavaScript object containing styles - style = {{}}
- Follow camelcase in Inline styles
- Inline styles take preference over CSS styles
- **NOTE:** Some External libraries use Inline CSS
- **NOTE:** Using JS in JSX using {} should always return a value through an expression - can't be a statement. For instance {let x = 0}
- JS Objects (Strings, numbers excluded) cannot be rendered directly in JSX unless a children object - Object is not valid as React Child

## Props

- Parameters for component functions
- Convention to name the parameters props
- Object destructuring to access props const {A, B} = someObject
  Children Prop
- All tags rendered inside a certain tag become part of it's children prop
- Children prop can only be accessed using the word children and is part of the entire prop object (will be destructured in the same object)
- **_children_** is a reserved prop provided by React

## Understand CSS Styling

- Display - flex
- Display - grid
- Position property
- Margin Auto
- Understand Div centering
- Justify content property
- Align Items property

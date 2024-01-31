1. build search filter with react
   1. Declare React states for search input values.
    Create HTML input text for entering search term and update state in onChange function.
    Add Array.filter() on list of items with search term value.
2. simple counter 
   1. Create React state to store the count value.
    Declare JS functions to incement or decrement the value through setState().
    Add HTML buttons with onClick to JSX code.
3. diplay a list in react - usint array.map()
   1. Declare list of items as JS Array.
    Access each item using Array.map()
    Return JSX code in callback function for every item.
4. build accordion in react - using display none, to display and hide the accordion
   1. Display every title of accordion with body.
    Hide every accordion body using element.display = none;
    Toggle visibility of accordion body on click of title.
5. build image slider using react
   1. Declare array of objects with id and image url.
    For pre/next functionality, we decrement/increment count of the index of active image.
    Update active image index with clicked option.
6. checklist in react - update checkbox based on event.target.checked
   1. Create React state to track checkbox value.
    Function to update checkbox value based on event.target.checked
    Add checkbox input element to JSX code with onChange function.
7. simple react login form
   1. name email password
   2. react states to store user input
   3. add form validation to compare input with correct value
   4. display welcom {name} if login successfull
8. print data from REST API
   1. Create React state to store the API response.
   2. Declare State to Component JSX code to display the API response.
   3. JS function where API call is through axios.get() or fetch().
   4. Add callback function to update the React state with API response.
   5. Add HTML button with JS function with onChange attribute
9.  Multipage navigation using react router
   1. Add “react-router-dom” npm package to package.json .
   2. Specify the path for every component.
   3. Enclose the routes with <Router> and <Switch> in App.js
10. context api in react components
    1.  Create React context using React.createContext().
    2.  Declare context object with properties and values.
    3.  Wrap App.js with <AppContext.Provider> </AppContext.Provider> with values as context object.
    4.  Access context object through components using React.useContext().
### What is react ?
1. What is React
   1. reactjs.org (documentation)
   2. react blog
2. Setting up chrome tools for react
   1. install chrome extension,
      1. click details react developel tools
      2. allow access to file url
3. Setting up firefox tools for React
   1. React Developer Tools by react
   2. bisa buka react doc, api reference dll
4. Working with visual studio code
   1. download visual studio dari website, dan install di pc teman2
   2. setting color theme
   3. setting extension
   4. go to browser, react.new
   5. ada code sandbox untuk belajar react live jika tidak ada vscode
   6. bisa juga cek codepen
   
### Intro to React Elements
1. Adding React to your project
   1. index html, add cdn react, add react dom
   ``
   <script type="text/javascript">
        ReactDOM.render(
            React.createElement(
                "h1",
                null,
                "Gettin started on react"
            ),
            document.getElementById("root")
        )
    </script>
    ``
    2. Creating React elements
       1. we used react Dom first, and use reactDom.render
       2. now we create a variable
    3. Refactoring elements usings JSX
       1. after using reactcreate element multiple time
       2. we can use jsx and create a component (explain JSX)
       3. error when use ordinary html syntax, and we use babel to fix that
    4. incorporating Babel
       1. incorporate babel to fix jsx fail syntax
    5. working with jsx syntax
       1. we can create component to called
       2. we can call javascript function inside an jsx

### React Component
1. creating a react components
   1. think components is a part of build a building
   2. component = javascript function that return jsx
   3. inside of header
   4. json/jsx must be wrap inside 1 enclosing tag. misal jika ada 2 komponent yang ingin di render maka keduanya di bungkus dulu dalam satu fungsi app
2. Adding component properties
   1. pass object called props to Header
3. Working with list
   1. list of dishes in restaurant, we create multiple list inside const
   2. using map to display list
4. Adding key to list item
   1. everychild in list should have lunique key property
   2. think key as id
   3. key help your data in sync
   4. this why important to add them
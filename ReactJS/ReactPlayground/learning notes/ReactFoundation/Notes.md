### Building blocks of a web application
There are a few things you need to consider when building modern applications. Such as:

- User Interface - how users will consume and interact with your application.
- Routing - how users navigate between different parts of your application.
- Data Fetching - where your data lives and how to get it.
- Rendering - when and where you render static or dynamic content.
- Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
- Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
- Performance - how to optimize your application for end-users.
- Scalability - how your application adapts as your team, data, and traffic grow.
- Developer Experience - your team's experience building and maintaining your application.

For each part of your application, you will need to decide whether you will build a solution yourself or use other tools, such as packages, libraries, and frameworks.

`------`
What is React?
React is a JavaScript library for building interactive user interfaces.

By user interfaces (UI), we mean the elements that users see and interact with on-screen.
By library, we mean React provides helpful functions (APIs) to build UI, but leaves it up to the developer where to use those functions in their application.

`------`
What is Next.js?
Next.js is a React framework that gives you building blocks to create web applications.

By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.
`------`
You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, and caching - all while improving the developer and end-user experience.

`------`
### Rendering user interface

To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI).
When a user visits a web page, the server returns an HTML file to the browser that may look like this:

<!-- image of HTML and DOM -->
https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-html-and-dom.png&w=1920&q=75&dpl=dpl_A8AJ5FwmLMU94D4JXDc9U5wQRc6m

The browser then reads the HTML and constructs the Document Object Model (DOM).
`-----`
What is the DOM?
The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

`-----`
You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

`dom introduction`
https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction

`view DOM in chrome`
https://developer.chrome.com/docs/devtools/dom/

`view DOM in firefox`
https://developer.mozilla.org/docs/Tools/Debugger/How_to/Highlight_and_inspect_DOM_nodes


### 3. Updating UI with javascript

HTML vs. the DOM
HTML represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.
Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an `<h1>` element with some text:

Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an `<h1>` element with some text:

With this approach, developers spend a lot of time writing instructions to tell the computer how it should do things. But wouldn't it be nice to describe what you want to show and let the computer figure out how to update the DOM?

---

Imperative vs. declarative programming
The code above is a good example of imperative programming. You're writing the steps for how the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare what they want to show (in this case, an h1 tag with some text).

In other words, imperative programming is like giving a chef step-by-step instructions on how to make a pizza. Declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza. 🍕

---
React is a popular declarative library that you can use build user interfaces.

---
React: A declarative UI library
As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.

---
Getting Started with react

react is the core React library.
react-dom provides DOM-specific methods that enable you to use React with the DOM.


You can start to see how using React enables you to cut down a lot of repetitive code.

after:
```
<script type="text/jsx">
  const domNode = document.getElementById("app")
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

before:
```
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

### Essential JavaScript for React
- Functions and Arrow Functions
- Objects
- Arrays and array methods
- Destructuring
- Template literals
- Ternary Operators
- ES Modules and Import / Export Syntax

src: https://nextjs.org/learn/react-foundations/getting-started-with-react#essential-javascript-for-react


### React core concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

Components
Props
State

Components
User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code. If you think of components as LEGO bricks, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.


Creating components
In React, components are functions. Inside your script tag, create a new function called header:

First, React components should be capitalized to distinguish them from plain HTML and JavaScript:
Second, you use React components the same way you'd use regular HTML tags, with angle brackets <>:

### Nesting components
Applications usually include more content than a single component. You can nest React components inside each other like you would regular HTML elements.
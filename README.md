# README



This small project uses react context and react hooks to implement a naïve "todo" list application where the data is stored in local storage. The main purpose for this project is to get familiar with these two concepts below: 



* Context API

  Clean & easy way to 【share states】 between components. It also gives a central place to store states and allow components to use. The context API is an alternative to Redux.

  It achieves this functionality by providing a "context provider", which is a wrapper that wraps components that need access to the central context storage.

  使用习惯：

  1. create a separate `context` folder under `src` folder named context to keep tract of all context manipulation files

  2. in the `context` folder, create each js file for a specific context storage, such as a `AuthContext.js ` and a `ThemeContext.js`

  3. In each context file, first import the `createContext` function from `react` module, and use it to create a context Object

     ```js
     export const AuthContext = createContext();
     ```

  4. create a component that wraps up all the children component in it using the context object's provider as the wrapper component.

     Then store all the context data in the component's state and provide necessary handler to change the state

     ```js
     class AuthContextProvider extends Component {
         state = {
             isAuthenticated: false
         }
     
         toggleAuth = () => {
             this.setState({ isAuthenticated: !this.state.isAuthenticated })
         }
     
         render() {
             return (
                 <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                     {this.props.children}
                 </AuthContext.Provider>
             )
         }
     }
     
     export default AuthContextProvider;
     ```

  5. in the component tree, wrap all the components that need access to the context data using the context provider component, such as

     ```jsx
     <AuthContextProvider>
         <Navbar />
         <Booklist />
         {/* 创建一个Toggle button用于改变context中的state */}
         <ThemeToggler />
     </AuthContextProvider>
     ```

  6. in the wrapped component that needs to use the context, wrap the rendered result using a Consumer component provided by the same context object, and passing it a function inside it

     the function has a context object that stores all the data in it, and the return value should be the real rendered result

     ```jsx
     class ThemeToggler extends Component {
         // static contextType = ThemeContext
     
         render() {
             return (
                 <ThemeContext.Consumer>{context => {
                         return (<button onClick={context.toggleTheme}>Toggle Theme</button>)
                     }}
                 </ThemeContext.Consumer>
             )
         }
     }
     ```

     

* Hooks

  Tap into the inner workings of React in functional component.

  Hooks are just special functions that do different things in functional component, the following 

  * `userState()`: use state within function components
  * `useEffect()`: run code when a component (re)renders, just like componentDidMount and componentDidUpdate lifecycle methods
  * `useContext():`


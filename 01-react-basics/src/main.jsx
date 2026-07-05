import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import MyFunc from './My.jsx';
//  import MyFunc from './my.jsx'
// (we can also use it in App.jsx)

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit the Google'
}

const code = "React"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click me to visit google',
  code // Already evaluated expression , you cannot write function or any statements here , just one evaluated final outcome 
)

const anotherElement = (
<a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)

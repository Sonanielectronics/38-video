import React, { useState } from 'react';

function App() {

  const [name, setname] = useState("");
  const [fullname, fullsetname] = useState("");

  const [password, setpassword] = useState("");
  const [fullpassword, fullsetpassword] = useState("");

  const InputEvent = (event) => {
    // console.log(event.target.value)
    setname(event.target.value)
  }

  const InputEvent2A = (event) => {
    event.preventDefault();  // event.preventDefault is use when we are use form and butto type submit then doesn't reload page
    fullsetname(name)
    fullsetpassword(password)
  }

  const InputEvent2 = (event) => {
    setpassword(event.target.value)
  }

  return (

    <>

      <form onSubmit={InputEvent2A}>

        <div>

          <h2>Your name is {fullname}</h2>
          <h2>Your name is {name}</h2>
          <h2>Your password is {fullpassword}</h2>
          <h2>Your password is {password}</h2>
          {/* <h2>Your password is {fullname}</h2>
          <h2>Your password is {name}</h2> */}
          <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name} />
          <input type="text" placeholder="Enter your password" onChange={InputEvent2} value={password} />
          <button type="submit" >Click Me</button>

        </div>

      </form>

    </>

  );

}

export default App;

// silently observer and more try it ( practic.e)

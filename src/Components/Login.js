
import React from "react";
import { UserContext } from "../context";
import BankForm from "./bankform";

function Login(){
    const ctx = React.useContext(UserContext);  
    const { login, users } = React.useState('')
    const [currenUser, setCurrentUser] = React.useState('')
    const [userNotFound, setUserNotFound] = React.useState(false)
    function findlogedUser(){
      let userLoged = ctx.users.filter(user => user.loged === true)
      if (userLoged.length > 0) {
        setCurrentUser(userLoged[0])
      } else {
        setCurrentUser(false)
      }
    }
  
    React.useEffect(() => {
      findlogedUser()
    }, [users])
  
    function handle(data){
      let user = ctx.users.filter(user => user.email === data.email)
      if ( user.length > 0){
        let index = ctx.users.indexOf(user[0])
        ctx.users[index].loged = true
        Login(user[0])
        setCurrentUser(user)
        return true
      } else {
        setUserNotFound(true)
        setTimeout(() =>{
          setUserNotFound(false)
        }, 3000)
      }
    }
    return (
      <>
      {
        !currenUser ?
        <>
        <BankForm
          bgcolor="secondary"
          label="Login"
          handle={handle}
          hideAmount={true}
          successButton="Try Again"
        />
        {
          userNotFound &&
          <p>User not found, please register</p>
        }
        </>
        : <div className="alert alert-primary"><p>Hello {currenUser.name}</p></div>
      }
      </>
    )
  
  }
  export default Login;
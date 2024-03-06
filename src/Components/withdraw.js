import React from "react";
import { UserContext } from "../context";
import BankForm from "./bankform";

function Withdraw(){
    const [withDrawError, setWithDrawError] = React.useState(false)
    const ctx = React.useContext(UserContext);  
    const handle = (data) => {
      let user = ctx.users.filter(user => user.loged === true)
      let index = ctx.users.indexOf(user[0])
      let balance = ctx.users[index].balance
      console.log(balance);
      console.log(data.amount);
      if (balance > 0 && balance >= data.amount) {
        ctx.users[index].balance -= data.amount
      } else {
        setWithDrawError(true)
        setTimeout(() => {
          setWithDrawError(true)
        }, 3000);
      }
      return true
    }
    return (
      <>
        <BankForm
        bgcolor="info"
        label="Withdraw"
        handle={handle}
        hideAmount={false}
        successButton="Make another withdraw"
      />
      {
        withDrawError &&
        <p>You can't withdraw that amount</p>
      }
    </>
    )
  }

  export default Withdraw;
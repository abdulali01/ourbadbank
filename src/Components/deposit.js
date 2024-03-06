import React from "react";
import { UserContext } from "../context";
import BankForm from "./bankform";

function Deposit(){
    const ctx = React.useContext(UserContext);  
    const handle = (data) => {
      let user = ctx.users.filter(user => user.loged === true)
      let index = ctx.users.indexOf(user[0])
      ctx.users[index].balance += data.amount
      return true
    }
    return (
      <BankForm
      bgcolor="success"
      label="Deposit"
      handle={handle}
      hideAmount={false}
      successButton="Make another deposit"
    />
    )
  }

  export default Deposit;
import React from "react";
import { UserContext } from "../context";
import BankForm from "./bankform";


function CreateAccount(){
    const ctx = React.useContext(UserContext);  
  
    function handle(data){
      ctx.users.push({
        name: data.name,
        email: data.email,
        password: data.password,
        balance: 100,
        loged: false
      })
      return true
    }
    return (
      <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        hideAmount={true}
        successButton="Add another account"
      />
    )
  }

  export default CreateAccount;

// function CreateAccount(){

//     const[ show, setShow]               =React.useState(true);
//     const[ status, setStatus]           =React.useState('');   
//     const[ name, setName]               =React.useState('');   
//     const[ email, setEmail]             =React.useState('');   
//     const[ password, setPassword]       =React.useState('');   

//     const ctx = React.useContext(UserContext);


//     function validate(field, label){
//         if(!field){
//             setStatus('Error: ' + label);
//             setTimeout(() => setStatus(''), 3000);
//             return false;          
//         }
//         return true;
//     }

//     function handleCreate(){
//         console.log(name, email, password);
//         if (!validate(name,        'name')) return;
//         if (!validate(email,       'email')) return;
//         if (!validate(password,    'password')) return;

//         ctx.users.push({name, email, password, balance: 100});

//     }
//     function clearForm(){
//         setName('');
//         setEmail('');
//         setPassword('');
//         setShow(true);
//     }

//     return (
//         <Card
//             bgcolor="gray"
//             text='black'
//             header="Create Account"
//             status={status}
//             body={show ? (
//                 <>
//                 Name:<br/>
//                 <input type="input" className="form-control" id="name"
//                 placeholder="Enter Name" value={name} onChange={e =>setName(e.currentTarget.value)} /><br/>

//                 Email:<br/>
//                 <input type="input" className="form-control" id="email"
//                 placeholder="Enter Email" value={email} onChange={e =>setEmail(e.currentTarget.value)} /><br/>

//                 Password:<br/>
//                 <input type="input" className="form-control" id="password"
//                 placeholder="Enter Password" value={password} onChange={e =>setPassword(e.currentTarget.value)} /><br/>

//                 <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            
//                 </>
//             ):(
//                 <>
//                     <h5>Success</h5>
//                     <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
//                 </>
//         )}
        
//         />
//     )
// }
// export default CreateAccount;



import Card from "./Card";
import '../App.css';

function Home() {
  return (
    <div id="home" className="home-background">
      <div className="right">
        <Card
          
          className="card w-75"
          maxWidth="100rem"
      
          txtcolor="pink"
          bgcolor="gray"
          header="BadBank"
          title="Welcome to BadBank"
          text="You're Not Just Another Customer. We connect you to the future!"
          body={
            <img src="OnBank.png" className="img-fluid" alt="Logo" />
          }
        />
      </div>
    </div>
  );
}

export default Home;
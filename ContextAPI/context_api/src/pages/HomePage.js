import { useContext } from "react";
import { UserContext } from "../context/UserConext";

function HomePage() {
  const {user_secondary,user,newUser,setNewUser} = useContext(UserContext);
  function setNewValue(value){
    setNewUser(value)
  }
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to the homepage.</p>
      <p>
        This data is rendered from the context API: {user_secondary.name} {user.name} {newUser}
        <input onChange={(e)=>{setNewValue(e.target.value)}} ></input>
      </p>
    </section>
  );
}

export default HomePage;

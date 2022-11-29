import {Link} from 'react-router-dom';


function Home(userDetails) {
    const user =userDetails.user;

    const logout = () =>{
         window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
         );
    };
    return (
      <div>
    
          <div className="container">
            <input type='text'  defaultValue={user.name} placeholder="email" />
            <input type='text' defaultValue={user.email} placeholder="password" />
            <button onClick={logout}>Logout</button>
          </div>
       
      </div>
    );
  }
  
  export default Home;
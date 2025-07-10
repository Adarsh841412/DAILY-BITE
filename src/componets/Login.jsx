
 import {Link} from  "react-router-dom"
export default function Login() {
  return (
    <section className="container">
      <form className="form">
        <h1>Access Your Fitness Journey</h1>

    
        <input
          className="inp"
          type="email"
          placeholder="Enter Email"
          name="email"
        />
        <input
          className="inp"
          type="password"
          placeholder="Enter password "
          name="password"
        />
      


<button className="btn">Login</button>

<p>Don't have  account ?<Link to="/registar">Registar Now</Link></p>
      </form>
    </section>
  );
}

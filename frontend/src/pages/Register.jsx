import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

  return <>
  <section className="heading">
      <h1>
          <FaUser /> Register
      </h1>
      <p>Please create an account</p>
  </section>
  <section className="form">
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <input
            id="name"
            type="text"
            className="form-control" 
            name="name" value={name} 
            placeholder="Enter your name" 
            onChange={onChange}/>
        </div>
        <div className="form-group">
            <input
            id="email"
            type="email"
            className="form-control" 
            name="email" value={email} 
            placeholder="Enter your email" 
            onChange={onChange}/>
        </div>
        <div className="form-group">
            <input
            id="name"
            type="password"
            className="form-control" 
            name="password" value={password} 
            placeholder="Enter your password" 
            onChange={onChange}/>
        </div>
        <div className="form-group">
            <input
            id="password2"
            type="password"
            className="form-control" 
            name="password2" value={password2} 
            placeholder="Enter your password2" 
            onChange={onChange}/>
        </div>
        <div className="form-group">
            <button className="btn btn-block">
                Submit
            </button>
        </div>
    </form>
  </section>
  </>
}

export default Register
import Nav from "./nav";
const { useState, useEffect } = require("react"); 


function Contact() {
    const intialValues ={username:"", email:"",subject:"", phone:""}
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e) =>{
        console.log(e.target)
        const {name , value} = e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
        setIsSubmit(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       setFormErrors(validate(formValues))
       setFormValues(intialValues)
       setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)

        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        const numRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        const newNum = Number(values.username)
        const newPhone = Number(values.phone)

        if(!values.username){
            errors.username = "Name required"
        } 
        else if (values.username == newNum){
            errors.username = "No numbers in your name"
        }else if(values.username.length < 3) {
            errors.username = "More than 2 characters"

        } 
        
        if(!values.phone){
          errors.phone = "Enter your phone number"
        } else if (!numRegex.test(newPhone)){
          errors.phone = "Please enter phone number only"
      }
        if(!values.email){
            errors.email = "email required"
        } else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format"
        }
        if(!values.subject){
            errors.subject = "subject required"
        }

      
       
        return errors



    }

  return (
    <main role='main'>
                 <header class ="header-background">
                        <Nav />
    <div class="header-text">
    <h1> Interested in <br /><span id="photography">  a Luxury Home? </span></h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
  
    </div>
  </header>
      <div class="jumbotron">
      <div class="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Submitted Successfully</div>
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit}>
        
        <input
          name="username"
          type="text"
          class="feedback-input"
          placeholder="Name"
          value={formValues.username}
          onChange={handleChange}
        />
         <p>{formErrors.username}</p>
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <input
          name="phone"
          type="text"
          class="feedback-input"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
        />
         <p>{formErrors.phone}</p>
        <input type="radio" id="html" name="fav_language" value="HTML" />
  <label class="white" for="html"> Phone </label>
  <input type="radio" id="css" name="fav_language" value="CSS" />
  <label for="css" > Email </label>
        <textarea
          name="subject"
          class="feedback-input"
          placeholder="Comment"
          value={formValues.subject}
          onChange={handleChange}
        ></textarea>
         <p>{formErrors.subject}</p>
        <input type="submit" value="SUBMIT" disabled={isSubmit}/>
      </form>
    </div>
      </div>
    </main>
  )
          }
          


export default Contact
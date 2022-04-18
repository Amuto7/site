import React from "react"

export default function TastF() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData,setformData] = React.useState({
        email:'',fpassword:'',fcpassword:'',chbox:false
    })
    function handleform(e){
       setformData(x => {
           let {type,name,checked,value} = e.target
           return{
               ...x,
               [name]: type === 'checkbox' ? checked : value
           }
       })
       
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData.chbox);
        // formData.fpassword === formData.fcpassword && formData.fpassword.length > 0 ? 
        // console.log("Successfully signed up"):
        // console.log("not match ")  
        if (formData.fpassword === formData.fcpassword && formData.fpassword.length > 0){
            console.log("Successfully signed up")
            
        }else{
            console.log("passwords to not match");
            return

        }
       if ( formData.chbox ){
           console.log("Thanks for signing up for our news "       );
        }
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name='email'
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleform}
                    value={formData.email}

                />
                {/* <p>{formData.fpassword.length}</p> */}
                <input 
                    type="password" 
                    name='fpassword'
                    placeholder="Password"
                    className="form--input"
                    onChange={handleform}
                    value={formData.fpassword}
                />
                <input 
                    type="password" 
                    name='fcpassword'
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleform}
                    value={formData.fcpassword}

                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="chbox"
                        checked={formData.chbox}
                        onChange={handleform}


                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
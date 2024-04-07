import React,{useState} from 'react'
import './index.css'

const ACCAPrepJourney = () => {
    const [phoneNumner,setPhoneNumber]=useState("")
    const [errorMessage,setErrorMessage]=useState('')
    const [toggle,setToggle]=useState('#exampleModal')
    const setFunct=()=>{
        if(phoneNumner===""){
            setToggle("")
            setErrorMessage("phone Number Must Required")
        }else{
            setToggle("#exampleModal")
            setErrorMessage("")
        }
        setPhoneNumber("")
    }
    return (
        <>
        <div className='back'>
        <div className='container backcontainer'>
            <div className='child-containers'>
                <h1>Kick off your ACCA Prep Journey with IndigoLearn</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro saepe repudiandae cum aspernatur amet incidunt nihil ab. Maiores pariatur ratione optio corrupti fugiat vero cupiditate nulla eius accusantium dolorem?</p>
                
                <div className='buttons'>
                    <button className='getdis-btn'>Get Dicount</button>
                </div>
            </div>
            <div className='child-containers'>
                <div className='form-card'>
                <h4>Fill the form get the seat registering</h4>
                <form >
                    <div className='inputs'>
                    <div>
                    <input onChange={(event)=>{
                        if(event.target.value===''){
                            setErrorMessage("phone Number Must Required")
                        }else{
                            setErrorMessage("")
                        }
                            setPhoneNumber(event.target.value)
                    }} value={phoneNumner} type="text" placeholder='Phone Number**' />
                    <p className='error'>{errorMessage}</p>
                    </div>
                    <div>
                    <input type="text" placeholder='Email ID' />
                    </div>
                    <div>
                    <input type="text" placeholder='Gender'/>
                    </div>
                    <div>
                    <input type='text' placeholder='City'/>
                    </div>
                    <div>
                    <button onClick={setFunct} className='btns' type='button' data-toggle="modal" data-target={toggle}>Request Call Back</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                  <div className="modal-content">
                    <div className="modal-header">
                    
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className=' models-style'>
                    <div className="card-s">
                    <img className='img-s' src="https://ginodacampo.com/wp-content/uploads/2021/09/success-message-icon.png" alt="Avatar" />
                    <div className="container-s">
                    <div>
                    <h4><b>Thank you </b></h4>
                    </div>
                    <div>
                    Congratulations We Will Call Back You in between 24 Hours Of Work Day
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}


export default ACCAPrepJourney
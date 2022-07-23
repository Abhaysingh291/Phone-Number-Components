import React, { useEffect, useRef, useState } from 'react'
import "./dropdown.css"
function Dropdown({selected, setSelected,isActive ,setIsActive}) {

    const [showFlag, setshowFlag] = useState(false)
    const options = ['+91', '+91', '+91','+91', '+91', '+91'];
  
    
  // define mutable val in .current object
  const node = useRef();

  // set initial state
  
  // update state on button click
  const setText = (isActive) => {
       return setIsActive(!isActive)
  }

  // Track events outside scope
  const clickOutside = (e) => {
    if(node.current.contains(e.target)) {
      // inside click
      console.log('clicked inside')
      return;
    } 
    // outside click
      console.log('clicked outside scope')
      setIsActive(false)
  }

  // Do something after component renders
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    // clean up function before running new effect
    return () => {
        document.removeEventListener('mousedown', clickOutside);
    }
  }, [isActive])
    return (
        <div className='dropdown'>
            
            <div className="dropdown-btn"  ref={node}  onClick={() => setText(isActive)}>
            {showFlag && (
                <img src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?w=900&t=st=1658524566~exp=1658525166~hmac=1c84653485a4f04110ccc725672927e45a0421f5aa19bf78e110b28d49362e2d" alt="" style={{height:"20px",alignitems:"center",justifyContent:"center", position:"relative"}}/>
            )}
            {selected}
            
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                
            </div>
            
            {isActive && (
                
                
                <div className="dropdown-content"   ref={node}  >
                    {options.map((option) => (
                        <div onClick={() => {
                            setSelected(option);
                            setIsActive(false);
                            setshowFlag(true);
                        }}>
                       
                        <div  style={{display:"flex",alignitems:"center",justifyContent:"space-around"}}
                            className="dropdown-item"
                        >
                             <img src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?w=900&t=st=1658524566~exp=1658525166~hmac=1c84653485a4f04110ccc725672927e45a0421f5aa19bf78e110b28d49362e2d" alt="" style={{height:"20px",alignitems:"center",justifyContent:"center", position:"relative"}}/>
                            {option}
                        </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown
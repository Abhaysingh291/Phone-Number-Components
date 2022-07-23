import React, { useEffect, useRef, useState } from 'react'
import './input.css';

const Input = ({ sinput, setSinput }) => {

    
    //tracking input value
    const [data, setdata] = useState("");
    
    //Validation of phone number
    const handleChange = event => {
        setdata(event.target.value);
        if (event.target.value.length > 10) {
            alert('Please provide valid phone number');
        }
    };
    
    
    const node = useRef();
    // update state on button click
    const setText = (sinput) => {
        return setSinput(!sinput)
    }

    // Track events outside scope
    const clickOutside = (e) => {
        if (node.current.contains(e.target)) {
            // inside click
            // console.log('clicked inside')
            return;
        }
        // outside click
        // console.log('clicked outside ')
        setSinput(false)
    }

    // Do something after component renders
    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);

        // clean up function before running new effect
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [sinput])
    return (
        <>
            <input type="number"
                placeholder="0000-XXXX"
                className="input"
                pattern="[0-9]{10}"
                ref={node}
                onClick={() => setText(sinput)}
                name="message"
                onChange={handleChange}
                value={data}
            />

        </>
    )
}
export default Input;

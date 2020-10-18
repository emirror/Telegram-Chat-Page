import React, { useRef } from 'react';
import { SendStyle } from './style';

function Send(props) {

    const inputVal = useRef(null);
    
    const sendMessage = e => {

        e.preventDefault();

        if (inputVal.current.value.trim() != "") {
            props.message(inputVal.current.value);
            inputVal.current.value = "";
        }
    }



    return (
        <SendStyle>
            <input id="text-message" type="text" placeholder="Message" defaultValue="" ref={inputVal} onKeyUp={e => e.key == "Enter" && sendMessage(e)}/>
            <button id="send-message" type="submit" onClick={sendMessage}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path
                                d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808
                                    L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193
                                    c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409
                                    C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z" />
                        </g>
                    </g>
                </svg>
            </button>
        </SendStyle>
    )
}

export default Send;
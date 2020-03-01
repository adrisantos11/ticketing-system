import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InputModel } from '../../Model/model'

import './Input.scss'

interface Props {
    inputInfo: InputModel;
}
export const Input: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <>
            <div className='form-group'>
                <label htmlFor="" className={`text_label text-${props.inputInfo.colour}`}>{props.inputInfo.label}</label>
                <input type={props.inputInfo.type} className={`form-control input_class_${props.inputInfo.colour} text-${props.inputInfo.colour}`} aria-describedby="emailHelp" placeholder="Enter email"/>
                <small className="form-text text-danger">{props.inputInfo.error_control_text}</small>
            </div>
        </>
    );
}

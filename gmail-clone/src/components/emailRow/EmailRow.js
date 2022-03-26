import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Checkbox,IconButton} from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import "./EmailRow.css";
const EmailRow = ({id,title,subject,description,time}) => {
    const history=useNavigate();


  return (
    <div onClick={()=>history("/mail")} className="emailRow">
      <div className="emailRow__options"> 
        <Checkbox/>
        <IconButton>
            <StarBorderOutlinedIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon/>
        </IconButton>
      </div>
      <div className="emailRow__title"> 
        {title}
      </div>
      <div className="emailRow__message"> 
            <h4>{subject}
                <span className="emailRow__description">{description}</span>
            </h4>
      </div>
      <p className="emailRow__time"> 
            {time}
      </p>
    </div>
  )
}

export default EmailRow

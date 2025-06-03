import { IconButton, Tooltip } from "@mui/material";
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Profile() {

let navigate = useNavigate()
  return (
    <div>
      <Tooltip title="Change Password">
              <IconButton onClick={()=>navigate('/change')}>
                <MdOutlinePassword color='#393280' />
              </IconButton>
            </Tooltip>
    </div>
  )
}

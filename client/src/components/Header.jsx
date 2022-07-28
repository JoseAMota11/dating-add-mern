import './Header.css'
import ReactLogo from "../assets/react.svg"
import PersonIcon from "@mui/icons-material/Person"
import IconButton from '@mui/material/IconButton'
import ForumIcon from "@mui/icons-material/Forum"

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img className="header__logo" src={ReactLogo} alt="Header" />
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  )
}

export default Header

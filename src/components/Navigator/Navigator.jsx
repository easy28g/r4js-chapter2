import { NavLink } from 'react-router-dom';
import classes from './Navigator.module.css';

const Navigator = () =>{
    return(
      <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? classes.activeLink : ''}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.activeLink : ''}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/musics" className={({ isActive }) => isActive ? classes.activeLink : ''}>Music</NavLink>
      </div>
      <div className={`${classes.item} ${classes.activeLink}`}>
        <NavLink to="/news" className={({ isActive }) => isActive ? classes.activeLink : ''}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={({ isActive }) => isActive ? classes.activeLink : ''}>Settings</NavLink>
      </div>
    </nav>
    );
}

export default Navigator;
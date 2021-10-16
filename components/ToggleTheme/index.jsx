import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/actions/themeActions';

const ToggleTheme = ({ onChangeTheme, theme }) => {
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    onChangeTheme();
    dispatch(toggleTheme());
  };
  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" defaultChecked={theme} />
      <label htmlFor="dn" className="toggle" onClick={handleChangeTheme}>
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;

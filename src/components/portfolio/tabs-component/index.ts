import {buttonClasses} from "@mui/base";
import {styled} from "@mui/system";

export const TabButton = styled("button")`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #C6C6C6;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.08);
    width: 100%;
    padding: 16px 4px;
    margin: 6px;
    //border: 1px solid #1E50FF;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    outline: none;


    &:hover {
        //outline: none;
        //border: none;
        background: linear-gradient(90deg, #984300 0%, #FD6F00 46%, #CA5900 100%);
        color: #fff;
    }

    &:focus {
        outline: none;
        border: none;
        color: #fff;
    }

    &:focus-visible {
        outline: none;
        border: none;

        color: #fff;

    }

    &.${'active'} {
        outline: none;
        border: none;
        background: linear-gradient(90deg, #FD6F00 0%,  #E46400 100%);;
        color: #fff;
        // box-shadow: 10px 10px 12px 0 #FD6F00;
    }

    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 400px) {

        //font-size: 1rem;
        font-weight: 500;
        background-color: transparent;
        //width: 100%;
        //padding: 16px 4px;
        //margin: 6px;
        border: 1px solid #1E50FF;
        //border-radius: 7px;
        width: auto;
        font-size: 0.875rem;
        padding: 12px 10px;
        margin: 4px;
        border-radius: 5px;
    }

`;

export const ExpertiseItemContainer = styled("div")`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  padding: 16px 4px;
  margin: 6px;
  border: 1px solid rgba(30, 80, 255, 0.43);
  border-radius: 7px;
  display: flex;
  justify-content: start;
  align-items: start;
  outline: none;
  //background-color: rgba(255, 255, 255, 0.06);
  background: radial-gradient(at left top, rgba(255, 255, 255, 0.15) 0% 20%, #FFFFFF00 100%);
  backdrop-filter: blur(50%);

`;

import React from 'react'
import LogoutPopup from '../../components/MobileComponents/Popups/LogoutPopup';
import MobMenu from '../../components/MobileComponents/MobMenu'
import MobNotification from '../../components/MobileComponents/MobNotification'
import MsgBox from '../pages/MessagesMobile/MsgBox';
import LoginPopup from '../../components/MobileComponents/Popups/LoginPopup';
import EmailPopup from '../../components/MobileComponents/Popups/EmailPopup';
import SignupPopup from '../../components/MobileComponents/Popups/SignupPopup';
import BlockPopup from '../../components/MobileComponents/Popups/BlockPopup';

const MobilePopups = () => {
  return (
    <>
    <MobMenu/>
    <LogoutPopup/>
    <LoginPopup/>
    <EmailPopup/>
    <SignupPopup/>
    <BlockPopup/>
    <MobNotification/>
    <MsgBox/>
    </>
  )
}

export default MobilePopups
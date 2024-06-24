import React from 'react'

// Images
import Location from "../Assets/img/maplocation.png";
import Mail from "../Assets/img/Mail.png";
import Telegram from "../Assets/img/Telegramcontact.png";


const Contact = () => {
  return <>
    <div className='sectionContainer'>
         <h1 className='sectionName'>Contact</h1>
         <h1 className='sectionHeadline'>Don't be shy! Hit me up! 👇</h1>

         <div className='contactMethodContainer'>
          <div className='contactMethod'>

             <img src={Location} alt='Location' className='contactIcon'/>

             <div className='contactDetail'>
               <h1 className='contactName'>Location</h1>
               <p className='contactPara'>Addis Ababa, Ethiopia</p>
             </div>
          </div>

          <div className='contactMethod'>
            
            <img src={Mail} alt='mail' className='contactIcon'/>

            <div className='contactDetail'>
              <h1 className='contactName'>mail</h1>
              <p className='contactPara'>amanuelabera46@gmail.com</p>
            </div>
         </div>

         <div className='contactMethod'>
            
            <img src={Telegram} alt='telegram' className='contactIcon'/>

            <div className='contactDetail'>
              <h1 className='contactName'>telegram</h1>
              <p className='contactPara'>@Aman_A2208</p>
            </div>
         </div>

         </div>
    </div>
  </>
}

export default Contact
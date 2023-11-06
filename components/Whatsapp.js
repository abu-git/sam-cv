//import { WhatsAppWidget } from 'react-whatsapp-widget'
//import 'react-whatsapp-widget/dist/index.css'

import { FloatingWhatsApp } from "react-floating-whatsapp"

import React from 'react'

function Whatsapp() {
  return (
    <div className='dark:text-black'>
        <FloatingWhatsApp
          phoneNumber="27832459000"
          accountName="Sam"
          avatar='/android-chrome-512x512.png'
          chatMessage="Hi there! 👋🏼 How can I help?"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
    </div>
    
  )
}

export default Whatsapp

import logo from './images/logo.jpg';
import facebook from './images/facebook.avif';
import youtube from './images/youtube.avif';
import insta from './images/insta.avif';
import linkedin from './images/linkedin.avif';
import chatbot from './images/chatbot.avif';
import mail from './images/mail.avif';
import whatsapp from './images/whatsapp.avif'   
import { useState } from 'react';
import './App.css'

function App(){
  const[unset,set]=useState(false)
  const c1 = () =>{
      set(false)
  }
  const c2 = () =>{
      set(true)
  }
  return(
    <div className='name'>
    {
        unset ?(
        <div className="div1" onClick={c1}>
            <img
                src={logo}
                alt=''
                className='div2'
                style={{position:'fixed'}}
            />
            <a href='https://www.facebook.com/' target='_blank'>
            <img
                src={facebook}
                alt=''
                className='img1'
            /></a>
            <a href='https://www.youtube.com/' target='_blank'>
            <img
                src={youtube}
                alt=''
                className='img2'
            /></a>
            <a href='https://www.instagram.com/accounts/login/' target='_blank'>
            <img
                src={insta}
                alt=''
                className='img3'
            /></a>
            <a href='https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin+login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1007743&mcid=6844056167778418689&cid=&gclid=CjwKCAjw4P6oBhBsEiwAKYVkqxYlJwvujyf9wTZQzFLoaHY4cIlQHtHvDuly4Qk1Q2vsEndpb9OCoxoCjuwQAvD_BwE&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F ' target='_blank'>
            <img
                src={linkedin}
                alt=''
                className='img4'
            /></a>
            <a href='https://chat.openai.com/' target='_blank'>
            <img
                src={chatbot}
                alt=''
                className='img5'
            /></a>
            <a href='https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook' target='_blank'>
            <img
                src={mail}
                alt=''
                className='img6'
            /></a>
            <a href='https://web.whatsapp.com/' target='_blank'>
            <img
                src={whatsapp}
                alt=''
                className='img7'
            /></a>
        </div>
        ):(
        <div className="div2" onClick={c2}>
            <img
                src={logo}
                alt=''
                className='div2'
                style={{position:'fixed'}}
            />
        </div>
        )
    }
</div>
  )
}
export default App;



















import React from "react";
import "../styles/contactus.scss";
import logo from "../Assets/logo.jpg"
const ContactUs= ()=>{
     return (
       <>
         <div className="body">
           <img src={logo} className="logo rounded-full" alt="Speakic" />
           <div className="text-5xl leading-10 heading">Contact our friendly team</div>
           <div className="text-xl leading-10">
             Let us know how we can help.
           </div>
           <div className="my-16 grid grid-cols-4 gap-16 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1">
             <div className="box w-100 p-5">
               <lord-icon
                 src="https://cdn.lordicon.com/ayhtotha.json"
                 trigger="hover"
                 colors="primary:#033431"
               ></lord-icon>
               <div className="content mt-5">
                 <div className="child1">Chat with us.</div>
                 <div className="child2">Chat with our friendly team.</div>
                 <a
                   className="child3"
                   href="mailto:vidushisaxena@gmail.com"
                   target={"_blank"}
                 >
                   chat@gmail.com
                 </a>
               </div>
             </div>
             <div className="box w-100 p-5">
               <lord-icon
                 src="https://cdn.lordicon.com/xtzvywzp.json"
                 trigger="hover"
                 colors="primary:#033431"
               ></lord-icon>
               <div className="content mt-5">
                 <div className="child1">E-mail us.</div>
                 <div className="child2">We are here to help.</div>
                 <a
                   className="child3"
                   href="mailto:shivanshikaagarwal7275@gmail.com"
                   target={"_blank"}
                 >
                   e-mail@gmail.com
                 </a>
               </div>
             </div>
             <div className="box w-100 p-5">
               <lord-icon
                 src="https://cdn.lordicon.com/oiiqgosg.json"
                 trigger="hover"
                 colors="primary:#033431"
               ></lord-icon>
               <div className="content mt-5">
                 <div className="child1">Visit us.</div>
                 <div className="child2">Visit our office.</div>
                 <a
                   className="child3"
                   href="mailto:vidushisaxena@gmail.com"
                   target={"_blank"}
                 >
                   Viwe on Google Maps
                 </a>
               </div>
             </div>
             <div className="box w-100 p-5">
               <lord-icon
                 src="https://cdn.lordicon.com/srsgifqc.json"
                 trigger="hover"
                 colors="primary:#033431"
               ></lord-icon>
               <div className="content mt-5">
                 <div className="child1">Call us.</div>
                 <div className="child2">Mon-Fri from 10am to 5pm.</div>
                 <a
                   className="child3"
                   href="phone:7275503320"
                   target={"_blank"}
                 >
                   +91 7275503320
                 </a>
               </div>
             </div>
           </div>
         </div>
       </>
     );
}
// may add footer
export default ContactUs;
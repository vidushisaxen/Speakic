import React, { useState } from "react";
import "../styles/contactus.scss";
import logo from "../Assets/logo.jpg";
import NavSide from "./NavSide";

const ContactUs= ()=>{
 function Accordion({ title, content }) {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
     setIsOpen(!isOpen);
   };
 
   return (
     <div className="accordion-item">
       <button className="accordion-title" onClick={handleClick}>
         {title}
         <lord-icon
           src="https://cdn.lordicon.com/rmkahxvq.json"
           trigger="hover"
           state="hover-arrow-down-2"
           colors="primary:#033431"
         ></lord-icon>
       </button>
       {isOpen && <div className="accordion-content">{content}</div>}
     </div>
   );
 }
  const sections = [
    { title: "Is the Conversion free?", content: "Yes, you can use this feature for free." },
    { title: "Do you provide tutorials?", content: "Our help section is very extensive. You can also contact our team for any querry." },
    { title: "How does support work?", content: "You can e-mail our team with your questions. They will be answered at the first opportunity. You can also call us with the given number from Monday to Friday during 10am to 5pm." },
  ];
     return (
       <>
        <NavSide></NavSide>
         <div className="contact-body">
           <img src={logo} className="logo rounded-full" alt="Speakic" />
           <div className="text-5xl leading-10 heading">
             Contact our friendly team
           </div>
           <div className="text-xl leading-10">
             Let us know how we can help.
           </div>
           <div className="my-16 grid grid-cols-4 gap-10 lg:grid-cols-4  md:grid-cols-2">
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
                   View on Google Maps
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
           <div>
             <div className="text-5xl leading-10 heading mb-6 ml-4">
               Frequently Asked Questions
             </div>
             <div className="accordion">
               {sections.map((section) => (
                 <Accordion
                   key={section.title}
                   title={section.title}
                   content={section.content}
                 />
               ))}
             </div>
           </div>
         </div>
       </>
     );
}
export default ContactUs;
import React from 'react';
import {Link} from 'react-router-dom'
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemPanel,
//     AccordionItemButton
// } from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import './accordion.css';
 
export default function AccordionLeft() {
    return (
<div className="panel-group" id="accordion">
  <div className="panel panel-default">
    <div className="panel-heading">
      <h5 className="panel-title accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
          Home
      </h5>
    </div>
    <div id="collapseOne" className="panel-collapse collapse in">
      <div className="panel-body">
          <span><Link to={"/home"} className="nav-link">Home</Link></span>
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h5 className="panel-title accordion-toggle"  data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"> 
          Check Plowing Date
      </h5>
    </div>
    <div id="collapseTwo" className="panel-collapse collapse">
      <div className="panel-body">
      <span> <Link to={"/checkploughingdate"} className="nav-link">Check Plowing date</Link></span>
      </div>
    </div>
  </div>
  
</div>
  
 

        // <Accordion>
        //     <AccordionItem>
        //         <AccordionItemHeading>
        //             <AccordionItemButton>
        //                 Home
        //             </AccordionItemButton>
        //         </AccordionItemHeading>
        //         <AccordionItemPanel>
        //            Home
        //         </AccordionItemPanel>
        //     </AccordionItem>
        //     <AccordionItem>
        //         <AccordionItemHeading>
        //             <AccordionItemButton>
        //                 Check Plowing date
        //             </AccordionItemButton>
        //         </AccordionItemHeading>
        //         <AccordionItemPanel>
        //                 CP menu
        //         </AccordionItemPanel>
        //     </AccordionItem>
        // </Accordion>
    );
}
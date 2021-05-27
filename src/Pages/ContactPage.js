import React from "react";
import styled from "styled-components";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";

import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const email = <EmailIcon/>
  const phone = <PhoneIcon/>
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            {/* <h2>email: jani.apurva@yahoo.com</h2> */}
            <ContactItem title={'Phone'} icon={phone} contact1={'+1(647)-655-8007'}/>
            <ContactItem title={'Email'} icon={email} contact1={'jani.apurva@yahoo.com'}/>

          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}
const ContactPageStyled = styled.section`
  .left-content {
    /* margin-left: 2rem;
    display: flex;
    justify-content: space-between;
    border: 1 px solid var(--primary-color);
    color: var(--white-color);
      font-size: 2rem;
      padding: 1rem ;
      display: contents; */

    
  }
`;
export default ContactPage;

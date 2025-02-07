import React from "react";
import styled from "styled-components";
import bitoLogo from "../../images/logobitotransparente.png";

export function BlogFooter() {
  return (
    <Footer>
      <FooterContent>
        <FooterLogo>
          <img className="footer-logo-two" src={bitoLogo} />
        </FooterLogo>
        <FooterDescription></FooterDescription>
        {/* <FooterLinks>
          <LinksColumn>
            <FooterLink>Characters</FooterLink>
            <FooterLink>Comics</FooterLink>
            <FooterLink>Games</FooterLink>
          </LinksColumn>
          <LinksColumn>
            <FooterLink>Video</FooterLink>
            <FooterLink>Community</FooterLink>
            <FooterLink>More</FooterLink>
          </LinksColumn>
        </FooterLinks> */}
        <NewsletterSection>
          <NewsletterTitle>Subscribe</NewsletterTitle>
          <NewsletterSubtitle>
            Subscribe to get latest update
          </NewsletterSubtitle>
          <NewsletterForm>
            <NewsletterInput placeholder="Enter Email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>
      <Copyright>© 2022 Company Name. All rights reserved.</Copyright>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  background: #ffffff;

  box-shadow: 0px -4px 24px rgba(22, 28, 44, 0.08);
  border-top: 1px solidrgb(232, 237, 255);
  margin-top: 39px;
`;

const FooterContent = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  padding: 56px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`;

const FooterLogo = styled.div`
  font-family: "Dragon Fruit Days", sans-serif;
  font-size: 30px;
  display: flex;
  height: 60px;
`;

const LogoLetter = styled.span`
  color: ${(props) => props.color};
`;

const FooterDescription = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: #3a3a3a;
  font-weight: 300;
  margin-top: 22px;
  width: 90%;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 117px;

  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FooterLink = styled.a`
  font-family: "Hey Comic", sans-serif;
  font-size: 18px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fc4066;
  }
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsletterTitle = styled.h2`
  font-family: "Hey Comic", sans-serif;
  font-size: 38px;
  color: #000000;
  margin-bottom: 6px;
`;

const NewsletterSubtitle = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  color: #3a3a3a;
  margin-bottom: 33px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 20px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 13px 19px;
  border: 1px solid #ffd3dd;
  border-radius: 6px;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  width: 10rem;

  &::placeholder {
    color: #000000;
  }
`;

const SubscribeButton = styled.button`
  background: #5aa5f7;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 13px 24px;
  font-family: "Hey Comic", sans-serif;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #e62952;
  }

  @media (max-width: 320px) {
    background: #5aa5f7;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 13px 24px;
    font-family: "Hey Comic", sans-serif;
    font-size: 18px;
    cursor: pointer;
    max-width: 3rem;
  }
`;

const Copyright = styled.div`
  background: rgb(240, 246, 255);
  padding: 15px;
  text-align: center;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  color: #000000;
`;

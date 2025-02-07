import React from "react";
import styled from "styled-components";

export function ShareSection() {
  const socialLinks = [
    { icon: "/icons/facebook.svg", label: "Facebook", url: "#" },
    { icon: "/icons/twitter.svg", label: "Twitter", url: "#" },
    { icon: "/icons/linkedin.svg", label: "LinkedIn", url: "#" },
    { icon: "/icons/pinterest.svg", label: "Pinterest", url: "#" },
  ];

  return (
    <ShareContainer>
      <ShareLabel>Share this blog</ShareLabel>
      <SocialLinks>
        {socialLinks.map((social, index) => (
          <SocialLink
            key={index}
            href={social.url}
            aria-label={`Share on ${social.label}`}
          >
            <SocialIcon src={social.icon} alt="" />
          </SocialLink>
        ))}
      </SocialLinks>
    </ShareContainer>
  );
}

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 62px 0;

  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const ShareLabel = styled.h3`
  color: #505050;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 18px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  transition: background-color 0.2s ease;

  &:hover {
    background: #fc3c68;
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`;

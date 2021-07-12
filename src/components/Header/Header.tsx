import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header: React.FC = () => {
  const Logo = (
    <Div1>
      <Link href="/">
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Bhardwaj Avasarala</Span>
          </a>
        }
      </Link>
    </Div1>
  );

  const links: any[] = [
    { name: "Projects", route: "#projects" },
    { name: "Technologies", route: "#tech" },
    { name: "About", route: "#about" },
  ];

  const NavLinks = (
    <Div2>
      {links.map((data: any, index: number) => {
        return (
          <li key={`link-${index + 1}`}>
            <Link href={data.route}>
              <NavLink>{data.name}</NavLink>
            </Link>
          </li>
        );
      })}
    </Div2>
  );

  return (
    <Container>
      {/* {Logo} */}
      {NavLinks}
      <Social />
    </Container>
  );
};

interface ISocialIconList {
  icon: React.FC | IconType;
  route: string;
}

const SocialLinks: ISocialIconList[] = [
  { icon: () => <AiFillGithub size="3rem" />, route: "https://github.com" },
  {
    icon: () => <AiFillLinkedin size="3rem" />,
    route: "https://linkedin.com",
  },
  {
    icon: () => <AiFillInstagram size="3rem" />,
    route: "https://instagram.com",
  },
];

export const Social: React.FC = () => {
  return (
    <Div3>
      {SocialLinks.map((data, index: number) => {
        return (
          <SocialIcons
            key={`social-icon-${index}`}
            href={data.route}
            target="_blank"
          >
            <data.icon />
          </SocialIcons>
        );
      })}
    </Div3>
  );
};
export default Header;

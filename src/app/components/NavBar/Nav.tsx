import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav() {
  return (
    // <Wrapper>
    //   <Item
    //     href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
    //     target="_blank"
    //     title="Documentation Page"
    //     rel="noopener noreferrer"
    //   >
    //     <DocumentationIcon />
    //     Log in
    //   </Item>
    //   <Item
    //     href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
    //     target="_blank"
    //     title="Github Page"
    //     rel="noopener noreferrer"
    //   >
    //     <GithubIcon />
    //     Sign up
    //   </Item>
    // </Wrapper>
    <Wrapper className="flex flex-row gap-4">
      <Button>Log in</Button>
      <Button>Sign up</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

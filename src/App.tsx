import React from "react";
import Editor from "blocks-ui";
import * as Blocks from "@blocks/react";

const JSX = `
import React from 'react'
import { HeaderBasic } from '@blocks/react'
export default () => (
  <Blocks.Root>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello Dear</HeaderBasic.Logo>
      <HeaderBasic.Nav>
        <HeaderBasic.Link to="/about">About Me</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
  </Blocks.Root>
)
`;

const Custom = () => <div>Hello</div>;
Custom.displayName = "Custom";

console.log(Blocks);
export default () => <Editor blocks={{ ...Blocks, Custom }} src={JSX} />;

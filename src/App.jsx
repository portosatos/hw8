import React, { useState } from 'react';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App() {
  const [value1, setValue1] = useState("Ivan Ivanov");
  const [value2, setValue2] = useState("Focus");
  const [value3, setValue3] = useState("Danger");

  const handleChange1 = (e) => setValue1(e.target.value);
  const handleChange2 = (e) => setValue2(e.target.value);
  const handleChange3 = (e) => setValue3(e.target.value);

  return (
    <div id="trueRoot">
      <Button size="lg">lg, primary</Button>
      <Button>md, primary</Button>
      <Button size="sm">sm, primary</Button>
      <Button variant="bordered" size="lg">lg, bordered</Button>
      <Button variant="bordered">md, bordered</Button>
      <Button variant="bordered" size="sm">sm, bordered</Button>

      <Input label="Name" value={value1} onChange={handleChange1} />
      <Input label="Name" value={value2} onChange={handleChange2} />
      <Input label="Name" value={value3} onChange={handleChange3} danger/>

      <Typography textSize="sm">
        SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      <Typography textSize="md">
        MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      <Typography textSize="lg">
        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>

      <Heading level="1">H1. Heading 1</Heading>
      <Heading level="2">H2. Heading 2</Heading>
      <Heading level="3">H3. Heading 3</Heading>
      <Heading level="4">H4. Heading 4</Heading>
      <Heading level="5">H5. Heading 5</Heading>
      <Heading level="6">H6. Heading 6</Heading>

      <div id="tooltipsDiv">
        <Tooltip position="top">Tooltip Top</Tooltip>
        <Tooltip position="left">Tooltip Left</Tooltip>
        <Tooltip position="right">Tooltip Right</Tooltip>
        <Tooltip position="bottom">Tooltip Bottom</Tooltip>
      </div>

      <Accordion title="Accordion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
      <Accordion title="Accordion Expanded" defaultOpen>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
    </div>
  );
}

export default App;

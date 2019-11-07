import React from "react";
import { useInput } from "../../hooks/input-hook/input.hook";
import Controller from "../../utils/controller";
import Table from "../../utils/table";
import {
  CommandsForm,
  CommandsFormButton,
  CommandsOutput,
  CommandsFlex,
  CommandsOutputWrapper
} from "./Commands-styled";

const table = new Table();
const controller = new Controller(table);

export function Commands() {
  const { value, bind, reset } = useInput("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    controller.execute(value);
    reset();
  };

  let actions = "Please place the robot frist";
  if (controller.robot) {
    actions = controller.robot.toString();
  }

  return (
    <CommandsFlex>
      <form onSubmit={handleSubmit}>
        <CommandsForm>
          <label>Plese enter a command:</label>
          <input type="text" {...bind} />
          <CommandsFormButton type="submit">Execute command</CommandsFormButton>
        </CommandsForm>

        <CommandsOutputWrapper>
          <CommandsOutput rel="Output">
            <code>{actions}</code>
          </CommandsOutput>
        </CommandsOutputWrapper>
      </form>
    </CommandsFlex>
  );
}

import Table from "./table";
import Robot from "./robot";
import { Directions } from "./robot";
import { setError } from "./error.util";

export default class Controller {
  public table: Table;
  public robot!: Robot;

  constructor(table: Table) {
    this.table = table;
  }

  public execute(command: string): void {
    // Command is place and there is no robot create, if the command place comes through again, recreate the position
    // Starts with place, then validate.
    const hasPlace = RegExp("PLACE*").test(command);

    if (hasPlace) {
      const splitPlace = command.split(",");

      if (
        splitPlace.length < 3 ||
        !splitPlace[0] ||
        !splitPlace[1] ||
        !splitPlace[2]
      ) {
        setError(true);
        return;
      }

      const x = parseInt(splitPlace[0].replace(/\D/g, ""), 10);
      if (x < 0 || x > 5) {
        setError(true);
        return;
      }

      const y = parseInt(splitPlace[1].replace(/\D/g, ""), 10);
      if (y < 0 || y > 5) {
        setError(true);
        return;
      }

      const d = splitPlace[2];
      let directionEnum = Directions.EAST; // Default value set

      switch (d) {
        case "NORTH":
          directionEnum = Directions.NORTH;
          break;
        case "SOUTH":
          directionEnum = Directions.SOUTH;
          break;
        case "WEST":
          directionEnum = Directions.WEST;
          break;
        case "EAST":
          directionEnum = Directions.EAST;
          break;
        default:
      }

      this.robot = new Robot({
        position: { x, y },
        direction: directionEnum
      });

      setError(false);
    }

    if (this.robot) {
      switch (command) {
        case "LEFT":
          this.robot.turnLeft();
          break;
        case "RIGHT":
          this.robot.turnRight();
          break;
        case "MOVE":
          this.robot.move();
          break;
        case "REPORT":
          alert(`Reported position: ${this.robot.toString()}`);
          break;
        default:
      }
    }
  }
}

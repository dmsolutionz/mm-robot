import { IPosition } from "./table";

export enum Directions {
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST"
}

export interface IRobotOptions {
  position: IPosition;
  direction: Directions;
}

export default class Robot {
  public name!: string;
  public direction: Directions;
  private position: IPosition;

  constructor(options: IRobotOptions) {
    this.position = options.position;
    this.direction = options.direction;
  }

  public turnLeft(): Directions {
    const newDirection: Directions =
      this.direction === Directions.NORTH
        ? Directions.WEST
        : this.direction - 1;
    return (this.direction = newDirection);
  }

  public turnRight(): Directions {
    const newDirection: Directions =
      this.direction === Directions.WEST
        ? Directions.NORTH
        : this.direction + 1;
    return (this.direction = newDirection);
  }

  public move(): boolean {
    switch (this.direction) {
      case Directions.NORTH:
        let next = this.position.y + 1;
        if (this.position.y <= 4) this.position.y = next;
        break;
      case Directions.EAST:
        let next2 = this.position.x + 1;
        if (this.position.x <= 4) this.position.x = next2;

        break;
      case Directions.SOUTH:
        let next3 = this.position.y - 1;
        if (this.position.y >= 1) this.position.y = next3;

        break;
      case Directions.WEST:
        let next4 = this.position.x - 1;
        if (this.position.x >= 1) this.position.x = next4;

        break;
      default:
    }
    return true;
  }

  public toString() {
    return `${this.position.x}, ${this.position.y}, ${
      Directions[this.direction]
    }`;
  }
}

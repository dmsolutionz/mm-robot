import { Directions, IRobotOptions } from "./robot";
import Robot from "./robot";

describe("Robot", () => {
  describe("new robot", () => {
    it("should be initialized with the given params", () => {
      const options: IRobotOptions = {
        position: { x: 1, y: 1 },
        direction: Directions.WEST
      };
      const robot: Robot = new Robot(options);

      expect(robot.toString()).toEqual("1, 1, WEST");
      expect(robot.direction).toEqual(Directions.WEST);
    });
  });

  describe("turning left", () => {
    it("should turn the robot left", () => {
      const options: IRobotOptions = {
        position: { x: 3, y: 3 },
        direction: Directions.NORTH
      };
      const robot: Robot = new Robot(options);
      expect(robot.direction).toEqual(Directions.NORTH);

      expect(robot.turnLeft()).toEqual(Directions.WEST);
      expect(robot.direction).toEqual(Directions.WEST);

      expect(robot.turnLeft()).toEqual(Directions.SOUTH);
      expect(robot.direction).toEqual(Directions.SOUTH);

      expect(robot.turnLeft()).toEqual(Directions.EAST);
      expect(robot.turnLeft()).toEqual(Directions.NORTH);
    });
  });

  describe("turning right", () => {
    it("should turn the robot right", () => {
      const options: IRobotOptions = {
        position: { x: 3, y: 3 },
        direction: Directions.NORTH
      };
      const robot2: Robot = new Robot(options);
      expect(robot2.direction).toEqual(Directions.NORTH);

      expect(robot2.turnRight()).toEqual(Directions.EAST);
      expect(robot2.direction).toEqual(Directions.EAST);

      expect(robot2.turnRight()).toEqual(Directions.SOUTH);
      expect(robot2.turnRight()).toEqual(Directions.WEST);
      expect(robot2.turnRight()).toEqual(Directions.NORTH);
    });
  });
});

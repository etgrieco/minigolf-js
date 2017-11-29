# MonsterGolfJS - A minigolf game made in Javascript + Canvas

## The premise

We all have likely experienced the emotion of "Hanger" -- when one gets so hungry that your emotions turn upside-down. The theme of this game was built on this premise -- the monster is hangry, and it is your duty to feed it as fast as possible!

## Features

### "Ball" physics

This game implements a simple physics engine to emulate a realistic ricochet effect. This was implemented using a simple yet elegant algorithm to check for bounce direction:

```Javascript
//ball.js: Richochet logic; run if ball is "in" an obstacle
Ball.prototype.ricochet = function(vx, vy, level) {
  const testBall = new Ball({ pos: [this.pos[0] - vx, this.pos[1]] });

  // if reversal of x-direction does not remove from obstacle,
  // then reverse the y-direction speed
  testBall.checkCollissions(level);
  this.vel = testBall.inObstacle ? [vx, -vy] : [-vx, vy];

  this.inObstacle = false;
}
```

### Object-oriented ES6: Animation and Object Coordination

One of the strengths of this Javascript project is its strong adherence to Object oriented programming conventions, especially taking advantage of ES6 syntactic sugar for prototypal inheritance for coding and reading ease. The component objects are arranged in a logical hierarchy to allow for predictable object APIs and DRY, readable code.

The `GameView`
 * Contains: `Game` & `UI`
 * Responsible for starting the game
 * Controls key bindings for interaction with game
 * Keeps track of level advancement and level number
 * Every frame...
  * Checks for end level (monster eats food) or end game (monster too hungry) conditions
  * Draws the `UI`
  * Draws `Game`

The `Game`
* Contains: Game Objects
* Game objects are capable of animation routines, being moved on the canvas, and being drawn
* Game Objects is a parent of...
  * `Ball`
  * `Putter`
  * `Level`
    * `Hole`: The monster and its animation routines
    * `Wall`s (contained in levels)
* Every frame...
  * Triggers collision detections between `Ball` and other objects
  * Moves game objects
  * Draws all game objects in their current state
  * Tells the game view to update the UI's messages
* Also keeps track of a level's strokes when a ball is hit.

The `UI`...
* Contains: UI Objects (stores and instance of game to access game-relevant variables)
* UI Objects are drawn every frame
* UI Objects is a parent of...
  * `Message`: In-game messages that update on every stroke
  * `PowerMeter`: Updates every frame
  * `ScoreCounter`: Updates on a level change
  * `StrokeCounter`: Updates every stroke

The `Level`...
* Contains: Wall Objects, message methods, and the `Hole` (monster position)
* Keeps track of other basic properties as well, such as par & movement rate (for variable friction)
* Utilizes standard methods for most levels, but many methods are overwritable for 'special' level scenarios, such as the tutorial level and end-game, which lack a traditional par. These flexible level elements allowed for a consistent object to be used throughout the game without too many explicit deviations in the game logic:

Here's an example of the level's unique object architecture, taking advantage of the OOP flexibility in Javascript. While this approach 'breaks' some OOP conventions, it allows for a clean implementation of advancing through levels in the overall game logic.

```Javascript
class Level extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props); // takes many variable properties

    // End-game, End-level, and messaging functions are re-assignable for special scenarios
    this.isLevelOver = this.isLevelOver || Level.isLevelOver;
    this.isGameOver = this.isGameOver || Level.isGameOver;
    this.getMessage = this.getMessage || Level.getMessage;
  }
```

```Javascript

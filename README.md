# JS Project Proposal: Mini-golf Game

### Background

Golf games are a popular and simple sports/arcade genre that has an intuitive design, since many people are familiar with this recreational activity. Generally, these games follow a similar format:
* The gameplay is played from the top-down/birds-eye perspective
* Players can control the angle of the shot they make.
* Players can control the initial velocity ("Power") of the shot they make.

The specific implementation of this game will be outliened in the below sections.

### Functionality & MVP
This minigolf game will be able to:
- [ ] Take the user input to control the angle and power of the shot.
- [ ] Incorporate a skill-based element for the power meter that will force the player to properly time their inputs to adjust for shot power appropriately
- [ ] A consistent physics model that allows shots to be relatively predictable
- [ ] Include a set number (3 - 5) of pleasing level designs of increasing difficulty
- [ ] Utilize pleasing graphics to represent a real-world visual approximation of the actual game, to draw players in.

The project will also include:
- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

This app will use a simple GUI in order to display important information for gameplay, including score (relative to par), the power level of shots, and a visual indicator for player's intended shot path.

![Wireframe](https://raw.githubusercontent.com/etgrieco/minigolf-js/master/docs/images/wireframe.png)

The color scheme of the game should clearly indicate the presence of the ball, hole, and obstacles.

### Technologies
`JavaScript` for game logic
`HTML Canvas` for rendering of gamespace.
`Webpack` for bundling the js files

The primary scripts that will hold the game-logic will be broken up into: 

`{game_object}.js`: These files how different game objects (ball, hole, walls, etc.) will interact with the physics engine in the former file. All game objects will inherit from `GameObjects`, to keep the code DRY and simplify rendering methods.

`physics.js`: This will handle the majority of important physics calculations, such as collision-detection.

`level_{x}.js`: Once the general game logic works, level objects can build the game world, with properties that designate the placement and attributes of the available `game_objects`.

`game.js`: This file combines the various game objects into a single API. It is responsible for the master `draw` and `move` functions, which calls the corresponding `draw`/`move` functions of all the game objects, populated by a level design, it contains.

`game_view.js`: Handles user input and the HTML canvas context. This should also include the basic sounds needed for an immersive game experience.

### Implementation Timelinez

**Day 1:** Write an entry file that can load an object oriented library of javascript files utilizing ES6 import/export functionality. Learn `Canvas` basics and choose the specific tools that would be best for my project. Draft 3-5 basic level designs.

Goals:
* Get a green entry-file/bundle working
* Level design rough drafts

**Day 2:** Dedicate the day to getting a working physics prototype working. The model should be able to take simplified payer input to determine the angle of the shot, and a simple UI with basic `canvas` elements to demonstrate the physics model in practice.
* Complete a working prototype of the golf physics model, including:
  * Variable initial-velocities
  * Consistent deceleration
  * Collision
  * Momentum-transfer (richochet) effects
* Design allows for future user input.
  
**Day 3:** Incorporate user-input into the game, including a timing-aspect for the power-meter. Build level designs and get at least 1 hole working.

**Day 4:** Style the level assets, and use these styled assets to make at least two more levels.
* Professionally-styled UI for input and control directions. Use visual effects to demonstrate intended gameplay appropriately.
* Build at least 2 more levels using the asset-builder: if everything is in place, putting a new level together should be easy!

### Bonus Features

- [ ] More levels
- [ ] Advanced obstacle types: moving obstacles, for example.

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
- [ ] Utilize pleasing graphics to represent a real-world visual approximation of the actual hobby, to draw players in.

The project will also include:
- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

This app will use a simple GUI in order to display important information for gameplay, including score (relative to par), the power level of shots, and a visual indicator for player's intended shot path.

![Wireframe](https://raw.githubusercontent.com/etgrieco/minigolf-js/master/docs/images/wireframe.png)

The color scheme of the game should clearly indicate the presence of the ball, hole, and obstacles.

### Technologies
`JavaScript` for game logic
`Matter.js` for the [physics engine](https://github.com/liabru/matter-js)
`Browserfy` for bundling the js files

The primary scripts that will hold the game-logic will be broken up into: 

`physics.js`: this will handle the general game logic for golfing action, including ball motion physics, collision, and ricochet behaviors, and hole-detection.

`materials.js`: this will handle how different game materials (ball, hole, obstacles, etc.) will interact with the physics engine in the former file.

`ui.js`: this will handle the game ui, including user input, and allows all of the game logic to work together to get a basically functioning golf game going. This should also include the basic sounds needed for an immersive game experience.

`levels.js`: once the general game logic works, levels utilizing `materials` will need to be created.

### Implementation Timelinez

**Day 1:** Setup all necessary modules and the general packaging setup, including `Matter.js`. Write an entry file that can load `Matter.js` and other dependencies into the browser easily. Learn the basics of `Matter.js` and choose the specific tools that would be best for my project. Draft 3-5 basic level designs.

Goals:
* Get a green entry-file/bundle working
* Learn Materials.js basics and select tools
* Level design rough drafts

**Day 2:** Dedicate the day to learning `Matter.js` and getting a working physics prototype working. The model does not yet need to incorporate user-input, but the architecture should export this expandability easily.
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

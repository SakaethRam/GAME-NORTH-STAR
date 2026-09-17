# Requirements Document

## 1. Application Overview

### 1.1 Application Name
The Last North Star

### 1.2 Application Description
A 2D arcade-style space shooter game featuring fast-paced combat, star-based level progression, boss battles, and upgrade systems designed for high replayability.

## 2. Users and Usage Scenarios

### 2.1 Target Users
Players who enjoy arcade-style shooting games with progression systems and challenging boss fights.

### 2.2 Core Usage Scenarios
- Progress through star-based levels by defeating enemy waves and bosses
- Unlock and apply upgrades to enhance spaceship capabilities
- Customize hero spaceship design with different shapes, sizes, and color combos
- Replay levels to improve scores and unlock further progression

## 3. Page Structure and Functional Description

### 3.1 Page Structure

```
The Last North Star
├── Device Detection & Orientation Control
│   ├── Mobile/Tablet Under-Construction Overlay
│   └── Forced Landscape View
├── Authentication Page
│   ├── Login
│   ├── Register
│   ├── OAuth Login
│   └── Guest Mode
├── Main Menu
│   ├── Star Map (Level Selection)
│   ├── Custom Design Mode
│   └── Settings
├── Settings Page
│   ├── Upgrades Management
│   ├── Custom BGM Import
│   ├── Controls Details
│   └── Account
├── Custom Design Mode
│   ├── Shape Selection
│   ├── Size Adjustment
│   └── Color Combo Selection
├── Gameplay Screen
│   ├── Combat Area
│   ├── HUD
│   ├── Upgrade Selection (In-Game)
│   └── Pause Menu
└── Results Screen
```

### 3.2 Device Detection & Orientation Control

#### 3.2.1 Mobile/Tablet Under-Construction Overlay
- Detect actual device type on application entry using user agent and touch capabilities detection
- Device detection is based on hardware characteristics, not browser window size
- Desktop devices are never treated as mobile/tablet regardless of window size
- When actual mobile or tablet device is detected, display under-construction overlay in front of Authentication Page
- Overlay covers entire screen with black background
- Display system alert header with text: System Alert
- Display message: The [Mobile/Tablet] Experience is currently under construction. The world of chaos is preparing to arrive on [mobile/tablet] soon.
- Display animated Stay tuned text with Pac-Man animation
- Pac-Man animation includes moving mouth and three dots
- Overlay blocks access to all game functionality
- Overlay uses full viewport height with minimum 100dvh

#### 3.2.2 Forced Landscape View
- Enforce landscape orientation as primary entry point for actual mobile and tablet devices only
- Desktop devices bypass landscape enforcement regardless of window size or aspect ratio
- When actual mobile or tablet device is in portrait orientation, display forced landscape prompt
- Prompt instructs user to rotate device to landscape mode
- Game content only becomes accessible when device is in landscape orientation
- Landscape enforcement applies before under-construction overlay

### 3.3 Authentication Page
- Display game title with visual effects
- Provide login form with email and password fields
- Provide registration form with email and password fields
- Provide OAuth login option using OSS Google Login
- Provide Guest Mode button to skip authentication
- Store user authentication state for registered users
- Allow guest users to play without account creation

### 3.4 Main Menu
- Display game title with visual effects
- Provide access to Star Map, Custom Design Mode, and Settings
- Show player resources and overall progress

### 3.5 Star Map (Level Selection)
- Display stars connected in constellation-style layout
- Show star names and visual themes for each level
- Indicate star status: locked (dimmed), unlocked (glowing), completed (distinct marker)
- Allow player to select unlocked stars to begin level
- Display progression path from one star to another

### 3.6 Custom Design Mode
- Provide interface to customize hero spaceship appearance
- Allow player to select spaceship shape from available options
- Allow player to adjust spaceship size
- Provide color combo selection with three options:
  + Dark green olive with white
  + Matte black with white
  + Default color
- Display preview of customized spaceship
- Apply selected customization to hero spaceship visual appearance in all gameplay sessions
- Save customization settings for authenticated users

### 3.7 Settings Page

#### 3.7.1 Upgrades Management
- Display all available permanent upgrades: increased fire rate, higher damage, improved movement speed, dash cooldown reduction, auto shoot unlock
- Show resource cost for each upgrade
- Allow player to purchase upgrades using earned resources
- Indicate current upgrade status and levels
- Display total resources available

#### 3.7.2 Custom BGM Import
- Provide option to import custom background music from local system (mp3/mp4 format)
- Display list of imported custom BGM files
- Allow player to select which BGM to use during gameplay
- Provide looping toggle control for custom BGM
- Provide volume increase and decrease controls for custom BGM
- Provide play and pause controls for custom BGM
- Custom BGM plays globally across all game screens when enabled
- Provide option to revert to default game music

#### 3.7.3 Controls Details
- Display complete control scheme:
  + Movement: WASD or Arrow Keys
  + Fire: Spacebar (default)
  + Auto Fire: A key (after unlock)
  + Dash: designated key with cooldown indicator
  + Z Power-Up: Z key with cooldown indicator
  + Pause: designated key
- Show visual representation of keyboard layout with highlighted keys
- Display control descriptions for each action

#### 3.7.4 Account
- Display current authentication status: authenticated user or guest user
- For authenticated users, display checkpoint section showing:
  + Total resources earned
  + Purchased upgrades and their levels
  + Unlocked stars and completion status
- Provide delete checkpoint button for authenticated users to clear all progress data
- Provide button to return to Authentication Page
- Store checkpoint data to backend database for authenticated users
- Display message for guest users indicating progress is not saved

### 3.8 Gameplay Screen

#### 3.8.1 Screen Dimensions
- Game screen uses expanded horizontal dimension to provide wider combat area
- Vertical dimension remains unchanged
- Wider playfield allows for more complex enemy formations and movement patterns

#### 3.8.2 Combat Area
- Display hero spaceship controlled by player with applied customization reflecting selected shape, size, and color combo
- Show enemy spaceships in waves with enhanced formations
- Display boss spaceship at end of level
- Render space environment with dynamic backgrounds matching star theme
- Background land width is stretched to fit the expanded horizontal dimension without horizontal repetition
- Show projectiles, explosions, lightning effects, and visual effects

#### 3.8.3 Hero Spaceship Design
- Larger size compared to previous design for increased visual presence
- Edgy angular design with sharp geometric shapes and aggressive silhouette
- Prominent weapon systems and engine details
- Bold contrast between dark and light areas using halftone patterns
- Metallic hybrid feel with streak lines for motion emphasis
- Distinct visual identity that stands out against enemies and background
- Apply player-selected customization: shape, size, and color combo visually rendered in gameplay

#### 3.8.4 Hero Spaceship Control
- Move freely using WASD or arrow keys with smooth responsive movement
- Fire projectiles using Spacebar (default)
- Fire continuously using A key (after unlocking auto shoot upgrade)
- Execute dash movement with short cooldown
- Activate Z Power-Up using Z key when available
- Support future expandable special abilities

#### 3.8.5 Z Power-Up Ability
- Activated by pressing Z key when cooldown is complete
- Destroys all enemy spaceships within hero's range using lightning effect
- Lightning effect visually connects hero to each destroyed enemy
- Can be used against boss spaceships to deal damage
- Has cooldown period after each use
- Cooldown status displayed in HUD

#### 3.8.6 Enemy Spaceships
- Basic enemies: simple movement patterns, low health, worth 10 points when destroyed
- Intermediate enemies: zig-zag or curved movement, fire projectiles at player, worth 20 points when destroyed
- Advanced enemies: shields, burst fire attacks, area control mechanics, worth 20 points when destroyed
- Visually distinct designs with unique silhouettes and glowing patterns
- Enhanced formations: V-shaped formations, circular encirclement patterns, staggered wave formations, pincer attack formations

#### 3.8.7 Boss Spaceships
- Significantly larger with complex layered designs
- Multiple phases with increasing attack complexity
- Attack patterns: spread shots, laser beams, radial bullet patterns, screen control mechanics
- Unique to each star level with visual and behavioral identity
- Can be damaged by Z Power-Up ability
- Worth 50 points when destroyed

#### 3.8.8 HUD
- Display player health
- Display current score
- Display ability indicators (dash cooldown, Z Power-Up cooldown status)
- Use glowing UI elements, thin lines, minimal typography

#### 3.8.9 In-Game Upgrade Selection
- Periodically offer choice between multiple temporary upgrades during gameplay
- Upgrade options: bullet spread, homing shots, chain lightning effects, temporary shields, damage boosts
- Pause gameplay during selection
- Apply selected upgrade immediately

#### 3.8.10 Pause Menu
- Activated by designated pause key
- Display pause menu overlay with buttons:
  + Resume Game
  + Settings Page
  + Upgrade Page
  + Level Map Page
- Pause all gameplay activity when menu is active
- Allow player to navigate to Settings, Upgrades, or Star Map from pause menu

### 3.9 Results Screen
- Display level completion status
- Show score and resources earned
- Provide options to return to Star Map, retry level, or proceed to next star

## 4. Gameplay Rules and Logic

### 4.1 Device Detection Rules
- Detect actual device type on application entry using user agent and touch capabilities detection
- Device detection is based on hardware characteristics, not browser window size or viewport dimensions
- Desktop devices always bypass mobile/tablet restrictions regardless of window size
- Resizing desktop browser window does not trigger mobile/tablet detection
- Only actual mobile and tablet devices trigger forced landscape view and under-construction overlay
- Forced landscape view acts as primary entry point before under-construction overlay for actual mobile/tablet devices
- Under-construction overlay blocks all game functionality for actual mobile and tablet devices only

### 4.2 Authentication Rules
- Registered users can log in with email and password
- OAuth users authenticate through OSS Google Login
- Guest users can play without authentication
- Guest progress is not saved between sessions
- Registered user progress is stored and persists across sessions

### 4.3 Star Progression System
- Total number of levels corresponds to star map system
- Each star represents one level
- Player progresses by completing stars in sequence
- Completing a star unlocks the next star in the path
- Each star has unique name, visual theme, and difficulty scaling

### 4.4 Level Structure and Completion
- Each star level contains a fixed number of underling enemies and exactly 1 boss
- First level contains starting amount of underlings
- Each subsequent level contains starting amount + 5 additional underlings
- Underlings stop spawning once the level's fixed limit is reached
- To complete a level, player must defeat all underling enemies and the boss
- When all underlings and boss are defeated, display completion message: Successfully safeguarded the <star_name>
- After completion message, next level is unlocked and player is returned to Star Map

### 4.5 Combat Mechanics
- Hero spaceship fires projectiles that damage enemies
- Enemy projectiles damage hero spaceship
- Collision with enemies damages hero spaceship
- Dash movement provides brief invulnerability or increased speed
- Z Power-Up destroys all enemies within range using lightning effect
- Z Power-Up can damage boss spaceships
- Hero spaceship is destroyed when health reaches zero

### 4.6 Z Power-Up Mechanics
- Z Power-Up has cooldown period after each use
- When activated, lightning effect appears from hero to all enemies within range
- All affected enemies are instantly destroyed
- Boss spaceships take damage from Z Power-Up but are not instantly destroyed
- Cooldown status is displayed in HUD
- Z Power-Up cannot be used while on cooldown

### 4.7 Scoring System
- Basic underling enemies award 10 points when destroyed
- Shooter underling enemies (intermediate/advanced) award 20 points when destroyed
- Boss enemies award 50 points when destroyed
- Score is displayed in HUD during gameplay
- Total score is shown on Results Screen after level completion

### 4.8 Resource and Progression
- Players earn resources during gameplay by defeating enemies
- Resources are used to purchase permanent upgrades
- Upgrades persist across all levels and game sessions

### 4.9 Difficulty Scaling
- Early stars: easier difficulty, gradual mechanic introduction
- Later stars: increased enemy density, attack complexity, and speed
- Each level contains starting amount + 5 additional underlings per level progression

### 4.10 Boss Fight Phases
- Boss health divided into phases
- Each phase triggers different attack patterns
- Attack complexity increases with each phase
- Boss defeated when all phases completed
- Upon boss defeat after all underlings eliminated, level completion message displays before transitioning to Star Map

### 4.11 Custom BGM Rules
- Player can import audio files (mp3/mp4 format) from local system
- Imported BGM replaces default game music during gameplay
- Custom BGM can be set to loop continuously
- Player can adjust custom BGM volume using increase and decrease controls
- Player can play or pause custom BGM at any time
- Custom BGM plays globally across all game screens when enabled
- Player can switch between custom and default music in Settings
- Custom BGM applies to all gameplay sessions until changed

### 4.12 Custom Design Rules
- Player can customize hero spaceship shape, size, and color combo in Custom Design Mode
- Three color combo options available: dark green olive with white, matte black with white, default color
- Selected customization visually applies to hero spaceship appearance in all gameplay sessions
- Customization settings are saved for authenticated users
- Guest users can customize but settings are not saved between sessions

### 4.13 Visual Design Rules
- All assets use 2D perspective without 3D models
- Apply halftone dot patterns across all visual elements
- Use comic-style shading with bold contrast between light and shadow areas
- Apply grain and noise overlays to create texture depth
- Color palette: dark olive, black, and off-white as primary colors
- Incorporate sharp streak lines for motion effects and star sparkles for highlights
- Combine matte and metallic hybrid feel across spaceships and UI elements
- Environment backgrounds include subtle motion (drifting particles, parallax effects) with halftone and grain treatment
- Background land width stretches to fit expanded horizontal game screen dimension without horizontal repetition
- Each star level has slightly different background theme (nebula variations, color shifts, cosmic anomalies) while maintaining consistent visual style
- Lightning effects for Z Power-Up use bright electric visual style with branching patterns

### 4.14 Sound Design
- Responsive shooting effects when firing projectiles
- Explosion sounds when enemies are destroyed
- Lightning sound effect when Z Power-Up is activated
- UI feedback sounds for menu interactions and upgrade selections
- Background music dynamically increases intensity during heavy combat and boss fights

### 4.15 Progress Data Storage
- Authenticated users have progress data stored to backend database
- Progress data includes: total resources, purchased upgrades and levels, unlocked stars, completed stars, custom design settings
- Progress data persists across sessions and devices for authenticated users
- Guest users have no progress data stored
- Authenticated users can delete all progress data from Account tab in Settings

### 4.16 Pause Menu Navigation
- Player can access pause menu during gameplay using designated pause key
- From pause menu, player can navigate to Settings Page, Upgrade Page, or Level Map Page
- Returning from these pages resumes gameplay at paused state

### 4.17 Enemy Formation Rules
- Enemy formations include: V-shaped formations, circular encirclement patterns, staggered wave formations, pincer attack formations
- Formation complexity increases with star progression
- Formations utilize expanded horizontal game screen dimension

## 5. Exceptions and Edge Cases

| Scenario | Handling |
|----------|----------|
| Actual mobile or tablet device detected | Display forced landscape view, then under-construction overlay |
| Desktop device detected | Bypass device restrictions, proceed to Authentication Page |
| Desktop browser window resized to small dimensions | No mobile/tablet restrictions triggered, game remains fully accessible |
| Device rotated to portrait on actual mobile/tablet | Display forced landscape prompt |
| Device rotated to landscape on actual mobile/tablet | Under-construction overlay remains active |
| Player health reaches zero | Hero spaceship destroyed, level fails, return to Results Screen |
| Boss defeated with underling enemies remaining | Boss defeated but level not completed, player continues fighting remaining underlings |
| All underlings defeated with boss remaining | Player continues fighting boss until boss is defeated |
| All underlings and boss defeated | Display completion message Successfully safeguarded the <star_name>, then level completes, next level unlocks, player returns to Star Map |
| Fixed number of underlings reached | Underlings stop spawning, no additional underlings appear |
| Player attempts to select locked star | No action, star remains locked |
| Player has insufficient resources for upgrade | Upgrade cannot be purchased, display insufficient resources indicator |
| Dash ability on cooldown | Dash input ignored until cooldown completes |
| Z Power-Up on cooldown | Z key input ignored until cooldown completes |
| Z Power-Up activated with no enemies in range | Power-Up activates, cooldown begins, no enemies destroyed |
| Z Power-Up used on boss | Boss takes damage, not instantly destroyed |
| Auto shoot not yet unlocked | A key has no effect, only Spacebar fires projectiles |
| Player pauses during boss fight | Gameplay pauses, music intensity maintained |
| Guest user closes game | Progress is lost, no data saved |
| Registered user closes game | Progress is saved, restored on next login |
| Invalid custom BGM file format | Display error message, file not imported |
| No custom BGM imported | Default game music plays |
| OAuth authentication fails | Display error message, return to authentication page |
| Custom BGM volume set to zero | Audio muted, playback continues |
| Custom BGM paused | Audio stops, can be resumed from pause point |
| Authenticated user deletes checkpoint | All progress data cleared from database, player returns to initial state |
| Guest user attempts to view checkpoint | Display message indicating progress not saved for guest users |
| Player navigates to Settings from pause menu | Settings page opens, gameplay remains paused |
| Player navigates to Upgrade page from pause menu | Upgrade page opens, gameplay remains paused |
| Player navigates to Level Map from pause menu | Star Map opens, current level progress is saved |
| Player clicks return to Auth page button | Player is logged out and returned to Authentication Page |
| Guest user customizes spaceship design | Customization applies to current session, not saved after closing game |
| Authenticated user customizes spaceship design | Customization saved to backend database, persists across sessions |

## 6. Acceptance Criteria

1. Player opens game on desktop device and directly accesses Authentication Page
2. Player on desktop selects Guest Mode or completes authentication using OSS Google Login to access Main Menu
3. Player enters Custom Design Mode and selects spaceship shape, size, and color combo from available options
4. Player launches game from Star Map and controls customized hero spaceship with visually applied custom design to defeat fixed number of underling enemies
5. Player defeats all underlings and boss to complete level
6. Upon defeating all enemies, completion message Successfully safeguarded the <star_name> displays
7. After completion message, next level is unlocked and player is returned to Star Map
8. Player presses Z key to activate Z Power-Up, destroying all enemies within range using lightning effect
9. Authenticated player views checkpoint data in Account tab showing unlocked and completed stars

## 7. Out of Scope for Current Version

- Multiplayer or co-op modes
- Leaderboards or online score tracking
- Story mode or narrative elements
- Character customization beyond shape, size, and color combo selection
- Achievement system
- Tutorial or guided introduction
- Save game cloud synchronization
- Difficulty selection options
- Replay or recording features
- In-game shop with premium currency
- Daily challenges or time-limited events
- Password recovery or account management features
- Social media OAuth options beyond Google
- Audio file format conversion for custom BGM
- Volume controls or audio mixing settings beyond custom BGM controls
- Upgradeable or customizable Z Power-Up effects
- Full mobile and tablet gameplay support
- Endless mode or infinite wave gameplay
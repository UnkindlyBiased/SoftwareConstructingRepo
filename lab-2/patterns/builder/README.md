# Builder pattern

The code is splitted into few classes and interfaces, which are located in the following folders:

## Abstraction

- ```ICharacterBuilder```: interface created with sole purpose of defining the functions for builder classes
- ```Character```: interface with common properties of character: hair color, eye color, sex and weapon

## Classes

- ```Enemy```
- ```EnemyBuilder```
- ```Hero```
- ```HeroBuilder```

## Utils

Contains types that are needed for defining characters

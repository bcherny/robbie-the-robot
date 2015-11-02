const BOARD_SIZE = [10, 10]
const MAX_ACTIONS_PER_GENERATION = 200
const MAX_POPULATION_SIZE = 200
const NUM_GENERATIONS = 1000
const NUM_CLEANING_SESSIONS = 100 // used to calculate fitness
const ACTIONS = [
	'MOVE_NORTH',
	'MOVE_SOUTH',
	'MOVE_EAST',
	'MOVE_WEST',
	'MOVE_RANDOM',
	'STAY_PUT',
	'PICK_UP_CAN'
]
const CAN_REWARD = 10
const NO_CAN_FINE = -1
const WALL_CRASH_FINE = -5

class Game {

	constructor (width, height) {
		this.board = new Board(width, height)
	}

	placeRobot () {

	}

}

class Board {

	constructor (width, height) {
		this.width = width
		this.height = height
	}

	generateTiles () {

	}

	generateCans () {

	}

	getLeft (coords) {
	}

}

class VisionStrategy {

	look (coords, board) {
		return [
			board.getLeft(coords),
			board.getRight(coords),
			board.getAbove(coords),
			board.getBelow(coords)
		]
	}

}

class Robot {

	checkSurroundings () {

	}

	move () {

	}

}
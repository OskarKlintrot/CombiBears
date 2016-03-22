const CONSTANTS = {}

CONSTANTS.SRC_TO_IMAGES = {
  SOFAS: {
    2: 'public/pics/sofas/two.svg',
    3: 'public/pics/sofas/three.svg',
    4: 'public/pics/sofas/four.svg'
  },
  SEATS: {
    STOOL: 'public/pics/seats/stool.svg'
  },
  ICONS: {
    ARROW_LEFT: 'public/pics/icons/arrow-left.svg',
    ARROW_RIGHT: 'public/pics/icons/arrow-right.svg',
    HELP: 'public/pics/icons/help.svg',
    NEW_SOFA: 'public/pics/icons/new-sofa.svg',
    RESTART: 'public/pics/icons/restart.svg',
    SCREENSHOT: 'public/pics/icons/screenshot.svg',
    SHOW_RESULT: 'public/pics/icons/show-result.svg',
    START: 'public/pics/icons/start.svg',
    VIEW_SAVED_PERMUTATIONS: 'public/pics/icons/view-saved-permutations.svg'
  },
  BEARS: {
    BLUE: 'public/pics/bears/blue.png',
    BROWN: 'public/pics/bears/brown.png',
    GREEN: 'public/pics/bears/green.png',
    ORANGE: 'public/pics/bears/orange.png',
    PINK: 'public/pics/bears/pink.png',
    PURPLE: 'public/pics/bears/purple.png',
    RED: 'public/pics/bears/red.png',
    WHITE: 'public/pics/bears/white.png',
    YELLOW: 'public/pics/bears/yellow.png',
    PLACEHOLDER: 'public/pics/icons/new.svg'
  },
  ACCESSORIES: {
    BLUE: 'public/pics/accessories/flower.svg',
    BROWN: 'public/pics/accessories/scarf.svg',
    GREEN: 'public/pics/accessories/pacifier.svg',
    ORANGE: 'public/pics/accessories/necklace.svg',
    PINK: 'public/pics/accessories/bowtie.svg',
    PURPLE: 'public/pics/accessories/tie.svg',
    RED: 'public/pics/accessories/hat.svg',
    YELLOW: 'public/pics/accessories/crown.svg'
  },
  SPEECHBUBBLES: {
    1: 'public/pics/icons/colorpicker-bkgr-outlined-talk-bubble-1.svg',
    2: 'public/pics/icons/colorpicker-bkgr-outlined-talk-bubble-2.svg',
    3: 'public/pics/icons/colorpicker-bkgr-outlined-talk-bubble-3.svg',
    4: 'public/pics/icons/colorpicker-bkgr-outlined-talk-bubble-4.svg'
  },
  LOGOTYPE: 'public/pics/logotype.png',
  LOGOTYPE_SIMPLE: 'public/pics/logotype_no_bear.png'
}

CONSTANTS.COLORS = {
  BLUE: 'BLUE',
  BROWN: 'BROWN',
  GREEN: 'GREEN',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  PURPLE: 'PURPLE',
  RED: 'RED',
  YELLOW: 'YELLOW',
  PLACEHOLDER: 'PLACEHOLDER'
}

CONSTANTS.ROUTES = {
  START: '/',
  GAME: '/game',
  RESULTS: '/results'
}

CONSTANTS.COMPONENT_NAMES = {
  BEAR: 'teddybear',
  STARTING_AREA: 'StartingArea',
  SOFA: 'Sofa',
  GAME_SCENE: 'GameScene'
}

CONSTANTS.COLORS_ENUM = {
  0: CONSTANTS.COLORS.BLUE,
  1: CONSTANTS.COLORS.BROWN,
  2: CONSTANTS.COLORS.GREEN,
  3: CONSTANTS.COLORS.ORANGE,
  4: CONSTANTS.COLORS.PINK,
  5: CONSTANTS.COLORS.PURPLE,
  6: CONSTANTS.COLORS.RED,
  7: CONSTANTS.COLORS.YELLOW,
  8: CONSTANTS.COLORS.PLACEHOLDER // Must be the last element!!!
}

CONSTANTS.BEAR_TO_IGNORE = CONSTANTS.COLORS.PLACEHOLDER

CONSTANTS.BG_FILTER = 'blur(1px) grayscale(0.2) brightness(0.9)'

CONSTANTS.SESSION_STORAGE = {
  DEV: 'CombiBearsDev',
  PROD: 'CombiBears'
}

export default Object.freeze( CONSTANTS )

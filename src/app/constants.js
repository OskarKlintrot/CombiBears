const CONSTANTS = {
  SRC_TO_IMAGES: {
    SOFAS: {
      2: 'public/pics/sofas/two.svg',
      3: 'public/pics/sofas/three.svg',
      4: 'public/pics/sofas/four.svg'
    },
    ICONS: {
      ARROW_LEFT: 'public/pics/icons/arrow-left.svg',
      ARROW_RIGHT: 'public/pics/icons/arrow-right.svg',
      CONTINUE: 'public/pics/icons/continue.svg',
      INFO: 'public/pics/icons/info.svg',
      NEW_SOFA: 'public/pics/icons/new-sofa.svg',
      RESTART: 'public/pics/icons/restart.svg',
      SAVE_PERMUTATION: 'public/pics/icons/save-permutation.svg',
      SCREENSHOT: 'public/pics/icons/screenshot.svg',
      SHOW_RESULT: 'public/pics/icons/show-result.svg',
      SHOW_SOLUTION: 'public/pics/icons/show-solution.svg',
      START: 'public/pics/icons/start.svg'
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
      YELLOW: 'public/pics/bears/yellow.png'
    },
    LOGOTYPE: 'public/pics/logotype.png'
  },
  COLORS: {
    BLUE: 'BLUE',
    BROWN: 'BROWN',
    GREEN: 'GREEN',
    ORANGE: 'ORANGE',
    PINK: 'PINK',
    PURPLE: 'PURPLE',
    RED: 'RED',
    YELLOW: 'YELLOW',
    WHITE: 'WHITE',
    PLACEHOLDER: 'PLACEHOLDER'
  },
  ROUTES: {
    START: '/',
    GAME: '/game',
    SAVED: '/saved',
    RESULTS: '/results'
  },
  COMPONENT_NAMES: {
    BEAR: 'teddybear',
    STARTING_AREA: 'StartingArea',
    SOFA: 'Sofa'
  }
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
  8: CONSTANTS.COLORS.WHITE,
  9: CONSTANTS.COLORS.PLACEHOLDER
}

export default Object.freeze( CONSTANTS )

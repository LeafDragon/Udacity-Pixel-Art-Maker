/**
 * @author Frank Dip
 * @desc Clearing out most of the vanilla JS.
 * Cleaned up some comments unnecessary code
 * TODO: Switch from forEach() to jquery each() method. jQuery is faster.
 * TODO: Finishing building the help model object
 * TODO: Clean up the help button with jQuery each() method
 * TODO: Convert the art to art2 encoding in the pixel object
 * @version 2.1
 */

/********************************************//**
 *   DOM selectors using jQuery
 ***********************************************/
const $headerNav = $("#js-upam--header--nav");
const $headerNavDelete = $("#js-upam-header--nav--btn---delete");
const $headerNavHelp = $("#js-upam-header--nav--btn---help");
const $formSizePicker = $("#js-size-picker");
const $inputWidth = $("#js-input-width");
const $inputHeight = $("#js-input-height");

// Color section
const $colorPicker = $("#js-main-nav-color-picker-input");
const $colorDisplayRGB = $("#js-main-nav-color-picker-rgb");
const $colorDisplayHex = $("#js-main-nav-color-picker-hex");

// Tool section
const $toolPaint = $("#js-main-nav-tool-paint");
const $toolDipper = $("#js-main-nav-tool-dipper");
const $toolErase = $("#js-main-nav-tool-eraser");

// Emoji section
const $emojiPickerErase = $("#js-main-nav-emoji-picker-erase");
const $emojiPickerSmile = $("#js-main-nav-emoji-picker-smile");
const $emojiPickerGrin = $("#js-main-nav-emoji-picker-grin");
const $emojiPickerTears = $("#js-main-nav-emoji-picker-tears");

const $pixelCanvas = $("#js-upam-canvas--table");

/********************************************//**
 *  Model Code
 ***********************************************/

const helpMessageArray = [
  "Delete: Click the delete button to delete the table's elements."
];

const pixel = [
  {
    name: "Plain",
    width: 15,
    height: 15,
    idEmoji: "js-main-nav-emoji-picker-none",
    color: {
      picker: "#000000",
      background: "#FFFFFF"
    }
  },
  //Pikachu
  {
    name: "ピカチュー",
    width: 28,
    height: 24,
    idEmoji: "js-main-nav-emoji-picker-none",
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      [//row 1
        {td: 1, color: "#000000"},
        {td: 2, color: "#000000"},
        {td: 27, color: "#000000"},
        {td: 28, color: "#000000"}
      ],
      [//row 2
        {td: 1, color: "#000000"},
        {td: 2, color: "#000000"},
        {td: 3, color: "#000000"},
        {td: 4, color: "#000000"},
        {td: 25, color: "#000000"},
        {td: 26, color: "#000000"},
        {td: 27, color: "#000000"},
        {td: 28, color: "#000000"}
      ],
      [//row 3
        {td: 1, color: "#000000"},
        {td: 2, color: "#000000"},
        {td: 3, color: "#000000"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#000000"},
        {td: 24, color: "#000000"},
        {td: 25, color: "#FFEA00"},
        {td: 26, color: "#000000"},
        {td: 27, color: "#000000"},
        {td: 28, color: "#000000"}
      ],
      [//row 4
        {td: 1, color: "#000000"},
        {td: 2, color: "#000000"},
        {td: 3, color: "#000000"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#000000"},
        {td: 7, color: "#000000"},
        {td: 22, color: "#000000"},
        {td: 23, color: "#000000"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#FFEA00"},
        {td: 26, color: "#000000"},
        {td: 27, color: "#000000"},
        {td: 28, color: "#000000"}
      ],
      [//row 5
        {td: 2, color: "#000000"},
        {td: 3, color: "#000000"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#000000"},
        {td: 21, color: "#000000"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#FFEA00"},
        {td: 26, color: "#000000"},
        {td: 27, color: "#000000"},
      ],
      [//row 6
        {td: 2, color: "#000000"},
        {td: 3, color: "#000000"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#000000"},
        {td: 10, color: "#000000"},
        {td: 13, color: "#000000"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#000000"},
        {td: 19, color: "#000000"},
        {td: 20, color: "#000000"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#FFEA00"},
        {td: 26, color: "#000000"},
        {td: 27, color: "#000000"},
      ],
      [//row 7
        {td: 3, color: "#000000"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#000000"},
        {td: 12, color: "#000000"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#000000"},
        {td: 18, color: "#000000"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#FFEA00"},
        {td: 26, color: "#000000"}
      ],
      [//row 8
        {td: 4, color: "#000000"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#000000"}
      ],
      [//row 9
        {td: 4, color: "#000000"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#000000"}
      ],
      [//row 10
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#000000"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#000000"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 11
        {td: 6, color: "#000000"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#000000"}
      ],
      [//row 12
        {td: 6, color: "#000000"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#000000"}
      ],
      [//row 13
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#000000"},
        {td: 9, color: "#000000"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#000000"},
        {td: 21, color: "#000000"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 14
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#000000"},
        {td: 8, color: "#FFFFFF"},
        {td: 9, color: "#000000"},
        {td: 10, color: "#000000"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#000000"},
        {td: 20, color: "#000000"},
        {td: 21, color: "#FFFFFF"},
        {td: 22, color: "#000000"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 15
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#000000"},
        {td: 8, color: "#000000"},
        {td: 9, color: "#000000"},
        {td: 10, color: "#000000"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#000000"},
        {td: 20, color: "#000000"},
        {td: 21, color: "#000000"},
        {td: 22, color: "#000000"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 16
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#000000"},
        {td: 9, color: "#000000"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#000000"},
        {td: 21, color: "#000000"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 17
        {td: 4, color: "#000000"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FF0000"},
        {td: 8, color: "#FF0000"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FF0000"},
        {td: 22, color: "#FF0000"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#000000"}
      ],
      [//row 18
        {td: 4, color: "#000000"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FF0000"},
        {td: 7, color: "#FF0000"},
        {td: 8, color: "#FF0000"},
        {td: 9, color: "#FF0000"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#000000"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#000000"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FF0000"},
        {td: 21, color: "#FF0000"},
        {td: 22, color: "#FF0000"},
        {td: 23, color: "#FF0000"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#000000"}
      ],
      [//row 19
        {td: 4, color: "#000000"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FF0000"},
        {td: 7, color: "#FF0000"},
        {td: 8, color: "#FF0000"},
        {td: 9, color: "#FF0000"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#000000"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#000000"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FF0000"},
        {td: 21, color: "#FF0000"},
        {td: 22, color: "#FF0000"},
        {td: 23, color: "#FF0000"},
        {td: 24, color: "#FFEA00"},
        {td: 25, color: "#000000"}
      ],
      [//row 20
        {td: 5, color: "#000000"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FF0000"},
        {td: 8, color: "#FF0000"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#000000"},
        {td: 14, color: "#FF0000"},
        {td: 15, color: "#FF0000"},
        {td: 16, color: "#000000"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FF0000"},
        {td: 22, color: "#FF0000"},
        {td: 23, color: "#FFEA00"},
        {td: 24, color: "#000000"}
      ],
      [//row 21
        {td: 6, color: "#000000"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#000000"},
        {td: 14, color: "#FF0000"},
        {td: 15, color: "#FF0000"},
        {td: 16, color: "#000000"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#FFEA00"},
        {td: 22, color: "#FFEA00"},
        {td: 23, color: "#000000"}
      ],
      [//row 22
        {td: 7, color: "#000000"},
        {td: 8, color: "#000000"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"},
        {td: 21, color: "#000000"},
        {td: 22, color: "#000000"}
      ],
      [//row 23
        {td: 9, color: "#000000"},
        {td: 10, color: "#000000"},
        {td: 11, color: "#000000"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#000000"},
        {td: 19, color: "#000000"},
        {td: 20, color: "#000000"}
      ],
      [//row 24
        {td: 12, color: "#000000"},
        {td: 13, color: "#000000"},
        {td: 14, color: "#000000"},
        {td: 15, color: "#000000"},
        {td: 16, color: "#000000"},
        {td: 17, color: "#000000"},
      ]
    ]
  },
  //Pokeball using art2 encoding
  {
    name: "Pokeball",
    width: 14,
    height: 14,
    idEmoji: "js-main-nav-emoji-picker-none",
    color: {
      picker: "#FF0000",
      background: "#FF0000"
    },
    art2: [
      {
        color: "#000000",
        pixel: [
          {tr: 1, td: 6},
          {tr: 1, td: 7},
          {tr: 1, td: 8},
          {tr: 1, td: 9},
          {tr: 2, td: 4},
          {tr: 2, td: 5},
          {tr: 2, td: 10},
          {tr: 2, td: 11},
          {tr: 3, td: 3},
          {tr: 3, td: 12},
          {tr: 4, td: 2},
          {tr: 4, td: 13},
          {tr: 5, td: 2},
          {tr: 5, td: 13},
          {tr: 6, td: 1},
          {tr: 6, td: 7},
          {tr: 6, td: 8},
          {tr: 6, td: 14},
          {tr: 7, td: 1},
          {tr: 7, td: 6},
          {tr: 7, td: 9},
          {tr: 7, td: 14},
          {tr: 8, td: 1},
          {tr: 8, td: 2},
          {tr: 8, td: 3},
          {tr: 8, td: 4},
          {tr: 8, td: 5},
          {tr: 8, td: 6},
          {tr: 8, td: 9},
          {tr: 8, td: 10},
          {tr: 8, td: 11},
          {tr: 8, td: 12},
          {tr: 8, td: 13},
          {tr: 8, td: 14},
          {tr: 9, td: 1},
          {tr: 9, td: 7},
          {tr: 9, td: 8},
          {tr: 9, td: 14},
          {tr: 10, td: 2},
          {tr: 10, td: 13},
          {tr: 11, td: 2},
          {tr: 11, td: 13},
          {tr: 12, td: 3},
          {tr: 12, td: 12},
          {tr: 13, td: 4},
          {tr: 13, td: 5},
          {tr: 13, td: 10},
          {tr: 13, td: 11},
          {tr: 14, td: 6},
          {tr: 14, td: 7},
          {tr: 14, td: 8},
          {tr: 14, td: 9}
        ]
      },
      {
        color: "#FF0000",
        pixel: [
          {tr: 2, td: 6},
          {tr: 2, td: 7},
          {tr: 2, td: 8},
          {tr: 2, td: 9},
          {tr: 3, td: 4},
          {tr: 3, td: 5},
          {tr: 3, td: 6},
          {tr: 3, td: 7},
          {tr: 3, td: 8},
          {tr: 3, td: 9},
          {tr: 3, td: 10},
          {tr: 3, td: 11},
          {tr: 4, td: 3},
          {tr: 4, td: 4},
          {tr: 4, td: 5},
          {tr: 4, td: 6},
          {tr: 4, td: 7},
          {tr: 4, td: 8},
          {tr: 4, td: 9},
          {tr: 4, td: 10},
          {tr: 4, td: 11},
          {tr: 4, td: 12},
          {tr: 5, td: 3},
          {tr: 5, td: 4},
          {tr: 5, td: 5},
          {tr: 5, td: 6},
          {tr: 5, td: 7},
          {tr: 5, td: 8},
          {tr: 5, td: 9},
          {tr: 5, td: 10},
          {tr: 5, td: 11},
          {tr: 5, td: 12},
          {tr: 6, td: 2},
          {tr: 6, td: 3},
          {tr: 6, td: 4},
          {tr: 6, td: 5},
          {tr: 6, td: 6},
          {tr: 6, td: 9},
          {tr: 6, td: 10},
          {tr: 6, td: 11},
          {tr: 6, td: 12},
          {tr: 6, td: 13},
          {tr: 7, td: 2},
          {tr: 7, td: 3},
          {tr: 7, td: 4},
          {tr: 7, td: 5},
          {tr: 7, td: 10},
          {tr: 7, td: 11},
          {tr: 7, td: 12},
          {tr: 7, td: 13}
        ]
      }
    ]
  },
  //Smile emoji
  {
    name: "Smile",
    text: "😊",
    width: 20,
    height: 20,
    idEmoji: "js-main-nav-emoji-picker-smile",
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      [//row 1
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ],
      [//row 2
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 3
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 4
        {td: 2, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 5 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 6 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#9E9E9E"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#9E9E9E"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 7 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 8
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 9
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 10
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 11 mouth top
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 12
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 13
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 14
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 15
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 16
        {td: 1, color: "#FFEA00"},
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 17
        {td: 2, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 18
        {td: 3, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 19
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 20
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ]
    ]
  },
  //Smiling Teeth Emoji
  {
    name: "Smiling Teeth",
    text: "😁",
    width: 20,
    height: 20,
    idEmoji: "js-main-nav-emoji-picker-grin",
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      [//row 1
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ],
      [//row 2
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 3
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 4
        {td: 2, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 5 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 6 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#9E9E9E"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#9E9E9E"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 7 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 8
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 9
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 10
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 11 mouth top
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 12
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 13
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 14
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 15
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 16
        {td: 1, color: "#FFEA00"},
        {td: 4, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 17
        {td: 2, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 18
        {td: 3, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 19
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 20
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ]
    ]
  },
  //Tears Emoji
  {
    name: "Tears",
    text: "😂",
    width: 20,
    height: 20,
    idEmoji: "js-main-nav-emoji-picker-tears",
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      [//row 1
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ],
      [//row 2
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 3
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 4
        {td: 2, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 5 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 6 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#9E9E9E"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#9E9E9E"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 7 eyes
        {td: 1, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 8
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#18FFFF"}, //tear
        {td: 18, color: "#18FFFF"}, //tear
        {td: 20, color: "#FFEA00"}
      ],
      [//row 9
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 10
        {td: 1, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 11 mouth top
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 4, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 12
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 13
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 14
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 15
        {td: 1, color: "#FFEA00"},
        {td: 3, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 16
        {td: 1, color: "#FFEA00"},
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"},
        {td: 20, color: "#FFEA00"}
      ],
      [//row 17
        {td: 2, color: "#FFEA00"},
        {td: 5, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"},
        {td: 19, color: "#FFEA00"}
      ],
      [//row 18
        {td: 3, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 18, color: "#FFEA00"}
      ],
      [//row 19
        {td: 1, color: "#18FFFF"}, //tear
        {td: 4, color: "#FFEA00"},
        {td: 17, color: "#FFEA00"}
      ],
      [//row 20
        {td: 5, color: "#FFEA00"},
        {td: 6, color: "#FFEA00"},
        {td: 7, color: "#FFEA00"},
        {td: 8, color: "#FFEA00"},
        {td: 9, color: "#FFEA00"},
        {td: 10, color: "#FFEA00"},
        {td: 11, color: "#FFEA00"},
        {td: 12, color: "#FFEA00"},
        {td: 13, color: "#FFEA00"},
        {td: 14, color: "#FFEA00"},
        {td: 15, color: "#FFEA00"},
        {td: 16, color: "#FFEA00"}
      ]
    ]
  }
];

/********************************************//**
 *  Model Functions
 ***********************************************/

/**
 * @desc Converts rgb to hex
 * @param {string} color_value Takes a string in rgb format
 */
function rgba2hex( color_value ) {
	if ( ! color_value ) return false;
	let parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
	    length = color_value.indexOf('rgba') ? 3 : 2; // Fix for alpha values
	delete(parts[0]);
	for ( var i = 1; i <= length; i++ ) {
		parts[i] = parseInt( parts[i] ).toString(16);
		if ( parts[i].length == 1 ) parts[i] = '0' + parts[i];
	}
	return '#' + parts.join('').toUpperCase(); // #F7F7F7
}

/**
 * @desc Change hex to rgb
 * @param {string} hex Takes a string in hex format
 */
function hexToRgb(h) {
  const r = parseInt((cutHex(h)).substring(0,2),16),
      g = parseInt((cutHex(h)).substring(2,4),16),
      b = parseInt((cutHex(h)).substring(4,6),16)

  return `rgb(${r},${g},${b})`;
}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

 /********************************************//**
  *  Controller Code
  ***********************************************/

/**
 * @desc jQurey Ready Function shorthand.
 * Calls the makeGrid on ready.
 * Fills in art pattern from the model
 */
$(_ => {
  pixel.forEach(ele => makeNavBtn(ele));
  drawPixel(pixel[1]);
});

/**
 * @desc Deletes the table's children elements.
 * Uses the confirm popup to ask for deletion.
 */
$headerNavDelete.click(_ => {
  let con = confirm("Do you want to delete the table elements?");
  if (!con) return;
  clearTableChildren();
});

$headerNavHelp.click(_ => {
  let newLine = "\n\n";
  let helpDelete = "Click the delete button to delete the table's elements.";
  let helpSmile = "Click the smile button to create a smile pixel art and new canvas."
  let helpSmilingTeeth = "Click the smiling teeth button to create a smiling teeth pixel art and new canvas."
  let helpTears = "Click the tears button to create a tears pixel art and new canvas.";
  let helpSize = "Change width and height. Width is between and including 1 to 40.";
  let helpSubmit = "Click the submit button to create the table. Click submit again to create a blank canvas again.";
  let helpColor = "Click the color button to change color being painted in.";
  let helpEmoji = "Select an emoji or no emoji to paint in.";

  alert(helpDelete + newLine +
        helpSmile + newLine +
        helpSmilingTeeth + newLine +
        helpTears + newLine +
        helpSubmit + newLine +
        helpColor + newLine +
        helpEmoji);
});

/**
 * @desc Listens for a submit on the form.
 * Calls the makeGrid
 *
 * @param {event} evt The evt is to prevent the table going back to default.
 */
$formSizePicker.on("submit", evt => {
  evt.preventDefault();
  setTable($inputWidth.val(), $inputHeight.val());
});

/**
 * @desc Listens for the change on the color picker to display rgb and hex.
 */
$colorPicker.on("change", _ => {
  displayColorRGBHex($colorPicker.val(), $colorPicker.val());
});

/**
 * @desc Allows you to draw on the grid.
 * You click and hold to draw a line.
 * Updates model with color.
 *
 * @param {event} mousedown Listens for the mouse down event
 * @param {evetn} mouseover Listens for the mouse over event
 * @this {td} Selects the td element
 */
$pixelCanvas.on("mousedown mouseover", "td", e => {
  if (e.which === 1) {
    if ($toolPaint.is(":checked") === true) {
      $(e.target).css("background", $colorPicker.val());
    } else if ($toolDipper.is(":checked") === true) {
      const hex = rgba2hex($(e.target).css("background-color"));
      $colorPicker.val(hex);
      displayColorRGBHex($(e.target).css("background-color"), hex);
    } else if ($toolErase.is(":checked") === true) {
      $(e.target).removeAttr("style");
    }

    // Can't use saved DOM selectors or it won't check the changed value
    if ($("input[name='upam-emoji']:checked").val() !== "none" &&
        $("input[name='upam-emoji']:checked").val() !== "erase") {
      $(e.target).text($("input[name='upam-emoji']:checked").val());
    } else if ($("input[name='upam-emoji']:checked").val() === "erase") {
      $(e.target).text("");
    }
  }
});

/**
 * @desc Double click to erase
 */
$pixelCanvas.on("dblclick", "td", e => {
  $(e.target).removeAttr("style");
  $(e.target).text("");
});

 /********************************************//**
  *  View Code
  ***********************************************/

/**
 * @desc Makes the nav buttons at the top in the header
 * @param {object} obj Takes an object to build the button
 */
function makeNavBtn(obj) {
  const btn = document.createElement("button");
  const textNode = document.createTextNode(obj.hasOwnProperty("text") ? `${obj.text} ${obj.name}` : `${obj.name}`);

  btn.classList.add("upam-header--nav--btn");
  btn.type = "button";
  btn.addEventListener("click", e => {
    e.preventDefault();
    drawPixel(obj);
  });
  btn.style.backgroundColor = obj.color.background;
  btn.appendChild(textNode);

  $headerNav.append(btn);
}

/**
 * @desc Displays the color selected as rgb and hex
 * @param {string} rgb Takes a string in rgb format
 * @param {string} hex Takes a string in hex format
 */
function displayColorRGBHex(rgb, hex) {
  $colorDisplayRGB.text(rgb);
  $colorDisplayHex.text(hex.toUpperCase());
}

/**
 * @desc Clears the table of children elements.
 * Changed from children().remove() to empty() method
 */
function clearTableChildren() {
  $pixelCanvas.empty();
}

/**
 * @desc Creates the grid from the submitted values.
 * Uses a tbody element to store newly created rows and cols.
 * Clears the table with clearTableChildren() function.
 * Appends the tbody element to table#js-pixel-canvas.
 *
 * @param {number} width Sets the width of the table
 * @param {number} height Sets the height of the table
 */
function setTable(width, height) {
  const tbody = document.createElement("tbody");

  clearTableChildren();

  for (let i = 0; i < height; i++) {
    const row = tbody.insertRow(i);
    for (let j = 0; j < width; j++) {
      row.insertCell(j);
    }
  }

  $pixelCanvas.append(tbody);
}

/**
 * @desc Changes the values of the width and height input form.
 * Changes the selected emoji.
 * Calls the makeGrid function and submits the object's store values
 * Uses the object's stored values to color in the pixels.
 *
 * @param {object} ele The object being submitted in.
 * It contains the pixel position and colors.
 */
function drawPixel(ele) {
  const $idEmoji = $(`#${ele.idEmoji}`);

  $inputWidth.val(ele.width);
  $inputHeight.val(ele.height);

  $colorPicker.val(ele.color.picker);

  $toolPaint.prop("checked", true);

  $idEmoji.prop("checked", true);

  setTable(ele.width, ele.height);

  //Previous pixel art encoding
  if (ele.hasOwnProperty("art")) {
    ele.art.forEach((ele1, ind1) => {
      ele1.forEach((ele2) => {
        $(`tr:nth-child(${ind1 + 1}) td:nth-child(${ele2.td})`).css("background", ele2.color);
        if (ele.hasOwnProperty("text")) {
          $(`tr:nth-child(${ind1 + 1}) td:nth-child(${ele2.td})`).text(ele.text);
        }
      });
    });
  }

  //Current pixel art encoding
  if (ele.hasOwnProperty("art2")) {
    ele.art2.forEach(ele1 => {
      ele1.pixel.forEach(ele2 => {
        $(`tr:nth-child(${ele2.tr}) td:nth-child(${ele2.td})`).css("background", ele1.color);
      });
    });
  }

  //Display the current color
  displayColorRGBHex(hexToRgb(ele.color.picker), ele.color.picker);
}

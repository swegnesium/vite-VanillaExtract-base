import { createGlobalTheme } from "@vanilla-extract/css";


export const root = createGlobalTheme(':root', {
    fonts: {

    },


    fontWeight: {
        light: "300",
        normal: "500",
        bold: "600",
        bolder: "700",
    },


    colors: {

    },

    space: {
        none: '0',
        '1x': '8px',
        '2x': '12x',
        '3x': '16px'
    }
})

export const vars = { ...root };
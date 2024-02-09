import { globalStyle } from "@vanilla-extract/css";

globalStyle('html, body', {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    minWidth: '320px',
    minHeight: '100vh'
})

globalStyle('a', {
    textDecoration: "none"
})

globalStyle('input, button, textarea, select', {
    font: 'inherit'
})
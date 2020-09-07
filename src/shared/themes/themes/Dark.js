export default {
    chart: { color: 'rgb(204, 204, 204)' },
    box: { bg: 'rgb(0,0,0)', alt: 'rgb(14, 14, 14)', body: 'rgb(227, 227, 227)' },
    bar: { bg: 'rgb(0, 0, 0)', hover: 'rgb(20, 20, 20)', alt: 'rgb(56, 56, 56)', color: 'rgb(175, 175, 175)' },
    label: { color: 'rgb(175, 175, 175)', hover: 'rgb(190, 190, 190)' },
    input: {
        bg: 'rgb(45, 45, 45)',
        alt: 'rgb(140, 140, 140)',
        hover: 'rgb(120, 120, 120)',
        color: 'rgb(175, 175, 175)',
    },
    negative: { color: 'rgb(172, 69, 69)', hover: 'rgb(146, 57, 57)', body: 'rgb(227, 227, 227)' },
    positive: { color: 'rgb(85, 160, 91)', hover: 'rgb(31, 126, 74)', body: 'rgb(227, 227, 227)' },
    dark: { color: 'rgb(30, 30, 30)', hover: 'rgb(30, 30, 30)', body: 'rgb(140, 140, 140)' },
    secondary: { color: 'rgb(173, 173, 173)', hover: 'rgb(220, 220, 220)', body: 'rgb(38, 38, 38)', bg: 'rgb(0, 0, 0)' },
    primary: {
        color: 'rgb(130, 130, 130)',
        border: 'rgb(175, 175, 175)',
        hover: 'rgb(56, 56, 56)',
        body: 'rgb(220, 220, 220)',
    },
    body: { bg: 'rgb(14, 14, 14)', color: 'rgb(175, 175, 175)', alt: 'rgb(175, 175, 175)' },
    wave: { primary: 'rgba(255, 255, 255, 0.15)', secondary: 'rgba(255, 255, 255, 0.15)' },
    isDark: true,
    animations: [
        'body.color',
        'body.bg',
        'rgb(163,163,163)',
        'input.color',
        'input.alt',
        'label.hover',
        'rgb(94,94,94)',
        'bar.alt',
        'label.color',
        'dark.hover',
        'primary.body',
    ],
};
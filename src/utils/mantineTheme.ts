import { type MantineThemeOverride } from "@mantine/core"

const MyTheme: MantineThemeOverride = {
  colors: {
    gray: ['#d2d2d2', '#aaa'],
    grape: ['#6666f1', '#5050f8', '#000666'],
    yellow: ['#ffaa4a']
  },
  shadows: {
    sm: "rgba(0, 0, 0, 0.3) 2px 3px 4px 2px",
    md: "rgba(0, 0, 0, 0.3) 2px 3px 8px 4px",
    xs: "rgba(0, 0, 0, 0.3) 2px 3px 2px 1px"
  },
  components: {
    Input: {
      styles: () => ( {
        input: { color: '#6666f1', "&::placeholder": { color: "rgba(102, 102, 241, 0.3)" } }
      } )
    },
    InputWrapper: {
      styles: () => ( {
        label: { color: '#d2d2d2' }
      } )
    }
  }
}

export default MyTheme

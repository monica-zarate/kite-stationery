import { createTheme } from '@rneui/themed';

const themePalette = {
    primary: '#FF9F00',
    secondary: '#0B70FE',
    tertiary: '#FF5A00',
    white: '#fff',
    grey: '#939393',
};

export const kiteTheme = createTheme({
    components: {
        Button: (buttonProps) => ({
            buttonstyle: {
                borderRadius: 6,
                backgroundColor: themePalette.primary,
            },
            containerStyle: {
                width: 312
            }
        }),
        Text: {
            h1Style: {
                fontWeight: 'normal',
                fontFamily: '',
                fontSize: 34
            },
            h2Style: {
                fontWeight: 'normal',
                fontFamily: '',
                fontSize: 29
            },
            h3Style: {
                fontWeight: 'normal',
                fontFamily: '',
                fontSize: 21
            },
            h4Style: {
                fontWeight: 'normal',
                fontFamily: '',
                fontSize: 19
            },
        }
    }
});
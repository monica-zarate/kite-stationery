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
            style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                lineHeight: 16
            },
            h1Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_700Bold',
                fontSize: 34,
                lineHeight: 35
            },
            h2Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 26,
                lineHeight: 29
            },
            h3Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 20,
                lineHeight: 21
            },
            h4Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                lineHeight: 19
            },
        }
    }
});
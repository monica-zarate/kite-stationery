import { createTheme } from '@rneui/themed';

export const themePalette = {
    primary: '#FF5A00',
    secondary: '#0B70FE',
    tertiary: '#FF9F00',
    accent: '#43CCFF',
    white: '#fff',
    grey: '#F6F6F6',
};

export const kiteTheme = createTheme({
    components: {
        Button: () => ({
            buttonStyle: {
                borderRadius: 6,
                backgroundColor: themePalette.primary,
            },
            containerStyle: {
                width: 312
            },
            titleStyle: {
                fontFamily: 'Inter_700Bold',
                fontSize: 16,
                textTransform: "uppercase" 
            }
        }),
        Text: {
            style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                lineHeight: 16,
            },
            h1Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_700Bold',
                fontSize: 34,
                lineHeight: 35,
            },
            h2Style: {
                fontWeight: 'normal',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 26,
                lineHeight: 29,
                // marginBottom: 24
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
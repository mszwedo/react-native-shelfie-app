import { Image, useColorScheme } from 'react-native'

// @ts-ignore React Native resolves image assets at bundle time.
import DarkLogo from '../assets/img/logo_dark.png'
// @ts-ignore React Native resolves image assets at bundle time.
import LightLogo from '../assets/img/logo_light.png'

const ThemeLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logoSource = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logoSource} {...props} />
    )
}

export default ThemeLogo

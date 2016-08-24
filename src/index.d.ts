import { XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, ResponsiveSizeInfo } from './bootstrap/bootstrap-directives';
import { IsDesktop, IsTablet, IsMobile, IsSmartTv, ShowItDevice, HideItDevice, IsIphone, IsIpad, IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard, IsPortrait, IsLandscape, DeviceInfo, OrientationInfo } from './devices/devices-directives';
import { ShowItSizes, HideItSizes } from './custom-sizes/custom-sizes-directives';
import { Is1xPixel, IsRetina, Is4k, PixelRatioInfo } from './pixelratio/pixelratio-directives';
import { IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion, IeInfo } from './browsers/browsers-directives';
import { Responsive } from './responsive/responsive';
import { ResponsiveWindow } from './responsive-window/responsive-window';
import { UserAgentInfo } from './useragent/useragent';
export { ResponsiveConfigInterface } from './config/interfaces';
export { ResponsiveState, ResponsiveConfig } from './config/config';
export declare const RESPONSIVE_DIRECTIVES: (typeof Responsive | typeof XL | typeof LG | typeof MD | typeof SM | typeof XS | typeof ShowItBootstrap | typeof HideItBootstrap | typeof IsSmartTv | typeof IsDesktop | typeof IsTablet | typeof IsMobile | typeof ShowItDevice | typeof HideItDevice | typeof IsIphone | typeof IsIpad | typeof IsAndroidMobile | typeof IsAndroidTablet | typeof IsWindowsPhone | typeof ShowItStandard | typeof HideItStandard | typeof IsPortrait | typeof IsLandscape | typeof ShowItSizes | typeof HideItSizes | typeof Is1xPixel | typeof IsRetina | typeof Is4k | typeof PixelRatioInfo | typeof IsChrome | typeof IsFirefox | typeof IsSafari | typeof IsOpera | typeof IsIE | typeof IsIE9 | typeof IsIE10 | typeof IsIE11 | typeof IsIE12 | typeof IeInfo | typeof ShowItBrowser | typeof HideItBrowser | typeof ShowIEVersion | typeof HideIEVersion | typeof ResponsiveSizeInfo | typeof DeviceInfo | typeof OrientationInfo | typeof ResponsiveWindow | typeof UserAgentInfo)[];
export declare class ResponsiveModule {
}

import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList";
import themeConfig from "../../../../themeConfig.js";
import colors from "../../../../themeConfig.js";

// /////////////////////////////////////////////
// Variables
// /////////////////////////////////////////////

// const userDefaults = {
//     uid: 0, // From Auth
//     displayName: "John Doe", // From Auth
//     about: "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
//     photoURL: require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
//     status: "online",
//     userRole: "admin"
// };

const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {};

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getUserInfo = () => {
    let userInfo = {
        _id: userInfoLocalStorage._id,
        username: userInfoLocalStorage.username,
        email: userInfoLocalStorage.email,
        photoURL: require("@/assets/images/portrait/small/account.png"), // From Auth
        status: "online",
        userRole: "admin",
        no_telp: userInfoLocalStorage.no_telp
    };
    // Update property in user
    // Object.keys(userDefaults).forEach(key => {
    //     // If property is defined in localStorage => Use that
    //     userInfo[key] = userInfoLocalStorage[key] ?
    //         userInfoLocalStorage[key] :
    //         userDefaults[key];
    // });

    // Include properties from localStorage
    // Object.keys(userInfoLocalStorage).forEach(key => {
    //     if (userInfo[key] == undefined && userInfoLocalStorage[key] != null)
    //         userInfo[key] = userInfoLocalStorage[key];
    // });
    // console.log(userInfo)
    return userInfo;
};

const state = {
    AppActiveUser: getUserInfo(),
    bodyOverlay: false,
    isVerticalNavMenuActive: true,
    mainLayoutType: themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList: navbarSearchAndPinList,
    reduceButton: themeConfig.sidebarCollapsed,
    verticalNavMenuWidth: "default",
    verticalNavMenuItemsMin: false,
    scrollY: 0,
    starredPages: navbarSearchAndPinList["pages"].data.filter(
        page => page.is_bookmarked
    ),
    theme: themeConfig.theme || "light",
    themePrimaryColor: colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,
    alat_id: []
};

export default state;
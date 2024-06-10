export const Config = {
    theme: {
        White: "#FFFFFF",
        WhiteMuted: "#CBCCCD",
        Black: "#000000",
        Ascent1: "#E02BF0",
        Ascent2: "#6AA5FF",
        Success: "#4BFFFF",
        SuccessAscent1: "#ACFF6A",
        SuccessAscent2: "#2BCDF0",
        Warning: "#FFC6C6",
        WarningAscent1: "#D3D715",
        WarningAscent2: "#FAFF00",
        Danger: "#FB7171",
        Body: "#2B3555",
        TextColor: "#FFFFFF",
        Theme: "#2B3555",
        ThemeMuted: "#FFFFFF",
        DangerDark: "#D52121",
        Header: "#2B3555"
    },
    currency: [],
    countries: [],
    reloadTables: false,
    reloadMyTables: false,
    reloadPendingInvites: false,
    reloadFriends: false,
    reloadTableDetails: false,
    reloadTableId: "",
    reloadNotif: false,
    reloadRooms: false,
    navigateTo: [],
    payerFee: 0,
    popular: [],
    isAppleLogin: false,
    acceptedEULA: [""],
    referrerLink: "",
    boostPrice: []
};

const tokenData = {
    accessToken: "",
    expiry: 0,
    refreshToken: "",
    refreshExpiry: 0,
    createdAt: "",      // for refresh token and access token
    reCreatedAt: ""    // only for newly generated access token
};

export type tokenType = typeof tokenData;

export const userState: {
    tokens?: tokenType,
    user: Record<string, any>,
    displayName: string
} = {
    tokens: undefined,
    user: {},
    displayName: ""

};

export const PreloadedState = {
    config: Config,
    user: userState
}

export type stateType = typeof PreloadedState;
import { configurationsModel } from "../common/model/config/config.model"
import { UserInfoModel } from "../common/model/config/userInfo.model"
import { AccountModel } from "../graphql/models/account/account.model"
import { MenuModel } from "../graphql/models/menu/menu.model"

export interface AppState {
    token?: string
    userInfo?: any
    showSpinner?: boolean
    showSelectorAccount?: boolean,
    acccountParent?: any
    accountChild?: any,
    count: number,
    sessionUser?: UserInfoModel | any
    mcfHome?: any
    configuration: configurationsModel;
    userState?: any;
    countryIcon: string;
    menu: MenuModel[]
    clientSelect: AccountModel
    accounts: AccountModel[]
    accountSelect: AccountModel
    recipients: AccountModel[]
    recipientSelect: AccountModel[]
    progressBar: boolean
    loadInitial: boolean,
    openSideMenu?: boolean,
    userAuthenticated: boolean
}

export const initialState: AppState = {
    token: "",
    userInfo: null,
    showSpinner: false,
    showSelectorAccount: false,
    accountChild: null,
    acccountParent: null,
    count: 0,
    sessionUser: null,
    userAuthenticated: false,
    mcfHome: null,
    configuration: {} as configurationsModel,
    userState: {} as UserInfoModel,
    countryIcon: "",
    accounts: [],
    clientSelect: {} as AccountModel,
    accountSelect: {} as AccountModel,
    menu: [],
    recipients: [],
    recipientSelect: [],
    progressBar: false,
    loadInitial: true,
    openSideMenu: false
};
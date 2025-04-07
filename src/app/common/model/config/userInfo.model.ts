export interface UserInfoModel {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    nit: string;
    companyName: string;
    documentNumber: string;
    profileImage: string;
}

export const defaultUser: UserInfoModel = {
    userId: "123",
    email: "andres.tenjo@adagetech.com",
    firstName: "Andres",
    lastName: "Tenjo",
    phone: "123",
    nit: "123",
    companyName: "ABC",
    documentNumber: "123",
    profileImage: "/assets/images/profile-pic.svg"
}
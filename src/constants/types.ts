/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "@react-icons/all-files";
import { User } from "firebase/auth";

// --------------------- Start NavItem Type ---------------------
export type navItemType = {
  name: string,
  icon: IconType,
  notification?: number,
  link?: string,
  color?: string
}
// --------------------- End NavItem Type ---------------------

// --------------------- Start User Type ---------------------
export type userType = User | null | {
  email: string,
  password: string
};

export type myUserType = {
  email: string,
  password: string
};

export type initialStateType = {
  user: userType,
  isLoggin: boolean | null,
}
// --------------------- End User Type ---------------------

// --------------------- Start Article Type ---------------------
export type articleType = {
  actor: {
    userEmail: string,
    userName: string,
    userID: string,
    userImg: string,
    date: any
  },
  video: string,
  shareImg: string,
  shareImgProgress: number,
  comment: number,
  description: string
}
// --------------------- End Article Type ---------------------
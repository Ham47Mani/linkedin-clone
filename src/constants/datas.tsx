import { navItemType } from './types';
import { 
  BsPeopleFill, BsFillCalendar3RangeFill, BsPlayBtnFill, 
  BsFillBriefcaseFill, BsFillChatDotsFill, BsFillBellFill,
  BsFillPlayBtnFill, BsFillCalendar2DateFill,
  BsHandThumbsUp, BsSend, BsChatLeftDots, BsArrowRepeat
} from "react-icons/bs";
import { FaHome, FaUserFriends, FaImage, FaIndent } from "react-icons/fa";

// --------------------- Start Login NavItems ---------------------
export const loginNavItems: navItemType[] = [
  {
    name: "Articles",
    icon: BsFillCalendar3RangeFill,
  },
  {
    name: "People",
    icon: BsPeopleFill
  },
  {
    name: "Learning",
    icon: BsPlayBtnFill
  },
  {
    name: "Jobs",
    icon: BsFillBriefcaseFill
  },
]
// --------------------- End Login NavItems ---------------------

// --------------------- Start Home NavItems ---------------------
export const HomeNavItems: navItemType[] = [
  {
    name: "Home",
    icon: FaHome,
    link: "/",
  },
  {
    name: "My Network",
    icon: FaUserFriends,
    link: "/mynetwork",
  },
  {
    name: "Jobs",
    icon: BsFillBriefcaseFill,
    link: "/jobs",
  },
  {
    name: "Messaging",
    icon: BsFillChatDotsFill,
    link: "/messaging",
  },
  {
    name: "Notification",
    icon: BsFillBellFill,
    link: "notification",
    notification: 6
  },
]
// --------------------- End Home NavItems ---------------------

// --------------------- Start Shared Box Icons ---------------------
export const sharedIconsItems: navItemType[] = [
  {
    icon: FaImage,
    name: "Photo",
    color: "text-[#378fe9]"
  },
  {
    icon: BsFillPlayBtnFill,
    name: "Video",
    color: "text-[#5f9b41]"
  },
  {
    icon: BsFillCalendar2DateFill,
    name: "Event",
    color: "text-[#c37d16]"
  },
  {
    icon: FaIndent,
    name: "Write article",
    color: "text-[#e16745]"
  },
]
// --------------------- End Shared Box Icons ---------------------

// --------------------- Start postReactions ---------------------
export const postReactions: navItemType[] = [
  {
    name: "Like",
    icon: BsHandThumbsUp
  },
  {
    name: "Comment",
    icon: BsChatLeftDots
  },
  {
    name: "Repost",
    icon: BsArrowRepeat
  },
  {
    name: "Send",
    icon: BsSend
  },
]
// --------------------- End postReactionItems  ---------------------

// --------------------- Start  ---------------------
// --------------------- End  ---------------------
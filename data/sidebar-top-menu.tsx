import { 
    HomeModernIcon, 
    UserCircleIcon, 
    ChatBubbleBottomCenterIcon, 
    ArchiveBoxIcon, 
    RectangleStackIcon, 
    UserGroupIcon 
} from "@heroicons/react/24/outline";

interface SidebarTopMenu {
    path: string;
    title: string;
    icon: JSX.Element;
}

export const sidebarTopMenu: SidebarTopMenu[] = [
    {
        path: '/',
        title: 'Dashboard',
        icon: <HomeModernIcon />,
    },
    {
        path: '/profile',
        title: 'Profile',
        icon: <UserCircleIcon />,
    },
    {
        path: '/messages',
        title: 'Messages',
        icon: <ChatBubbleBottomCenterIcon />,
    },
    {
        path: '/history',
        title: 'History',
        icon: <ArchiveBoxIcon />,
    },
    {
        path: '/tasks',
        title: 'Tasks',
        icon: <RectangleStackIcon />,
    },
    {
        path: '/Communities',
        title: 'Communities',
        icon: <UserGroupIcon />,
    },
];
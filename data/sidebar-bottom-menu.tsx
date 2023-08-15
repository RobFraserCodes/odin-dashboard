import { CogIcon, TicketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

interface SidebarBottomMenu {
    path: string;
    title: string;
    icon: JSX.Element;
}

export const sidebarBottomMenu: SidebarBottomMenu[] = [
    {
        path: '/settings',
        title: 'Settings',
        icon: <CogIcon />,
    },
    {
        path: '/profile',
        title: 'Profile',
        icon: <TicketIcon />,
    },
    {
        path: '/messages',
        title: 'Messages',
        icon: <ShieldCheckIcon />,
    },
];
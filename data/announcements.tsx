interface Announcement {
    id: number;
    title: string;
    description: string;
}

export const announcements: Announcement[] = [
    {
        id: 1,
        title: 'Announcement 1',
        description: 'This is the first announcement'
    },
    {
        id: 2,
        title: 'Announcement 2',
        description: 'This is the second announcement'
    },
    {
        id: 3,
        title: 'Announcement 3',
        description: 'This is the third announcement'
    }
]
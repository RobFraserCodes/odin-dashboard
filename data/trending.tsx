interface trending {
    id: number,
    user: string,
    title: string,
    image: string,
}

export const trending : trending[] = [
    {
        id: 1,
        user: '@Rob',
        title: 'Super Cool Project',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {   
        id: 2,
        user: '@TOP',
        title: 'Less Cool Project',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
        id: 3,
        user: '@ANother',
        title: 'Impossible App',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
        id: 4,
        user: '@FakeUser',
        title: 'Easy Peasy App',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    }
]
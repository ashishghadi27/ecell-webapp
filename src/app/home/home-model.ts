export class HomeModel {
    id:string
    logo:string
    about:string
    bulb:string
    tag:string
}

export class BlogModel{
    id:string
    title:string
    content:string
    author:string
    youtube:string
    link:string
    image:string
    facebook: string
    fid:string
    instagram: string
}

export class Upcoming{
    id:string
    title:string
    link:string
    image:string
    description:string
    date:string
    speakers: string
}

export class Event{
    id:string
    title:string
    youtube:string
    facebook:string
    instagram:string
    image:string
    description:string
    date:string
}

export class Teams{
    id: string
    name: string
}

export class Member{
    id: string
    name: string
    position: string
    team: string
    image: string
}

export class Registration{
    fname:string
    lname:string
    email:string
    contact:string
    class:string
    division:string
    rollno:string
}

export class Years{
    id:string
    name:string
}

export class Division{
    id:string
    num:string
}
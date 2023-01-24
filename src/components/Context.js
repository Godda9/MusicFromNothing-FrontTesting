import { createContext } from "react";

const contextUser = createContext({
    email: 'test@gmail.com',
    nickname: 'test',
    description: 'testDescription',
    password: 'testPass',
    phone: '+000 000 00 00',
    avatar: 'https://minotar.net/helm/mhf_steve/600.png',
    background: 'https://wallpaperaccess.com/full/680678.jpg',
    following: 15,
    followed: 30,
})


export {contextUser};
import { Product, Status , StatusClass } from "../../types/types";


export const statusObj: Status = {
    all: "Все",
    new: "Новая",
    inwork: "В работе",
    complete: "Завершено"
}

export  const productObj = [
    {"course-php": 'Курс по PHP'},
    { "course-html": 'Курс по HTML'},
    { "course-wordpress": 'Курс по WordPress'},
    { "course-vue": 'Курс по Vue'},
    { "course-js": 'Курс по JavaScript'}
]

export  const productObj1: Product = {
    "course-php": 'Курс по PHP',
    "course-html": 'Курс по HTML',
    "course-wordpress": 'Курс по WordPress',
    "course-vue": 'Курс по Vue',
    "course-js": 'Курс по JavaScript'
}

export  const statusClass: StatusClass = {
    new: 'badge-danger',
    inwork: 'badge-warning',
    complete: 'badge-success'
}

export const statusName = [
    { 
    name: 'Все', 
    attr: 'all',
    id: 0
    },
    { 
        name: 'Новые',
        attr: 'new',
        id: 1
    },
    { 
    name: 'В работе',
    attr: 'inwork',
    id: 2
    },
    { 
    name: 'Завершенные', 
    attr: 'complete',
    id: 3
    }
]

export const serverPath: string = 'https://immense-shadowed-millennium.glitch.me/requests';

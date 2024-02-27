export interface Request {
    id: number,
    date: string,
    email: string,
    name: string,
    phone: string,
    product: string
    status: string
}

export interface Status {
    all: string;
    new: string;
    inwork: string;
    complete: string;
}

export interface StatusClass {
    new: string;
    inwork: string;
    complete: string;
}

export interface Product {
    'course-php': string;
    "course-html": string;
   "course-wordpress": string;
    "course-vue": string;
    "course-js": string;
}

export interface Requests {
    requests: [],
    status: string | null,
    error: string | null | undefined
} 

export interface EditState {
    findedRequest: Request 
}

export type StatusKey = keyof Status;

export type StatusKeyClass = keyof StatusClass;

export type StatusKeyProduct = keyof Product;

export type StatusName = {
    name: string;
    attr: string;
    id: number;
}

export type Filter = {
    product: string,
    status: string
}





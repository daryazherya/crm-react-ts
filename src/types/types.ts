export interface State {
    requests: [],
    setRequests: (state: []) => void,
}

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

export type StatusKey = keyof Status;

export interface StatusClass {
    new: string;
    inwork: string;
    complete: string;
}

export type StatusKeyClass = keyof StatusClass;

export interface Product {
    'course-php': string;
    "course-html": string;
   "course-wordpress": string;
    "course-vue": string;
    "course-js": string;
}

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

export type LeftPanelProps = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export type MainTableProps = {
    requests: [];
    setFilter: (filter: Filter) => void;
    filter: Filter; 
    filterData: (requests: Request[]) => Request[];
}

export type RenderDataProps = {
    requests: [];
    filterData: (requests: Request[]) => Request[];
}
export type StatusAndProducts = {
    setFilter: (filter: Filter) => void;
    filter: Filter; 
}


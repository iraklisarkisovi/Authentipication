export interface IRoute {
    path: string;
    label: string;
}

export const route:IRoute[] = [
    {path:'/', label: 'Home'},
    {path:'/valid', label: 'Private'}
]

 
import { createBrowserRouter } from "react-router-dom"
import { Home, Contatos, Projetos, Curriculo, SaibaMais, Servicos} from "../container";

export const router = createBrowserRouter([

    {

        path: '/saiba-mais',
        element: (
            <SaibaMais/>
         ),

    },
    {

        path: '/',
        element: (
            <Home/>
         ),

    },
    {

        path: '/contatos',
        element: (
            <Contatos/>
         ),

    },
    {

        path: '/projetos',
        element: (
            <Projetos/>
         ),

    },
    {

        path: '/curriculo',
        element: (
            <Curriculo/>
         ),

    },
    {

        path: '/servicos',
        element: (
            <Servicos/>
         ),

    },
   
]);
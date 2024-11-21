import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
    {
        path:"",
        component: InicioComponent,
    },
    {
        path:"cardapio",
        component: CardapioComponent
    },
    {
        path:"cardapio/:id",
        component: CardapioComponent
    },
    {
        path:"pedido",
        component: PedidoComponent
    },
    {
        path:"detalhes/:id",
        component: DetalhesComponent
    }
];

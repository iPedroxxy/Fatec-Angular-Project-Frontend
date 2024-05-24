import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './clientes/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './components/home/home.component';
import { AlterarProdutoComponent } from './produtos/alterar-produto/alterar-produto.component';
import { AlterarClienteComponent } from './clientes/alterar-cliente/alterar-cliente.component';

import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "produtos", component: ListarProdutosComponent},
  {path: "produtos/cadastrar", component: CadastrarProdutoComponent},
  {path: "clientes", component: ListarClientesComponent},
  {path: "clientes/cadastrar", component: CadastrarClienteComponent},
  {path: "produtos/alterar/:id", component: AlterarProdutoComponent},
  {path: "clientes/alterar/:id", component: AlterarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

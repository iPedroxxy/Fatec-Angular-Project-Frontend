import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 // importa o firmsModule para poder utilizar os formulários
 import { FormsModule } from '@angular/forms';

 // IMporta o HttpClientModule para poder conectar com APIs.
 import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './clientes/cadastrar-cliente/cadastrar-cliente.component';
import { AlterarProdutoComponent } from './produtos/alterar-produto/alterar-produto.component';
import { AlterarClienteComponent } from './clientes/alterar-cliente/alterar-cliente.component';
import { CardCliente2Component } from './components/card-cliente2/card-cliente2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    ListarProdutosComponent,
    CadastrarProdutoComponent,
    ListarClientesComponent,
    CadastrarClienteComponent,
    AlterarProdutoComponent,
    AlterarClienteComponent,
    CardCliente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // importa o Módulo para o APP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

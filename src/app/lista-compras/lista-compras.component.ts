import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionaritem(){
    let itemlista = new ItemLista();
    itemlista.id = this.lista.length + 1;
    itemlista.nome = this.item; 
    
    this.lista.push(itemlista);
    this.item = '';

    // o console tabel ele transforma a lista em uma tabela no console 
    console.table(this.lista);
  }

  riscaritem(itemlista: ItemLista){
    itemlista.comprado = !itemlista.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}

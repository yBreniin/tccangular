import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao, Cliente } from 'src/app/core/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  form!: FormBuilder;
  cartao: Cartao = new Cartao();

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onProductCreate(cliente: Cliente) {
    console.log(cliente);

    this.api.postCliente(cliente).subscribe(
    success => console.log('POST /clientes | Sucesso'),
    error => console.error(error),
    () => console.log('Pessoa cadastrada')
    );
  }

  onProductCreate2(cartao: Cartao) {
    console.log(cartao);
    this.api.postCartao(cartao).subscribe(
      success => console.log('POST /cartoes | Sucesso'),
      error => console.error(error),
      () => console.log('Cartão cadastrado')
      );

      setTimeout(() => {
        this.router.navigate(['/finalizado'])
    }, 1000);
  }

  onSubmit() {
    console.log('Enviou formulario');

  }
}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja comparar esse produto?",
      showDenyButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Salvo!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro", "", "error");
      }
    });
  }

}

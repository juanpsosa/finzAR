import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-cuotas',
  templateUrl: './calculadora-cuotas.component.html',
  styleUrls: ['./calculadora-cuotas.component.css']
})
export class CalculadoraCuotasComponent implements OnInit {
  contado: number = 1000;
  cuotasTotal: number = 1200;
  usarContado: boolean = false;
  cuotas: number = 3;
  cuotasOpciones: number[] = [1, 3, 6, 9, 12, 18];
  inflacion: number = 1.5;
  otraCuota: string = '';

  resultado: boolean = false;
  expandido: boolean = false;

  tasaInteres: number = 0;


  esMejorContado: boolean = true;
  vpn: number = 0;
  diferencia: number = 0;

  ngOnInit(): void {
    this.calcular(); 
  }

  setCuotas(n: number): void {
    this.cuotas = n;
    this.calcular();
  }
  handleOtraCuota(event: Event): void {
  const valor = (event.target as HTMLInputElement).value;
  this.otraCuota = valor;

  const num = parseInt(valor);
  if (!isNaN(num) && num > 0) {
    this.cuotas = num;
    this.calcular();
  }
}
  calcular(): void {
    const monto = this.cuotasTotal;
    const cantidad = this.cuotas;
    const tasa = this.inflacion / 100;
    const cuota = monto / cantidad;
    

    let valorPresente = 0;
    for (let t = 1; t <= cantidad; t++) {
      valorPresente += cuota / Math.pow(1 + tasa, t);
    }

    this.vpn = valorPresente;
    this.diferencia = Math.abs(this.contado - valorPresente);
    this.esMejorContado = valorPresente > this.contado;
    this.tasaInteres = Math.pow(this.cuotasTotal / this.contado, 1 / this.cuotas) - 1;


    this.resultado = true;
  }
  
  copiarResumen() {
  const texto = `🔍 Comparativa de compra

💰 Precio contado: $${this.contado.toFixed(2)}
💳 Valor presente de las cuotas: $${this.vpn.toFixed(2)}
📊 Cuotas: ${this.cuotas} x $${(this.cuotasTotal / this.cuotas).toFixed(2)}
📉 Inflación mensual estimada: ${this.inflacion.toFixed(2)}%

📌 Resultado: ${this.esMejorContado ? 'Es mejor pagar al CONTADO 💸' : 'Es mejor pagar en CUOTAS 📈'}`;

  navigator.clipboard.writeText(texto).then(() => {
    alert('Resumen copiado al portapapeles ✅');
  }, () => {
    alert('Error al copiar el resumen ❌');
  });
  }
}



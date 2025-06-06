import { Component } from '@angular/core';

export interface TerminoFinanciero {
  titulo: string;
  descripcion: string;
  categoria: string;
  link?: string;
}

@Component({
  selector: 'app-diccionario-financiero',
  templateUrl: './diccionario-financiero.component.html',
  styleUrls: ['./diccionario-financiero.component.css'],
})
export class DiccionarioFinancieroComponent {
  terminos: TerminoFinanciero[] = [
    // Educación financiera
    {
      titulo: '¿Qué es el dinero?',
      descripcion:
        'Medio de intercambio aceptado para comprar bienes o servicios. Puede ser efectivo, digital, o hasta criptomonedas.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Presupuesto',
      descripcion:
        'Es un plan que te permite anticipar cuánto vas a gastar, cuánto vas a ahorrar y en qué se va tu plata. Es la base para ordenar tus finanzas.',
      categoria: 'Educación Financiera',
      link: 'como-hacer-un-presupuesto',
    },
    {
      titulo: 'Ahorro',
      descripcion:
        'Es la parte del ingreso que no se gasta. Sirve para imprevistos, proyectos o invertir. Ahorrar es priorizar el futuro.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Gasto',
      descripcion:
        'Todo lo que destinás a comprar o pagar servicios. Puede ser fijo (alquiler) o variable (salidas).',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Interés',
      descripcion:
        'Es el costo de usar plata prestada o el beneficio por prestarla o invertirla.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Inflación',
      descripcion:
        'Aumento sostenido de precios. Hace que con el tiempo tu dinero compre menos.',
      categoria: 'Educación Financiera',
      link: 'inflacion-que-es-y-como-se-mide',
    },
    {
      titulo: 'Costo de oportunidad',
      descripcion:
        'Es lo que resignás al elegir una opción sobre otra. Ej: si gastás $10.000 en ropa, no podés invertirlos.',
      categoria: 'Educación Financiera',
    },
    //  Ahorro y consumo
    {
      titulo: 'Gasto hormiga',
      descripcion:
        'Pequeños consumos diarios que parecen insignificantes, pero al mes suman mucho (cafecito, delivery, etc).',
      categoria: 'Ahorro & Consumo',
    },
    {
      titulo: 'Caja chica',
      descripcion:
        'Fondo reservado para gastos menores y cotidianos, muy usado en negocios.',
      categoria: 'Ahorro & Consumo',
    },
    {
      titulo: 'Precio relativo',
      descripcion:
        'Comparación entre el precio de un bien respecto a otro. Ayuda a decidir qué conviene más.',
      categoria: 'Ahorro & Consumo',
    },
    {
      titulo: 'Consumo consciente',
      descripcion:
        'Elegir en qué gastar con criterio, según necesidades reales y no impulsos.',
      categoria: 'Ahorro & Consumo',
    },
    // Trabajo e ingresos
    {
      titulo: 'Ingreso neto',
      descripcion:
        "Es lo que realmente cobrás después de impuestos, aportes y descuentos. Es tu sueldo 'en mano'.",
      categoria: 'Trabajo e Ingresos',
    },
    {
      titulo: 'Recibo de sueldo',
      descripcion:
        'Documento que detalla cuánto ganás, qué aportes hiciste y qué descuentos te aplicaron.',
      categoria: 'Trabajo e Ingresos',
    },
    {
      titulo: 'Carga social',
      descripcion:
        'Conjunto de aportes y contribuciones que realiza un empleador sobre el sueldo de un trabajador.',
      categoria: 'Trabajo e Ingresos',
    },
    {
      titulo: 'Aportes vs Contribuciones',
      descripcion:
        'Los aportes los hace el trabajador; las contribuciones, el empleador. Ambos van a la seguridad social.',
      categoria: 'Trabajo e Ingresos',
    },
    // Tarjeta de crédito
    {
      titulo: 'Fecha de cierre',
      descripcion:
        'Es el día en que se cierra tu resumen de tarjeta. Todas las compras hechas hasta ese día se incluyen en ese resumen.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'Fecha de vencimiento',
      descripcion:
        'Es el último día para pagar tu resumen sin recargos. Suele ser unos días después del cierre.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'Pago mínimo',
      descripcion:
        'Es el monto mínimo que debés pagar para no entrar en mora. El resto se financia con intereses altísimos.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'Compra en cuotas',
      descripcion:
        'Permite dividir el pago en partes mensuales. Puede tener o no interés. Siempre revisá el CFT.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'TNA',
      descripcion:
        'Tasa Nominal Anual. Es el interés sin contar capitalización ni otros costos. Usala como referencia.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'TEA',
      descripcion:
        'Tasa Efectiva Anual. Incluye capitalización de intereses. Siempre es mayor que la TNA.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'CFT',
      descripcion:
        'Costo Financiero Total. Incluye TNA + IVA + gastos administrativos + seguros. Es lo que realmente vas a pagar.',
      categoria: 'Tarjeta de Crédito',
    },
    {
      titulo: 'Resumen de cuenta',
      descripcion:
        'Documento que detalla tus consumos, pagos, intereses y saldo. Revisalo siempre.',
      categoria: 'Tarjeta de Crédito',
    },
    // Banca tradicional
    {
      titulo: 'Cuenta corriente',
      descripcion:
        'Cuenta bancaria que permite operar con cheques y sobregiros. Puede tener costos de mantenimiento.',
      categoria: 'Banca Tradicional',
    },
    {
      titulo: 'Caja de ahorro',
      descripcion:
        'Cuenta simple para depositar y retirar dinero. Suele tener menor costo. Ideal para el uso diario.',
      categoria: 'Banca Tradicional',
    },
    {
      titulo: 'CBU',
      descripcion:
        'Clave Bancaria Uniforme. Identificador único de una cuenta bancaria. Sirve para transferencias.',
      categoria: 'Banca Tradicional',
    },
    {
      titulo: 'Alias',
      descripcion:
        'Nombre corto para reemplazar el CBU. Es más fácil de recordar y usar.',
      categoria: 'Banca Tradicional',
    },
    {
      titulo: 'Clave Token',
      descripcion:
        'Código de seguridad que se genera para validar operaciones online. Se obtiene desde una app bancaria.',
      categoria: 'Banca Tradicional',
    },
    {
      titulo: 'Comisión bancaria',
      descripcion:
        'Cargo que el banco aplica por usar ciertos productos o servicios. Revisá tu contrato.',
      categoria: 'Banca Tradicional',
    },
    // Inversiones
    {
      titulo: 'Plazo fijo',
      descripcion:
        'Inversión bancaria donde dejás tu dinero por un tiempo a cambio de una tasa fija. Es bajo riesgo.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Bonos',
      descripcion:
        'Instrumentos de deuda emitidos por empresas o gobiernos. Pagan intereses periódicos.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Acciones',
      descripcion:
        'Partes de una empresa que podés comprar. Su valor varía según el mercado. Riesgo medio-alto.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Interés compuesto',
      descripcion:
        'Interés que se calcula sobre el capital inicial y los intereses acumulados. Hace crecer tus inversiones más rápido.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Liquidez',
      descripcion:
        'Facilidad con la que podés convertir una inversión en efectivo. Ej: acciones son más líquidas que un inmueble.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Diversificación',
      descripcion:
        'Estrategia que distribuye tu dinero en distintos activos para reducir el riesgo.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Perfil de riesgo',
      descripcion:
        'Nivel de tolerancia al riesgo que tiene un inversor. Puede ser conservador, moderado o agresivo.',
      categoria: 'Inversiones',
    },
    // Trabajo y sueldo
    {
      titulo: 'Recibo de sueldo',
      descripcion:
        'Documento que detalla cuánto cobrás, tus descuentos, aportes y retenciones.',
      categoria: 'Trabajo & Sueldo',
    },
    {
      titulo: 'Carga social',
      descripcion:
        'Aportes obligatorios que realiza el empleador sobre tu salario.',
      categoria: 'Trabajo & Sueldo',
    },
    {
      titulo: 'Aportes vs Contribuciones',
      descripcion:
        'Aportes: lo que va a tu jubilación. Contribuciones: lo que paga el empleador por vos.',
      categoria: 'Trabajo & Sueldo',
    },
    {
      titulo: 'Ingreso bruto',
      descripcion: 'El sueldo total antes de descuentos e impuestos.',
      categoria: 'Trabajo & Sueldo',
    },
    {
      titulo: 'Ingreso neto',
      descripcion:
        'El dinero que efectivamente cobrás tras todos los descuentos.',
      categoria: 'Trabajo & Sueldo',
    },
    // Criptomonedas
    {
      titulo: 'Criptomoneda',
      descripcion:
        'Moneda digital que opera en una red descentralizada. Ejemplo: Bitcoin, Ethereum.',
      categoria: 'Criptomonedas',
    },
    {
      titulo: 'Blockchain',
      descripcion:
        'Tecnología que registra transacciones en bloques encadenados de forma segura y pública.',
      categoria: 'Criptomonedas',
    },
    {
      titulo: 'Wallet',
      descripcion: 'Billetera digital para guardar y operar con criptomonedas.',
      categoria: 'Criptomonedas',
    },
    {
      titulo: 'Token',
      descripcion:
        'Unidad digital que representa un activo o valor dentro de una blockchain.',
      categoria: 'Criptomonedas',
    },
    {
      titulo: 'Stablecoin',
      descripcion:
        'Criptomoneda cuyo valor está vinculado a otro activo como el dólar (ej: USDT).',
      categoria: 'Criptomonedas',
    },
    {
      titulo: 'Minería',
      descripcion:
        'Proceso computacional para validar transacciones y generar nuevas monedas en la red.',
      categoria: 'Criptomonedas',
    },
    // Impuestos
    {
      titulo: 'Impuesto a las Ganancias',
      descripcion: 'Tributo progresivo que grava tus ingresos personales.',
      categoria: 'Impuestos',
    },
    {
      titulo: 'IVA (Impuesto al Valor Agregado)',
      descripcion:
        'Impuesto que se aplica al consumo. Está incluido en casi todos los precios.',
      categoria: 'Impuestos',
    },
    {
      titulo: 'Monotributo',
      descripcion:
        'Régimen simplificado de impuestos para pequeños contribuyentes.',
      categoria: 'Impuestos',
    },
    {
      titulo: 'Ingresos Brutos',
      descripcion:
        'Impuesto provincial sobre la facturación bruta de actividades económicas.',
      categoria: 'Impuestos',
    },
    {
      titulo: 'Retención',
      descripcion:
        'Monto que se descuenta en una operación y se entrega directamente al fisco.',
      categoria: 'Impuestos',
    },
    {
      titulo: 'Percepción',
      descripcion:
        'Adicional que se suma al precio de una compra y va anticipado como pago de impuestos.',
      categoria: 'Impuestos',
    },
    // ← Seguí agregando más términos siguiendo el mismo formato
  ];

  categoriasUnicas(): string[] {
    return [...new Set(this.terminos.map((t) => t.categoria))];
  }

  terminosFiltradosPorCategoria(categoria: string): TerminoFinanciero[] {
    return this.terminos.filter((t) => t.categoria === categoria);
  }
}

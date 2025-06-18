import { Component } from '@angular/core';
import {
  Wallet,
  CreditCard,
  PiggyBank,
  BookOpenCheck,
  Banknote,
  Coins,
  LineChart,
  TrendingDown,
  TrendingUp,
  CalendarDays,
  Shield,
} from 'lucide-angular';

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
      titulo: 'Educación financiera',
      descripcion:
        'Desarrollo de habilidades para tomar buenas decisiones y construir hábitos financieros saludables.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Finanzas personales',
      descripcion:
        'Hace referencia a la forma en que organizas y administras los recursos: ingresos, gastos y ahorro, para tomar decisiones informadas y mejorar la administración del dinero.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Presupuesto',
      descripcion:
        'Es un plan para organizar tus ingresos y gastos. Te ayuda a decidir cuánto gastar, ahorrar e invertir cada mes. Es la base para ordenar tus finanzas y evitar deudas innecesarias.',
      categoria: 'Educación Financiera',
      // link: 'como-hacer-un-presupuesto',
    },
    {
      titulo: 'Dinero',
      descripcion:
        'Medio de intercambio para comprar bienes o servicios. Representa valor y confianza dentro de una economía.\n\nPuede tomar distintas formas:\n- Efectivo (billetes y monedas)\n- Saldos digitales (cuentas bancarias, billeteras virtuales)\n- Criptomonedas (como Bitcoin)',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Ingreso',
      descripcion:
        'Dinero que recibís, ya sea de forma regular o eventual. Puede venir de tu trabajo, un negocio, ayudas estatales, intereses por inversiones, alquileres, entre otros.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Egreso',
      descripcion:
        'Es toda salida de dinero que hacés para cubrir necesidades, deseos o compromisos.\n\nTipos de gasto:\n- Fijo: se repite cada mes (ej: alquiler, servicios).\n- Variable: cambia mes a mes (ej: salidas, delivery, ropa).',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Ahorro',
      descripcion:
        'Parte del ingreso que no se gasta. Puede destinarse a emergencias, metas o inversión. Ahorrar es postergar el consumo presente para cuidar tu futuro.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Costo de oportunidad',
      descripcion:
        'Es lo que resignás al elegir una opción sobre otra. Cada vez que decidís usar tu dinero, tiempo o recursos en algo, estás dejando de usarlos en otra cosa que también podría haber sido valiosa.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Interés',
      descripcion:
        'Es el precio del dinero en el tiempo. Puede jugar a favor tuyo (cuando invertís o prestás) o en tu contra (cuando financiás una compra o pedís prestado).',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Inflación',
      descripcion:
        'Es el aumento sostenido de los precios. Con el tiempo, hace que tu plata valga menos: lo que hoy comprás con $1.000, en un año puede costar mucho más.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Activo',
      descripcion:
        'Es un recurso económico que poseés o controlás, del cual se espera obtener un beneficio futuro. Los activos forman parte de tu patrimonio.\n\nTipos de activo:\n- Líquido: dinero en efectivo o cuentas bancarias.\n- No líquido: propiedades, herramientas, vehículos, inversiones a largo plazo.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Pasivo',
      descripcion:
        'Es una obligación financiera que implica una salida de dinero en el presente o futuro. En otras palabras, es todo lo que debés. Los pasivos reducen tu patrimonio neto.\n\nTipos de pasivo:\n- Corto plazo: tarjeta de crédito, servicios impagos.\n- Largo plazo: hipotecas, préstamos extendidos.',
      categoria: 'Educación Financiera',
    },
    {
      titulo: 'Patrimonio neto',
      descripcion:
        'Es la diferencia entre lo que tenés (activos) y lo que debés (pasivos). Representa tu situación financiera neta.\n\nSi tus activos superan tus pasivos, tu patrimonio es positivo. Si tus deudas son mayores, el patrimonio es negativo.',
      categoria: 'Educación Financiera',
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

    // Tarjeta de crédito
    {
      titulo: 'Resumen de cuenta',
      descripcion:
        'Documento que detalla tus consumos, pagos, intereses y saldo. Revisalo siempre.',
      categoria: 'Tarjeta de Crédito',
    },
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
        'Es el monto mínimo que debés pagar para no entrar en mora. El resto se financia con intereses.',
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
    // Inversiones
    {
      titulo: 'Inversión',
      descripcion:
        'Es el uso del dinero con el objetivo de obtener un rendimiento o ganancia futura. Implica asumir un cierto nivel de riesgo a cambio de un potencial beneficio.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Perfil de riesgo',
      descripcion:
        'Es una evaluación de cuánto riesgo estás dispuesto a asumir al invertir tu dinero, teniendo en cuenta tu situación financiera, tus objetivos y tu tolerancia emocional ante posibles pérdidas.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Instrumentos',
      descripcion:
        'Son los vehículos o productos que usás para invertir tu dinero. Cada uno tiene distintos niveles de riesgo, rentabilidad y liquidez. Ejemplos: bonos, acciones, plazos fijos, fondos comunes de inversión (FCI), letras del tesoro, criptomonedas.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Dolar MEP',
      descripcion:
        'Es una operatoria de arbitraje financiero mediante la cual se adquieren títulos públicos en pesos (como el AL30) y se venden en su especie D (dólares cable) en el mercado secundario local, obteniendo dólares en una cuenta bancaria en el país',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Dolar CCL',
      descripcion:
        'Es una operatoria de arbitraje financiero que consiste en la compra de activos en pesos (bonos o acciones) en la plaza local y su posterior venta en su especie en dólares en una plaza extranjera (por ejemplo, Nueva York), a través del mismo CUIT en una cuenta comitente.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Caución',
      descripcion:
        'Son préstamos a muy corto plazo en el mercado financiero. Vos le prestás dinero a otro inversor o institución, y a los pocos días te devuelven el capital con un interés fijo.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Fondo común de inversión (FCI)',
      descripcion:
        'Es un pool de dinero de muchos inversores, gestionado por profesionales, que se invierte en distintos instrumentos (bonos, acciones, plazos fijos, etc.).',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Plazo fijo',
      descripcion:
        'Es una inversión tradicional donde depositás un monto de dinero en un banco por un período determinado, a cambio de un interés fijo.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Bono',
      descripcion:
        'Son títulos de deuda emitidos por gobiernos o empresas. Cuando comprás un bono, le prestás dinero al emisor, que te lo devuelve con intereses en un plazo acordado.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Letra',
      descripcion:
        'Son similares a los bonos pero a corto plazo (días o meses). Usadas por el Estado para financiarse rápidamente.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Obligación negociable (ON)',
      descripcion:
        'Son bonos emitidos por empresas privadas para financiarse. Si bien implican riesgo corporativo, muchas ON ofrecen tasas atractivas y beneficios fiscales.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Accion',
      descripcion:
        'Representan una parte del capital social de una empresa. Si comprás acciones, te volvés socio (aunque sea mínimo), son más volátiles pero con alto potencial de rentabilidad a largo plazo.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Obligación negociable (ON)',
      descripcion:
        'Son bonos emitidos por empresas privadas para financiarse. Si bien implican riesgo corporativo, muchas ON ofrecen tasas atractivas y beneficios fiscales.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Broker (ALyC)',
      descripcion:
        'Son intermediarios financieros autorizados para operar en el mercado de capitales. A través de una cuenta comitente en un broker podés invertir en bonos, acciones, FCI o dólar MEP. Están regulados por la CNV.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'CNV',
      descripcion:
        'La Comisión Nacional de Valores regula y supervisa el mercado de capitales en Argentina. Controla a los brokers, emisores y mercados autorizados, buscando transparencia y protección al inversor.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'BYMA',
      descripcion:
        'Bolsas y Mercados Argentinos es el principal mercado de valores del país. Allí se negocian bonos, acciones, CEDEARs, ONs y otros activos financieros. Surge de la integración entre el Merval y la Bolsa de Comercio de Buenos Aires.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Caja de Valores',
      descripcion:
        'Es la entidad encargada de custodiar y registrar los títulos valores en el mercado argentino. Cada vez que comprás bonos o acciones, quedan asentados en tu nombre dentro de Caja de Valores, no en el broker.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'CEDEAR',
      descripcion:
        'Son certificados que representan acciones de empresas extranjeras pero que cotizan en pesos en el mercado argentino. Permiten invertir en compañías como Apple o Coca-Cola desde una cuenta comitente local, sin abrir cuenta en el exterior.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Dividendo',
      descripcion:
        'Es la parte de las ganancias de una empresa que se distribuye entre sus accionistas. Puede ser en forma de dinero (dividendo en efectivo) o acciones adicionales. No todas las empresas pagan dividendos.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Cuenta comitente',
      descripcion:
        'Es la cuenta de inversión que abrís en un broker (ALyC) para operar en el mercado financiero. Está asociada a tu CUIT y permite comprar, vender y custodiar activos como bonos, acciones o FCI.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'TIR (Tasa Interna de Retorno)',
      descripcion:
        'Es una medida de rentabilidad que indica el rendimiento promedio anual de una inversión, considerando todos los flujos futuros de dinero. Cuanto mayor es la TIR, más rentable es la inversión. Muy usada en bonos y proyectos.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Spread',
      descripcion:
        'Es la diferencia entre el precio de compra (bid) y el precio de venta (ask) de un activo financiero. Un spread amplio puede indicar baja liquidez o mayor riesgo en la operación.',
      categoria: 'Inversiones',
    },
    {
      titulo: 'Riesgo de mercado',
      descripcion:
        'Es la posibilidad de que una inversión pierda valor debido a cambios en variables del mercado como tasas de interés, inflación, tipo de cambio o eventos externos. Todo inversor está expuesto a este riesgo, aunque puede reducirse con diversificación.',
      categoria: 'Inversiones',
    },
    // Criptomonedas
{
  titulo: 'Blockchain',
  descripcion:
    'Es una tecnología de registro distribuido que guarda datos en bloques conectados de forma cronológica y segura. Cada bloque contiene información de transacciones, y está vinculado al anterior mediante criptografía. Su diseño descentralizado garantiza transparencia, seguridad y resistencia a manipulaciones.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Criptomoneda',
  descripcion:
    'Es una moneda digital que utiliza tecnología blockchain para operar sin intermediarios (como bancos). Sirve como medio de intercambio, reserva de valor o unidad de cuenta. Algunas de las más conocidas son Bitcoin (BTC) y Ethereum (ETH).',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Token',
  descripcion:
    'Es una unidad digital que representa un activo, valor o utilidad dentro de una blockchain. Pueden ser tokens de utilidad (acceso a servicios), de gobernanza, o incluso representar activos del mundo real (tokenización). Se emiten mayormente sobre otras blockchains, como Ethereum.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Stablecoin',
  descripcion:
    'Son criptomonedas cuyo valor está vinculado (o colateralizado) a otro activo más estable, como el dólar o el oro. Buscan reducir la volatilidad típica del mercado cripto. Ejemplos: USDT, USDC, DAI.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Wallet',
  descripcion:
    'Es una billetera digital que te permite guardar, recibir y enviar criptomonedas. Puede ser una aplicación, extensión de navegador o dispositivo físico (hardware wallet). Cada wallet tiene una clave privada asociada, que da acceso a los fondos.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Minería',
  descripcion:
    'Es el proceso mediante el cual se validan y confirman transacciones en determinadas redes blockchain (como Bitcoin). Requiere gran poder de cómputo y energía. Los “mineros” reciben recompensas en forma de criptomonedas nuevas por cada bloque validado.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Exchange',
  descripcion:
    'Plataforma donde podés comprar, vender o intercambiar criptomonedas. Pueden ser centralizados (CEX), como Binance o Ripio, o descentralizados (DEX), como Uniswap. Funcionan como casas de cambio digitales.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'DeFi (Finanzas Descentralizadas)',
  descripcion:
    'Conjunto de servicios financieros que operan sin intermediarios, a través de contratos inteligentes sobre blockchains. Permiten realizar préstamos, generar intereses, intercambios y otros servicios bancarios sin entidades tradicionales.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Smart Contract',
  descripcion:
    'Contrato digital autoejecutable programado dentro de una blockchain. Se activa automáticamente cuando se cumplen las condiciones definidas. Es la base para el funcionamiento de muchas aplicaciones DeFi y tokens.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Clave privada',
  descripcion:
    'Es una cadena de caracteres única que te da control total sobre tus criptomonedas. Si la perdés, perdés acceso a tus fondos. Si alguien más la obtiene, puede transferir tus cripto sin tu consentimiento.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Gas Fee',
  descripcion:
    'Es el costo que pagás por ejecutar una transacción en una blockchain (por ejemplo, Ethereum). Se paga para compensar a quienes procesan y validan esas operaciones (mineros o validadores).',
  categoria: 'Criptomonedas',
},
{
  titulo: 'NFT (Token No Fungible)',
  descripcion:
    'Activos digitales únicos y no intercambiables, almacenados en una blockchain. Representan propiedad sobre obras de arte, música, juegos, entradas, etc. Su valor depende de su rareza o utilidad.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Proof of Work (PoW)',
  descripcion:
    'Mecanismo de consenso usado por algunas blockchains (como Bitcoin) que requiere que los mineros resuelvan problemas matemáticos complejos para validar transacciones y crear nuevos bloques.',
  categoria: 'Criptomonedas',
},
{
  titulo: 'Proof of Stake (PoS)',
  descripcion:
    'Mecanismo alternativo al PoW en el cual los validadores son seleccionados en función de la cantidad de criptomonedas que tienen “en juego” (stake). Es más eficiente energéticamente. Lo usa, por ejemplo, Ethereum desde su actualización a ETH 2.0.',
  categoria: 'Criptomonedas',
},

 {
  titulo: 'ARCA (ex AFIP)',
  descripcion:
    'Es la Administración Federal de Recursos de la República Argentina. Reemplaza a la AFIP y es el organismo encargado de la recaudación, fiscalización y control de los impuestos nacionales. También administra la seguridad social y aduanas.',
  categoria: 'Impuestos',
},
{
  titulo: 'Impuesto a las Ganancias',
  descripcion:
    'Es un tributo progresivo que grava los ingresos obtenidos por personas físicas y jurídicas. A mayor ganancia, mayor alícuota. Se aplica sobre sueldos, alquileres, inversiones, actividad profesional o comercial, entre otros.',
  categoria: 'Impuestos',
},
{
  titulo: 'IVA (Impuesto al Valor Agregado)',
  descripcion:
    'Es un impuesto al consumo que se aplica en cada etapa de producción y comercialización. Está incluido en la mayoría de los precios que pagás (por ejemplo, en un ticket de supermercado). La alícuota general en Argentina es del 21%.',
  categoria: 'Impuestos',
},
{
  titulo: 'Monotributo',
  descripcion:
    'Es un régimen simplificado para pequeños contribuyentes que unifica el pago de impuestos nacionales (IVA y Ganancias) y aportes jubilatorios. Está segmentado en categorías según el nivel de facturación anual.',
  categoria: 'Impuestos',
},
{
  titulo: 'Ingresos Brutos',
  descripcion:
    'Es un impuesto provincial que grava el total de ingresos generados por una actividad económica, sin importar si hubo o no ganancia. Se paga en la jurisdicción donde se desarrolla la actividad (puede ser en varias si es multilateral).',
  categoria: 'Impuestos',
},
{
  titulo: 'Retención',
  descripcion:
    'Es un importe que se descuenta automáticamente en una operación y se deposita a cuenta del fisco. Funciona como un pago anticipado del impuesto correspondiente (por ejemplo, en pagos con tarjeta, honorarios o facturas).',
  categoria: 'Impuestos',
},
{
  titulo: 'Percepción',
  descripcion:
    'Es un monto adicional que se cobra en determinadas operaciones (como compras en el exterior o importaciones) y que se toma como adelanto de impuestos futuros, como Ganancias o Bienes Personales.',
  categoria: 'Impuestos',
},
{
  titulo: 'Régimen General',
  descripcion:
    'Es el sistema tributario al que deben adherir quienes no califican para el Monotributo. Incluye la inscripción separada en IVA, Ganancias, Autónomos y otros impuestos según la actividad.',
  categoria: 'Impuestos',
},
{
  titulo: 'Declaración Jurada',
  descripcion:
    'Es el documento formal mediante el cual informás a ARCA los ingresos, deducciones, gastos e impuestos que debés pagar. Puede ser mensual, trimestral o anual, según el tributo. Se presenta de forma digital.',
  categoria: 'Impuestos',
},
{
  titulo: 'Deducción',
  descripcion:
    'Es un monto que podés restar de tus ingresos antes de calcular el impuesto a pagar. Puede ser por familiares a cargo, alquiler, gastos médicos, entre otros. Aplica principalmente en Ganancias.',
  categoria: 'Impuestos',
},
{
  titulo: 'Autónomo',
  descripcion:
    'Es una persona que trabaja por cuenta propia, fuera del Monotributo. Debe inscribirse en el Régimen General y realizar aportes previsionales específicos además del pago de impuestos como IVA y Ganancias.',
  categoria: 'Impuestos',
},
{
  titulo: 'Bienes Personales',
  descripcion:
    'Es un impuesto nacional que grava el patrimonio (bienes) que poseas al 31 de diciembre de cada año, siempre que supere un mínimo no imponible. Incluye inmuebles, autos, dinero, inversiones, entre otros.',
  categoria: 'Impuestos',
},
{
  titulo: 'Período fiscal',
  descripcion:
    'Es el lapso de tiempo que se toma como referencia para calcular, declarar y pagar un impuesto. Puede ser mensual (IVA, Ingresos Brutos) o anual (Ganancias, Bienes Personales).',
  categoria: 'Impuestos',
},
{
  titulo: 'CUIT',
  descripcion:
    'Es el Código Único de Identificación Tributaria. Se utiliza para identificar a una persona física o jurídica frente a ARCA. Es obligatorio para facturar, operar con bancos o realizar actividades económicas registradas.',
  categoria: 'Impuestos',
},
{
  titulo: 'CUIL',
  descripcion:
    'Es el Código Único de Identificación Laboral. Se asigna a todas las personas físicas que trabajan en relación de dependencia o están registradas en el sistema previsional argentino. Es necesario para realizar aportes jubilatorios, declarar ingresos y operar en organismos públicos.',
  categoria: 'Impuestos',
},


    // ← Seguí agregando más términos siguiendo el mismo formato
  ];

  // ✅ Íconos asociados a categorías
  iconosPorCategoria: { [categoria: string]: string } = {
    'Educación Financiera': 'book-open-check',
    'Ahorro & Consumo': 'piggy-bank',
    'Trabajo e Ingresos': 'dollar-sign',
    'Tarjeta de Crédito': 'credit-card',
    'Banca Tradicional': 'landmark-icon',
    Inversiones: 'chart-line',
    Criptomonedas: 'bitcoin',
    Impuestos: 'coins',
    Seguros: 'shield',
    Fintech: 'wallet',
    Préstamos: 'banknote',
    Gastos: 'trending-down',
    Sueldo: 'calendar-days',
  };

  categoriasUnicas(): string[] {
    return [...new Set(this.terminos.map((t) => t.categoria))];
  }

  terminosFiltradosPorCategoria(categoria: string): TerminoFinanciero[] {
    return this.terminos.filter((t) => t.categoria === categoria);
  }
}

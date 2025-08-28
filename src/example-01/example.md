🔥 Reto: Procesador funcional de transacciones financieras

Tienes una lista de transacciones financieras en formato JSON. Cada transacción tiene:

type Transaction = {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  date: string; // ISO string
  status: 'pending' | 'completed' | 'failed';
};

Tu objetivo es construir un pipeline funcional y extensible que permita:

✅ Filtrar solo las transacciones completadas.

✅ Agrupar las transacciones por mes y por moneda.

✅ Calcular el total de cada grupo.

✅ Convertir los totales a USD usando tasas ficticias de cambio.

✅ Retornar un resultado de forma segura, usando un tipo Either o Result.
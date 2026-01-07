
export interface InvoiceItem {
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  montoTotal: number;
}

export interface InvoiceData {
  id: string;
  ruc: string;
  nombreEmpresa: string;
  direccion: string;
  fechaEmision: string;
  moneda: string;
  items: InvoiceItem[];
  montoTotalFactura: number;
  imageUrl?: string;
}

export interface ExtractionResult {
  success: boolean;
  data?: InvoiceData;
  error?: string;
}

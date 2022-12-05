export interface Produtos {
  id: number;
  nomeproduto: string;
  produtopreco: number;
  genero_id: number;
  descricao: string;
  tamanho: number;
  tamanho2: string;
  avaliacao: number;
  cor: string;
  cor2: string;
  imagem: string;
}

export class Cliente {
  id?: number;
  senderName?: string;
  senderCPF?: number;
  senderEmail?: string;
  senderAreaCode?: number;
  senderPhone?: number;
  shippingAddressStreet?: string;
  shippingAddressNumber?: number;
  shippingAddressComplement?: string;
  shippingAddressDistrict?: string;
  shippingAddressCity?: string;
  shippingAddressState?: string;
  shippingAddressPostalCode?: number;
}

export class Cartao {
  id?: number;
  nomepagamento?: string;
  creditCardHolderName?: string;
  numCartao?: string;
  parcelas?: string;
  mesValidade?: string;
  anoValidade?: string;
  cvvCartao?: string;
  creditCardHolderCPF?: string;
  creditCardHolderBirthDate?: Date;
}

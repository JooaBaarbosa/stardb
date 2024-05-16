export class CreateProdutoDto {
  nome: string;
  susep: string;
  expiracaoDeVenda: string;
  valorMinimoAporteInicial: number;
  valorMinimoAporteExtra: number;
  idadeDeEntrada: number;
  idadeDeSaida: number;
  carenciaInicialDeResgate: number;
  carenciaEntreResgates: number;
}

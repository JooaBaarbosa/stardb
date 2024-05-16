import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  dataDeNascimento: string;

  @IsString()
  genero: string;

  @IsString()
  rendaMensal: number;
}

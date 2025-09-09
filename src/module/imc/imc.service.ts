import { Injectable } from "@nestjs/common";
import { CalcularImcDto } from "./dto/calcular-imc-dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImcEntity } from './entities/imc.entity';

@Injectable()
export class ImcService {
  constructor(
    @InjectRepository(ImcEntity)
    private readonly imcRepository: Repository<ImcEntity>,
  ) {}

  async calcularImc(data: CalcularImcDto): Promise<ImcEntity> {
    const { altura, peso } = data;
    const imc = peso / (altura * altura);
    const imcRedondeado = Math.round(imc * 100) / 100;

    let categoria: string;
    if (imc < 18.5) categoria = 'Bajo peso';
    else if (imc < 25) categoria = 'Normal';
    else if (imc < 30) categoria = 'Sobrepeso';
    else categoria = 'Obeso';

    const resultado = this.imcRepository.create({
      peso,
      altura,
      imc: imcRedondeado,
      categoria,
    });

    return this.imcRepository.save(resultado);
  }

  async historial(): Promise<ImcEntity[]> {
    return this.imcRepository.find({ order: { fecha: 'DESC' } });
  }
}


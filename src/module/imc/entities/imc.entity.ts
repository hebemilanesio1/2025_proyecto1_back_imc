import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as moment from 'moment-timezone';

@Entity('imc')
export class ImcEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  peso: number;

  @Column('float')
  altura: number;

  @Column('float')
  imc: number;

  @Column()
  categoria: string;

  @Column({ type: 'timestamptz' })
  fecha: Date;

  @BeforeInsert()
  setFecha() {
    this.fecha = moment().tz('America/Argentina/Buenos_Aires').toDate();
  }

  
}

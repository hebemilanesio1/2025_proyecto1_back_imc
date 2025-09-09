import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('imc')
export class ImcEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 5, scale: 2 })
  peso: number;

  @Column('decimal', { precision: 5, scale: 2 })
  altura: number;

  @Column('decimal', { precision: 5, scale: 2 })
  imc: number;

  @Column()
  categoria: string;

  @CreateDateColumn()
  fecha: Date;
}

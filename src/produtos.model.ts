import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table
export class Produto extends Model<Produto> {

  /* id: number */

  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  cod: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  price: number

  
  
}
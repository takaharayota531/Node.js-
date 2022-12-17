import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person  from 'App/Models/Person'

// person用のダミーデータを生成している
export default class extends BaseSeeder {
  public async run () {
    //createManyで複数のダミーデータを生成
    await Person.createMany(
      [
        {
          name: 'John',
          email: 'John@John.com',
          age:23,
        },
        {
          name: 'Jiashn',
          email: 'Johxaxasxn@John.com',
          age:2332232,
        },
        {
          name: 'yoshimura',
          email: 'yoshimura@Aida.com',
          age:23,
        },
        {
          name:'shineda',
          email: 'shineda@Aida.com',
          age:237892374893278732,
        }
      ]
    )
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
    public async index(ctx:HttpContextContract){
        const people=await Person.all()
        const data={
            title:'Sample',
            message:'Lucid',
            data:people
        }
        return ctx.view.render('people/index',data)

    }
}

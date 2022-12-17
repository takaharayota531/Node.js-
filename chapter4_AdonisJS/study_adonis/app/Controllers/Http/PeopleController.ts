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
    public async add(ctx:HttpContextContract){
        const data={title:'Add page', message:'You can add another person information'}
        return    ctx.view.render('people/add',data);

    }
    public async add_posted(ctx:HttpContextContract){
        // const name=ctx.request.input('name')
        // const email=ctx.request.input('email')
        // const age= parseInt(ctx.request.input('age'))
        // const data={
        //     name:name,
        //     email:email,
        //     age:age
        // }

        //create メソッドでデータを保存
        await Person.create(ctx.request.body())
        //person一覧画面に遷移
        return ctx.response.redirect('/person')
    }
    public async edit(ctx:HttpContextContract){
        const id=ctx.request.param('id')
        const person= await Person.find(id)
        const data={
            title:'Edit',
            message:'edit the profile',
            person: person
        }
        return ctx.view.render('people/edit', data)
    }

    public async edit_posted(ctx:HttpContextContract){
        const id=ctx.request.param('id')
        const person=await Person.find(id)
        await person?.merge(ctx.request.body()).save()
        return ctx.response.redirect('/person')
    }

    public async delete(ctx:HttpContextContract){
        const id=ctx.request.param('id')
        const person= await Person.find(id)
        const data={
            title:'DElete',
            message:'下記人物のプロフィールを削除します',
            person: person
        }
        return ctx.view.render('people/delete', data)
    }
    public async delete_posted(ctx:HttpContextContract){
        const id=ctx.request.param('id')
        const person=await Person.find(id)
        await person?.delete()
        return ctx.response.redirect('/person')

    }

    //getもpostも行っている
    public async find(ctx:HttpContextContract){
        var find:string
        var people:Person[]

        if(ctx.request.method() =='POST'){
            find=ctx.request.input('find')
            people=await Person.query().where('name','=',find).exec()
    }else{
        find=''
        people=await Person.all()
    }
    const send_data={
        title:'Find',
        message:'ユーザー探し',
        find:find,
        data:people
    }
    return ctx.view.render('people/find', send_data)
}
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
    public async index(ctx:HttpContextContract){
        var list=ctx.session.get('list');
        if(list==undefined) {
            list=[];
            ctx.session.put('list',list);
        }

        const data={
            title:'Sample',
            message:'messageを送信',
            list:list
        }
        return ctx.view.render('samples/index',data);
    }

    public async index_posted(ctx:HttpContextContract){
        // const body = ctx.request.body;
        const message=ctx.request.input('msg');
        const list = ctx.session.get('list');
        list.unshift(message);
        ctx.session.put('list',list);
        const data={
            title:'Sample',
            message:message+"を送信しました",
            list:list
        }
        return ctx.view.render('samples/index',data);
    }
}

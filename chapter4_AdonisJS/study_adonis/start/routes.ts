/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

///URLの定数管理
const SAMPLES_CONTROLLER ='SamplesController.'
const PEOPLE_CONTROLLER ='PeopleController.'

const INDEX='index'
const INDEX_POSTED='index_posted'
const ADD='add'
const ADD_POSTED='add_posted'
const EDIT='edit'
const EDIT_POSTED='edit_posted'
const DELETE='delete'
const DELETE_POSTED='delete_posted'
const FIND='find'
const FIND_POSTED='find_post'

const SAMPLE_URL='/sample'
const PERSON_URL='/person'
const ADD_PATH='/add'
const EDIT_PATH='/edit'
const DELETE_PATH='/delete'
const FIND_PATH='/find'
const ID_PATH='/:id'
///

import Route from '@ioc:Adonis/Core/Route'




Route.get('/', async ({ view }) => {
  const data={
    title:'Sample Page',
    message:'This is a sample page'
  };
  return view.render('welcome',data);
})

Route.get(SAMPLE_URL+'/:id/:pass',SAMPLES_CONTROLLER+INDEX);
Route.post(SAMPLE_URL,SAMPLES_CONTROLLER+INDEX_POSTED);
Route.get(PERSON_URL,PEOPLE_CONTROLLER+INDEX);
Route.get(PERSON_URL+ADD_PATH,PEOPLE_CONTROLLER+ADD);
Route.post(PERSON_URL+ADD_PATH,PEOPLE_CONTROLLER+ADD_POSTED);
Route.get(PERSON_URL+EDIT_PATH+ID_PATH,PEOPLE_CONTROLLER+EDIT);
Route.post(PERSON_URL+EDIT_PATH+ID_PATH,PEOPLE_CONTROLLER+EDIT_POSTED);
Route.get(PERSON_URL+ DELETE_PATH+ID_PATH,PEOPLE_CONTROLLER+DELETE);
Route.post(PERSON_URL+DELETE_PATH+ID_PATH,PEOPLE_CONTROLLER+DELETE_POSTED);
Route.any(PERSON_URL+FIND_PATH,PEOPLE_CONTROLLER+FIND);
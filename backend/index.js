import express from 'express'
const app = express()
app.use(express.json()) // garantir que o express entendera json
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

app.put('/:id', async (req, res) => {

    await prisma.user.update({

        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) // status de sucesso
})


app.post('/', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.get('/', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,           // http://localhost:3001/?age=20&name=Camily
                age: req.query.age,
                email: req.query.email
            }
        })
    }else{
        users = await prisma.user.findMany()
    }

    res.status(201).json(users)
})


app.delete('/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(201).json({ message: "Usuario deletado" })
})

app.listen(3001, () => {
    console.log('Our server is running')
})



// Mongo    Name:BrunoAndrade                                password : uwmGspYpdxgHSibt
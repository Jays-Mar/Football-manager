const mongoose = require ('mongoose')
// import { Int32 } from "mongodb"
const Int32 = require('mongodb').Int32
const { stringify } = require("xpress/lib/string")
const { string } = require("xpress").string

const playerScheme = new mongoose.Schema(

    {
        id: {
            type: Int32,
            unique:true
        },
        nombre: {
            type: string
        },
        apellido: {
            type: string
        },
        numero: {
            type:  Int32
        },
        goles: {
            type: Int32
        },
        division: {
            type: Int32
        }

    }
)

module.exports = mongoose.model( 'jugadores' ,playerScheme)
const { Timestamp } = require('mongodb');
// const Timestamp = require('mongoose-Timestamp');
const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);


// Categoria  Categoria a la que pertenece el equipo
// Grupo    Grupo de equipos al que pertence dentro de la division
// Equipo       Nombre del equipo


var TemporadaScheme = new mongoose.Schema(

   

    {
        Categoria: {
            type: String
        },
        Jornada: {
            type: String
        },
        Grupo: {
            type: String
        },
        PartidaJornada: {
            type: Int32
        },
        GEquipo1: {
            type: String
        },
        GEquipo2: {
            type: String
        },
        Equipo1: {
            type: String
        },
        Golese1: {
            type: Int32
        },
        Equipo2: {
            type: String
        },
        Golese2: {
            type: Int32
        },
        Campo: {
            type: String
        },
        Fecha: {
            type: Date
        },
        hora: {
            type: String
        },
        TiempoJuego: {
            type: Int32
        },
        RematesA1: {
            type: Int32
        },
        RematesA2: {
            type: Int32
        },
        TarjetasAE1: {
            type: Int32
        },
        TarjetasRE2: {
            type: Int32
        },
        TarjetasAE1: {
            type: Int32
        },
        TarjetasRe2: {
            type: Int32
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model( 'datosTempo' ,TemporadaScheme)
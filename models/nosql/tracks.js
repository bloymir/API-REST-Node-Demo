const mongoose = require('mongoose')

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album:{
            type: String
        },
        cover: {
            type: String,
            validate: {
                valitor: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            }
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            }
        },
        duration: {
            star: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("tracks", TracksScheme)
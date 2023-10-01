const Artists = require('../models/artists.model')


const getAllArtists = async (req, res) => {
    try {
        const allArtists = await Artists.find({});
        if (allArtists) {
            res.status(200).send(allArtists);
        } else {
            res.status(404).send({ message: 'data not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'server error', error });
    }
}

const createArtists = async (req, res) => {
    try {
        const newArtists = await Artists.insertMany([
            {
                artist_name: "Keepitreal",
                artist_img: "https://i.ibb.co/g3Yn03W/Keepitreal.png",
                volume: 1000,
                nfts_sold: 500,
                followers: 10000,
                bio: "I am an artist who loves to create amazing digital art!",
                links: {
                    website_link: "https://artist1website.com",
                    discord_link: "https://discord.gg/",
                    youtube_link: "https://youtube.com/",
                    tweeter_link: "https://twitter.com/",
                    instagram_link: "https://instagram.com/"
                }
            },
            {

                artist_name: "DigiLab",
                artist_img: "https://i.ibb.co/nPY10b4/DigiLab.png",
                volume: 500,
                nfts_sold: 250,
                followers: 5000,
                bio: "Passionate about creating art that inspires!",
                links: {
                    website_link: "https://artist2website.com",
                    discord_link: "https://discord.gg/artist2",
                    youtube_link: "https://youtube.com/artist2",
                    tweeter_link: "https://twitter.com/artist2",
                    instagram_link: "https://instagram.com/artist2"
                }
            },
            {

                artist_name: "GravityOne",
                artist_img: "https://i.ibb.co/SVsNzTV/Gravity-One.png",
                volume: 800,
                nfts_sold: 400,
                followers: 8000,
                bio: "Art is my passion, and I love sharing it with the world!",
                links: {
                    website_link: "https://artist3website.com",
                    discord_link: "https://discord.gg/artist3",
                    youtube_link: "https://youtube.com/artist3",
                    tweeter_link: "https://twitter.com/artist3",
                    instagram_link: "https://instagram.com/artist3"
                }
            },
            {
                artist_name: "Juanie",
                artist_img: "https://i.ibb.co/x7ftrWB/Juanie.png",
                volume: 1200,
                nfts_sold: 600,
                followers: 12000,
                bio: "Creating art that speaks to the soul!",
                links: {
                    website_link: "https://artist4website.com",
                    discord_link: "https://discord.gg/artist4",
                    youtube_link: "https://youtube.com/artist4",
                    tweeter_link: "https://twitter.com/artist4",
                    instagram_link: "https://instagram.com/artist4"
                }
            },
            {
                artist_name: "BlueWhale",
                artist_img: "https://i.ibb.co/fYW3Nhd/Blue-Whale.png",
                volume: 300,
                nfts_sold: 150,
                followers: 3000,
                bio: "Art is my life, and I'm grateful to share my creations!",
                links: {
                    website_link: "https://artist5website.com",
                    discord_link: "https://discord.gg/artist5",
                    youtube_link: "https://youtube.com/artist5",
                    tweeter_link: "https://twitter.com/artist5",
                    instagram_link: "https://instagram.com/artist5"
                }
            },
            {

                artist_name: "mr_fox",
                artist_img: "https://i.ibb.co/Bf8hfx1/mr-fox.png",
                volume: 300,
                nfts_sold: 150,
                followers: 3000,
                bio: "Art is my life, and I'm grateful to share my creations!",
                links: {
                    website_link: "https://artist5website.com",
                    discord_link: "https://discord.gg/artist5",
                    youtube_link: "https://youtube.com/artist5",
                    tweeter_link: "https://twitter.com/artist5",
                    instagram_link: "https://instagram.com/artist5"
                }
            }
        ])
        if (newArtists) {
            res.status(200).send(newArtists);
        } else {
            res.status(404).send({ message: 'data not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'server error', error });
    }
}


module.exports = { getAllArtists,createArtists };
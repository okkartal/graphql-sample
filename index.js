import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//data
import db from "./db.js";
//types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        videos(){
            return db.videos;
        },
        video(_, args){
            return db.videos.find(video => video.id === args.id);
        },
        authors(){
            return db.authors;
        },
        author(_, args){
            return db.authors.find(author => author.id === args.id);
        },
        reviews(){
            return db.reviews;
        },
        review(_, args){
            return db.reviews.find(review => review.id === args.id);
        }
    },
    Video: {
        reviews(parent){
            return db.reviews.filter(review => review.video_id === parent.id);
        }
    },
    Review: {
        author(parent){
            return db.authors.find(author => author.id === parent.author_id);
        },
        video(parent){
            return db.videos.find(video => video.id === parent.video_id);
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    Mutation: {
        addVideo(_, args){
            let video = {
                ...args.video,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.videos.push(video);
            return video;
        },
        deleteVideo(_, args){
            db.videos = db.videos.filter(video => video.id !== args.id);
            return db.videos;
        },
        updateVideo(_, args){
            db.videos = db.videos.map(video => {
                if(video.id === args.id){
                    return {
                        ...video,
                        ...args.edits
                    }
                }
                return video;
            });
            return db.videos.find(video => video.id === args.id);
        }
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = startStandaloneServer( server, {
    listen: {
        port: 4000,
    },
});

console.log(`🚀 Server ready at ${url}`);
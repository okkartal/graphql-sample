export const typeDefs = `#graphql
  type Video {
    id: ID!
    title: String!
    quality: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    video: Video!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    videos: [Video],
    video(id: ID!): Video,
    reviews: [Review],
    review(id: ID!): Review,
    authors: [Author],
    author(id: ID!): Author
  },
  type Mutation {
   addVideo(video: AddVideoInput!): Video,
   deleteVideo(id: ID!): [Video],
   updateVideo(id: ID!, edits: EditVideoInput): Video
  },
  input AddVideoInput {
    title: String!,
    quality: [String!]!
  },
  input EditVideoInput {
    title: String,
    quality: [String!]
  },
`
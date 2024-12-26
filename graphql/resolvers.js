const { Query } = require('mongoose');
const Receipe = require('../models/Receipe');

module.exports = {
    Query: {
        async getReceipes(_, {amount}){
            try {
                const receipes = await Receipe.find().sort({createdAt: -1}).limit(amount);
                return receipes;
            } catch (error) {
                throw new Error(error);
            }
        },
        async receipe(_, {ID}){
            try {
                const receipe = await Receipe.findById(ID);
                if(receipe) return receipe;
                throw new Error('Receipe not found');
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        async createReceipe(_, {receipeInput: {name, description}}){
            const newReceipe = new Receipe({
                name,
                description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            });
            const receipe = await newReceipe.save();
            return receipe;
        },
        async deleteReceipe(_, {ID}){
            try {
                await Receipe.findByIdAndDelete(ID);
                return true;
            } catch (error) {
                throw new Error(error);
            }
        },
        async editReceipe(_, {ID, receipeInput: {name, description}}){
            try {
                await Receipe.findByIdAndUpdate(ID, {name, description});
                return true;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}
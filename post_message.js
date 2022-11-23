import mongoose from 'mongoose';
// var SchemaTypes = mongoose.Schema.Types;
const postSchema = mongoose.Schema({
    entrepreneur: String,
    pitchTitle: String,
    pitchIdea: String,
    askAmount: mongoose.Decimal128,
    equity: mongoose.Decimal128,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

import mongoose from 'mongoose';
// var SchemaTypes = mongoose.Schema.Types;
const investorSchema = mongoose.Schema({
    investor: String,
    amount: mongoose.Decimal128,
    comment: String,
    equity: mongoose.Decimal128,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var InvestorMessage = mongoose.model('InvestorMessage', investorSchema);

export default InvestorMessage;

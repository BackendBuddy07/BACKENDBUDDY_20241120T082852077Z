const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
{
    name: { 
        type: String,
        required: true,
        unique: false
    },
field2 : [
{ 
  
   field2nest: { 
        type: Number,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('Test', TestSchema);

import mongoose , {Schema} from 'mongoose';

const topicSchmea =  new Schema(
    {
        title:String,
        description : String, 
    },
    {
        timespace : true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic" , topicSchmea);

export default Topic;
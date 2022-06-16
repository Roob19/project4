import mongoose from 'mongoose';

const Schema = mongoose.Schema

const eventSchema = new Schema {
    {
        attending_count: {
            type: Number 
        }, 
        category: {
            type: String, 
        }, 
        cost: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+2")+"e-2");}
        }, 
        cost_max: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+2")+"e-2");}
        }, 
        description: {
            type: String
        }, 
        event_site_url: {
            type: String
        }, 
        id: {
            type: String
        }, 
        image_url: {
            type: String
        }, 
        interested_count: {
            type: Number
        },
        is_canceled: {
            type: Boolean
        }, 
        is_free: {
            type: Boolean
        },
        is_official: {
            type: Boolean
        },
        latitude: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+7")+"e-7");}
        }, 
        longitude: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+7")+"e-7");}
        },
        name: {
            type: String
        },
        tickets_url: {
            type: String
        },
        time_end: {
            type: Date
        },
        time_start: {
            type: Date
        },
        location: {
            address1: {
                type: String
            }, 
            address2: {
                type: String
            }, 
            address3: {
                type: String
            }, 
            city: {
                type: String
            }, 
            zip_code: {
                type: String
            }, 
            country: {
                type: String
            }, 
            state: {
                type: String
            }, 
            display_address: {
                [String]
            }, 
            cross_streets: {
                type: String
            }
        }, 
        business_id: {
            type: String
        }
    }
}

const EventModel = mongoose.model('EventModel', eventSchema);

export {
    EventModel
}

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
        coordinates: {
            latitude: {
                type: Number, 
                set: function(num){return +(Math.round(num+"e+7")+"e-7");}
            }, 
            longitude: {
                type: Number, 
                set: function(num){return +(Math.round(num+"e+7")+"e-7");}
            }
        }, 
        transactions: {
            type: String
        }, 
        price: {
            type: String
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
            }
        }, 
        phone: {
            type: String
        }, 
        display_phone: {
            type: String
        }, 
        distance: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+11")+"e-11");}
        }
    }
}

const EventModel = mongoose.model('EventModel', eventSchema);

export {
    EventModel
}
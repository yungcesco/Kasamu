var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event,context) => {
    let date = new Date()

    if (event.request.userAttributes.sub) {
        let params = {
            Item: {
                'member_id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'first_name' :{S: ''},
                'middle_name' :{S: ''},
                'last_name' :{S: ''},
                'user_id': {S: event.userName},
                'default_email': {S: event.request.userAttributes.email},
                'created':{S: date.toISOString()},
                'updated':{S: date.toISOString()},
                'default_country_code' :{S:''} ,
                'default_langage_code' :{S:''} ,
                'default_region_name' :{S:''} ,
                'origin_country_code' :{S:''} ,
                'origin_region_name' :{S:''} ,
                'default_phone_number' :{S:''} ,
                'default_postal_address' :{S:''} ,
                'birth_country_code' :{S:''} ,
                'citizenship_country_code' :{S:''} ,
                'residence_country_code' :{S:''} ,
            },
            TableName: process.env.USERTABLE
        }
        try {
            await ddb.putItem(params).promise()
            console.log("success")
        } catch (err) {
            console.log("Error", err)    
        }
        context.done(null, event)
    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
}
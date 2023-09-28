describe('Post call',() =>{
    let accessToken = '24838d97dbd78fb7446d07ae4ee92f29cae855c7e4af9773f9a9223f4bcf9c59'

    it('Create user',() =>{
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'Authorization' : 'Bearer '+accessToken
            },
            body : {
                "name" : "test automation",
                "gender" : "male",
                "email" : "dsajhd@gmail.com",
                "status" : "active"
            }
        }).then((res) =>{
            expect(res.status).eq(201)
            expect(res.body.data).has.property('email','dsajhd@gmail.com'),
            expect(res.body.data).has.property('name','test automation'),
            expect(res.body.data).has.property('status','active'),
            expect(res.body.data).has.property('gender','male')
        })
    })
})
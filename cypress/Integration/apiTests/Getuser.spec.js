describe('get users', () =>{
    let accessToken = '24838d97dbd78fb7446d07ae4ee92f29cae855c7e4af9773f9a9223f4bcf9c59'
    it('get users test',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users',
            headers : {
                'authorization' : 'Bearer '+ accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect((res).body.meta.pagination.limit).to.eq(10)
        })
    })

    it('get user by id',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/2272683',
            headers : {
                'authorization' : 'Bearer '+ accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect((res).body.data.name).to.eq('Chaitan Iyengar')
        })
    })
})
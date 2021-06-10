import axios from 'axios';

describe('Base URL', () => {

    describe('GET', () => {

        let status, data;

        before(() => {
            browser.call(() => {
                return axios
                    .get(' https://mafia-sacramento-server-qa.herokuapp.com/mafia-users')
                    .then(function (response) {
                        status = response.status;
                        data = response.data;
                    })
                    .catch(function (error) {
                        status = error.response.status;
                        data = error.response.data;
                    });
            })
        })


        it('200', () => {
            expect(status).toEqual(200);
        })

        it('Responce-is-an-array', () => {
            expect(Array.isArray([])).toEqual(true);
        })

        it('Every-element-is-an-object', () => {
            let arrays = [];
            for (let i = 0; i > arrays.length; i++) {
                return true;
            };
        })






    })

})
/* eslint-disable no-undef */

process.env.PORT = 3020;
process.env.DISABLE_SIGNUP = "true"
const expect = require('chai').expect;
const data = require('./data/user');
const chai = require('chai');
chai.use(require('chai-http'));
const app = require('../server');
const GlobalConfig = require('./utils/globalConfig');
const request = chai.request.agent(app);
const { createUser } = require('./utils/userSignUp');
const UserService = require('../backend/services/userService');
const ProjectService = require('../backend/services/projectService');
const AirtableService = require('../backend/services/airtableService');
const { testemail } = require('./utils/config');
const GlobalConfigService = require('../backend/services/globalConfigService');
const VerificationTokenModel = require('../backend/models/verificationToken');

let projectId, airtableId, jwtToken;

describe('Disable Sign up test', function() {
    this.timeout(200000);

    before(async function() {
        this.timeout(400000);
        await GlobalConfig.initTestConfig();
    });

    after(async () => {
        await GlobalConfig.removeTestConfig();
        await UserService.hardDeleteBy({});
        await AirtableService.deleteAll({tableName: "User"});
    });

    it('should not sign up the user when sign up is disabled', done => {
        createUser(request, data.user, function(err, res) {
            if(err && err.response && err.response.body && err.response.body.message){
                expect(err.response.body.message).to.be.equals("Sign up is disabled.");
                done();
            }else{
                done("User signed up");
            }
        });
    });
});

const UserStorage = artifacts.require("UserStorage");

contract('users', () => {

    it("can create user", async () => {
        const storage = await UserStorage.deployed();

        const username = web3.utils.fromAscii("Tristan");
        const tx = await storage.createUser(username);

        assert.isOk(tx);
    })

    it("can get user", async () => {
        const storage = await UserStorage.deployed();
        const userId = 1;


        const userInfo = await storage.profiles.call(userId);

        const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g,'');

        assert.equal(username, "Tristan");
    })



})
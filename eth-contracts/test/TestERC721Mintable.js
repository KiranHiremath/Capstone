var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("TEST","TEST",{from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two,2);
            await this.contract.mint(account_two,3);
            await this.contract.mint(account_two,4);
            await this.contract.mint(account_three,5);
     })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply();
            assert.equal(supply,4,"Incorrect total supply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance,3,"Incorrect balance");

            balance = await this.contract.balanceOf(account_three);
            assert.equal(balance,1,"Incorrect balance");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(2);
            assert.equal(tokenURI,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2","Incorrect token URI");
        })

        it('should transfer token from one owner to another by approved operator', async function () { 
            this.contract.approve(account_three, 2, {from:account_one});
            await this.contract.transferFrom(account_two, account_three, 2, {from:account_two});

            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance,2,"transfer from account balance off");

            balance = await this.contract.balanceOf(account_three);
            assert.equal(balance,2,"transfer to account balance off");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("TEST","TEST",{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try{
                 await this.contract.mint.call(account_two,2,{from:account_two});
            }catch(e){
                assert.equal(true, e.message.search("Not a contract owner") >=0);
            }
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner({from:account_two});
            assert.equal(owner,account_one,"doesn't return contract owner");            
        })

    });
})
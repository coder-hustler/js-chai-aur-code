const user = {
    username: "prem",
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcomeMessage();

const chai = () => ({username: 'prem'});
console.log(chai());
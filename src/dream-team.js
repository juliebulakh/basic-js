module.exports =  function createDreamTeam(members) {
    let encrypt = [];
    if (members&&members.length) {
        let newMembers=members.filter(a => typeof a == "string");
        for (let element of newMembers) {
            let firstLetter = element.trim().split('').shift();
                encrypt.push(firstLetter.toUpperCase());
        }
        return encrypt.sort().join('');
    }
    else return false;
};
module.exports = function calculateHanoi(diskNumber,turnsSpeed) {
        let obj = new Object();
        obj.turns = Math.pow(2, diskNumber) - 1;
        obj.seconds = obj.turns/turnsSpeed*3600;
        return obj;
}
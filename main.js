console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);

/*var protoType = {
  value: 1,
  method () {
    return 14
  },
}

var obj = Object.create(protoType)
console.log(obj.value)
console.log(obj.method())

var testObj = {
  toString () {
    return 'test ---> ' + super.toString()
  },
}

console.log('>>>> *** ', testObj.toString())

let testObj_variable = testObj.toString()
console.log(testObj_variable)

const DaysEnum = Object.freeze({ 'monday': 1, 'tuesday': 2, 'wednesday': 3 })

console.log(DaysEnum.monday)

if (DaysEnum.monday === protoType.value) {
  console.log('prototype monday')
}

const localFileName = __filename;
console.log('>>>', localFileName);
console.log(__filename);
console.log(__dirname);*/

class Shape {
  constructor (color) {
    this._color = color
  }
}

class Circle extends Shape {
  constructor (color, radius) {
    super(color)
    this._radius = radius
  }
}

var objCircle = new Circle('black', 20)
console.log(objCircle)

class VersionArray extends Array {
  constructor () {
    super()
    this.history = [[]]
  }

  commit () {
    // 변경 내용을 히스토리에 저장.
    this.history.push(this.slice())
  }

  revert () {
    this.splice(0, this.length, this.history[this.history.length - 1])
  }

}

// var VersionArray = new VersionArray()


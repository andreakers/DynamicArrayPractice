class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(this.capacity)
    if (this.length > this.capacity) {
      this.data.length*= 2
      this.capacity*= 2
    }
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.data[this.length] = val
    this.length++
  }


  pop() {
    if (this.length === 0) return undefined
    let newArr = []
    let removed = this.data[this.length - 1]
    for (let i = 0; i < this.length - 1; i++) {
      newArr[i] = this.data[i]
    }
    this.length--
    this.data = newArr
    return removed
  }

  shift() {
    if (this.length === 0 ) return
    let ret = this.data[0]
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--
    return ret
  }

  unshift(val) {
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.length++
    this.data[0] = val
  }

  indexOf(val) {
    for (let el in this.data) {
      if (this.data[el] === val) {
        return Number(el)
      }
    }
    return - 1
  }

  resize() {
    this.data.length*= 2
    this.capacity = this.capacity * 2
  }

}


module.exports = DynamicArray;

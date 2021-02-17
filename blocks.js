class Air {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render() {
    context.fillStyle = "#B4B5FE";
    context.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Checkpoint {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render() {
    context.fillStyle = "#B5FEB4";
    context.fillRect(this.x, this.y, this.size, this.size);
  }
}

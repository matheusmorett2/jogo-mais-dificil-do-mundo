class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = 2;
  }

  update(pressedKeys) {
    const velocityX = ((pressedKeys.ArrowRight ? 1 : 0) + (pressedKeys.ArrowLeft ? -1 : 0)) * this.velocity;
    const velocityY = ((pressedKeys.ArrowDown ? 1 : 0) + (pressedKeys.ArrowUp ? -1 : 0)) * this.velocity;
    
    this.x += velocityX;
    this.y += velocityY;
  }

  render() {
    context.fillStyle = "#f00";
    context.strokeStyle = "#000";
    context.lineWidth = 3;
    context.fillRect(this.x, this.y, this.size, this.size);
    context.strokeRect(this.x, this.y, this.size, this.size);
  }
}

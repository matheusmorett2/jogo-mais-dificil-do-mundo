class GameManager {
  constructor() {
    this.height = 14;
    this.width = 24;
    this.size = 35;
    this.blocks = [];
  }

  setupLevel() {
    for(let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++) {
        const block = map[y * this.width + x];
        
        switch(block) {
          case AIR:
            const air = new Air(x * this.size, y * this.size, this.size, this.size);
            this.blocks.push(air);
            break;
          case CPT:
            const checkpoint = new Checkpoint(x * this.size, y * this.size, this.size, this.size);
            this.blocks.push(checkpoint);
            break;
          case PTH:
            break;
        }
      }
    }
  }

  render() {
    for(let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++) {
        if ((y * this.width + x) % 2 == y % 2) {
          context.fillStyle = "#E6E6FF";
        } else {
          context.fillStyle = "#fff";
        }
        
        context.fillRect(x * this.size, y * this.size, this.size, this.size);
      }
    }

    for(const block of this.blocks) {
      block.render();
    }
  }
}
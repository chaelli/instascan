class MediaError extends Error {
  constructor(type) {
    super(`Cannot access video stream (${type}).`);
    this.type = type;
  }
}

class Camera {
  constructor() {
    this._stream = null;
  }

  async start() {
     let constraints;
     constraints = {
        audio: false,
		video: {
			facingMode: "environment",
			width: 640
		}
	};

    this._stream = await navigator.mediaDevices.getUserMedia(constraints);
    
    return this._stream;
  }

  stop() {
    if (!this._stream) {
      return;
    }

    for (let stream of this._stream.getVideoTracks()) {
      stream.stop();
    }

    this._stream = null;
  }

}

module.exports = Camera;

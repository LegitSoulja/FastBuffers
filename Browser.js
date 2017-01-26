 var BinReader = function (buf) {

        this.index = 0;
        this.buffer = new DataView(buf);
    }
    BinReader.prototype.readString8 = function () {
        var data = "";
        while (this.index <= this.buffer.byteLength) {
            var d = this.readUInt8();
            if (!d) break;
            data += String.fromCharCode(d);
        }
        return data;
    }
    BinReader.prototype.readString16 = function () {
        var data = "";
        while (this.index <= this.buffer.byteLength) {
            var d = this.readUInt16BE();
            if (!d) break;
            data += String.fromCharCode(d);
        }
        return data;
    }
    BinReader.prototype.readString32 = function () {
        var data = "";
        while (this.index <= this.buffer.byteLength) {
            var d = this.readUInt32BE();
            if (!d) break;
            data += String.fromCharCode(d);
        }
        return data;
    }
    BinReader.prototype.readInt8 = function () {
        return this.buffer.getInt8(this.index++);
    }
    BinReader.prototype.readUInt8 = function () {
        return this.buffer.getUint8(this.index++);
    }
    BinReader.prototype.readInt16BE = function () {
        var data = this.buffer.getInt16(this.index);
        this.index += 2;
        return data;
    }
    BinReader.prototype.readInt16LE = function () {
        var data = this.buffer.getInt16(this.index, true);
        this.index += 2;
        return data;
    }
    BinReader.prototype.readUInt16BE = function () {
        var data = this.buffer.getUint16(this.index);
        this.index += 2;
        return data;
    }
    BinReader.prototype.readUInt16LE = function () {
        var data = this.buffer.getUint16(this.index, true);
        this.index += 2;
        return data;
    }
    BinReader.prototype.readInt32BE = function () {
        var data = this.buffer.getInt32(this.index);
        this.index += 4;
        return data;
    }
    BinReader.prototype.readInt32LE = function () {
        var data = this.buffer.getInt32(this.index, true);
        this.index += 4;
        return data;
    }
    BinReader.prototype.readUInt32BE = function () {
        var data = this.buffer.getUint32(this.index);
        this.index += 4;
        return data;
    }
    BinReader.prototype.readUInt32LE = function () {
        var data = this.buffer.getUint32(this.index, true);
        this.index += 4;
        return data;
    }

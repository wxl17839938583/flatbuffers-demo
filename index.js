
const { Builder, ByteBuffer } = require('flatbuffers')
const { MapFactory_SDResult_Struct } = require('./map-factory-sdresult-struct.js')
console.log(MapFactory_SDResult_Struct)
const obj = {
  seq_u32: 12,
  origin_highlight_sts: [-1]
}
const builder = new Builder()
const szOffset = MapFactory_SDResult_Struct.createOriginHighlightStsVector(builder, obj.origin_highlight_sts)
const offset = MapFactory_SDResult_Struct.createMapFactory_SDResult_Struct(builder, obj.seq_u32, szOffset)
MapFactory_SDResult_Struct.finishMapFactory_SDResult_StructBuffer(builder, offset)
const buf = builder.asUint8Array()
console.log(buf)
const root = MapFactory_SDResult_Struct.getRootAsMapFactory_SDResult_Struct(new ByteBuffer(buf))
const arr = []
for (let i = 0; i < root.originHighlightStsLength(); i++) {
  const element = root.originHighlightSts(i);
  arr.push(element)
}
console.log(root.seqU32(), arr)
export default function dataParser(data, rowSize) {
    var rows = [];
    for(var i = 0; i < data.length; i += rowSize) {
      rows.push(data.slice(i, i+rowSize));
    }
    return rows ;
  }
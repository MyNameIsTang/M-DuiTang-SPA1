
const util = {
  checkedIamgePath : ( src, options) => {
    let imfSrc = '';
    if (src.indexOf('.jpg') > 0) {
      imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.jpg/, options+'.jpg');
    } else if (src.indexOf('.jpeg') > 0) {
      imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.jpeg/, options+'.jpeg');
    } else if (src.indexOf('.gif_jpeg') > 0) { 
      imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.gif_jpeg/, options+'.gif_jpeg');
    } else { 
      imfSrc = 'https://images.weserv.nl/?url=' + src.replace(/.png/, options+'.png');
    }
    return imfSrc;
  }

}

module.exports = util;

// class SplitImg {
//     splitImg( opt ){
//         let imgW = opt.width,
//             imgH = opt.height,
//             points = opt.data,
//             lastclientY = 0,
//             returnData = [];
//         try{
//             points.forEach( function( point,idx ){
//                 let canvas = document.createElement( "canvas" );
//                 canvas.width = imgW;
//                 let img = document.createElement( "img" );
//                 img.src = opt.base64;

//                 let ctx = canvas.getContext( "2d" );
//                 let splitY = parseInt(point.y - lastclientY,10);

//                 canvas.height = splitY;
//                 canvas.style = `width:${imgW}px;height:${splitY}px`;

//                 ctx.drawImage( img, 0 , lastclientY, imgW, splitY,0,0,  imgW, splitY );

//                 let dataBase64 = canvas.toDataURL("image/png");
//                 //let showImg = document.createElement( "img" );
//                 returnData.push( dataBase64 );
//                 //showImg.src = dataBase64;
//                 //document.body.appendChild( showImg );
//                 lastclientY = point.y;

//             } );
//         }catch(e){
//             throw new Error( e );
//         }
//         return returnData;
//     }
// }
//export default SplitImg;
module.exports = {
    splitImg:function splitImg( opt ){
        let imgW = opt.width,
            imgH = opt.height,
            points = opt.data,
            lastclientY = 0,
            returnData = [];
        
            return new Promise( function(resolve,reject){
            let img = document.createElement( "img" );
            img.src = opt.base64;
                img.onload = ()=>{
                    points.forEach( function( point,idx ){
                        let canvas = document.createElement( "canvas" );
                        canvas.width = imgW;
                        
                        let ctx = canvas.getContext( "2d" );
                        let splitY = parseInt(point.y - lastclientY,10);

                        canvas.height = splitY;
                        canvas.style = `width:${imgW}px;height:${splitY}px`;

                        ctx.drawImage( img, 0 , lastclientY, imgW, splitY,0,0,  imgW, splitY );

                        let dataBase64 = canvas.toDataURL("image/png");
                        //let showImg = document.createElement( "img" );
                        //returnData.push( dataBase64 );
                        returnData.push( {
                            base64:dataBase64,
                            width:img.width,
                            height:splitY
                        } );
                        //showImg.src = dataBase64;
                        //document.body.appendChild( showImg );
                        lastclientY = point.y;

                    } );
                    resolve( returnData );
                };
            } );
        
        //return returnData;
    }
};
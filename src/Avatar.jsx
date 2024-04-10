export default function Avatar({userId, username, online}) {
    function colorHash(inputString){
        var sum = 0;
        for(var i in inputString){
            sum += inputString.charCodeAt(i);
        }
        const r = ~~(('0.'+Math.sin(sum+1).toString().substr(6))*256);
        const g = ~~(('0.'+Math.sin(sum+2).toString().substr(6))*256);
        const b = ~~(('0.'+Math.sin(sum+3).toString().substr(6))*256);
    
        var rgb = "rgb("+r+", "+g+", "+b+")";
    
        var hex = "#";
    
        hex += ("00" + r.toString(16)).substr(-2,2).toUpperCase();
        hex += ("00" + g.toString(16)).substr(-2,2).toUpperCase();
        hex += ("00" + b.toString(16)).substr(-2,2).toUpperCase();
    
        return {
             r: r
            ,g: g
            ,b: b
            ,rgb: rgb
            ,hex: hex
        };
    }

    function colorChecker(color) {
        const hex = color.replace('#', '');
        const c_r = parseInt(hex.substring(0, 0 + 2), 16);
        const c_g = parseInt(hex.substring(2, 2 + 2), 16);
        const c_b = parseInt(hex.substring(4, 4 + 2), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness > 155;
    }
   
    const color = colorHash(userId).hex;
    
    return (
        <div className={`w-8 h-8 relative bg-red-200 rounded-full flex items-center bg-[${color}]`}>
            <div className={"text-center w-full " + (!colorChecker(color) ? 'text-white' : '')}>{username[0].toUpperCase()}</div>
            {
                online && (
                    <div className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white"/>
                )
            }
            {
                !online && (
                    <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"/>
                )
            }
            
        </div>
    ) 
}
export const convertNumber = (number)=>{

    const numWithCommas = number.toLocaleString();
    var arr = numWithCommas.split(",");

    if(arr.length==5){
        //Trillians
        return arr[0] + "."+ arr[1].slice(0,2) + "T";
    }
    else if(arr.length==4){
        //Billians
        return arr[0] + "."+ arr[1].slice(0,2) + "B";
    }
    else if(arr.length==3){
        //Millians
        return arr[0] + "."+ arr[1].slice(0,2) + "M";
    }
    else if(arr.length==2){
        //Thousands
        return arr[0] + "."+ arr[1].slice(0,2) + "K";
    }
    else{
        //Hundreds
        return number.toLocaleString();
    }



}
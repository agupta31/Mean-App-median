var express=require("express"),
app=express(),
bodyParser=require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(3000,function(){
  console.log("sserver started..");
});

function sortList(arr){
arr.sort(function sort(a,b){
         if(a<b)
            return -1;
          else if(a>b)
             return 1;
             else {
               return 0;
             }

}
);
}

app.post("/median",function(req,res){
    var arr=req.body;
    res.setHeader("content-type","application/json");
    var median;

   function getMedianVal(){
        sortList(arr);
        console.log(arr);
        console.log(arr.length);
        if(arr.length%2!==0)
             median=arr[(arr.length+1)/2-1];
          else{
              console.log("even");
              median=(parseInt(arr[(arr.length/2)-1])+parseInt(arr[arr.length/2]))/2;
            }


          console.log(median);
          res.json(median);

   }
   getMedianVal();


});

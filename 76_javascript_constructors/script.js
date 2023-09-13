 // class creation 

 class RailwayForm{
    constructor(name,trainnum,address)
    {
        this.name=name
        this.trainno=[trainnum]
        this.address=address
    }
    preview()
    {
        alert(this.name+" form preview , trainno"+this.trainno+" addres "+this.address)
    }
    submit()
    {
        alert(this.name+" form submitted , trainno"+this.trainno)
    }
    cancel()
    {
        alert(this.name+" form cancelled " +this.trainno) 
        this.trainno=0
    }
}
 
 // object craetion

 let surya=new RailwayForm("surya",1234,"11 hbavlb 53346")
 surya.preview()
 let prakash=new RailwayForm("prakash",5678,"22 vkghv 598998")
 prakash.preview()
 surya.submit()
 prakash.submit()
 prakash.cancel()
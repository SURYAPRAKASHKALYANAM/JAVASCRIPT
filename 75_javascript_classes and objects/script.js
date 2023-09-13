 // class creation 

 class RailwayForm{
    submit()
    {
        alert(this.name+" form submitted , trainno"+this.trainno)
    }
    cancel()
    {
        alert(this.name+" form cancelled " +this.trainno) 
    }
    fill(name,trainnum)
    {
        this.name=name
        this.trainno=trainnum
    }
 }

 // object craetion

 let surya=new RailwayForm()
 surya.fill("surya",1234)
 let prakash=new RailwayForm()
 prakash.fill("prakash",5678)

 surya.submit()
 prakash.submit()
 prakash.cancel()